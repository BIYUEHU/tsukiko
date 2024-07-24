import type { JSONSchema7Type } from 'json-schema'
import type { Langs, ParserFunction, ParserImpl, ParserSafeReturn, SchemaMetadata } from './types'
import TsuError from './utils/error'
import Lang from './utils/lang'
import { generateSchema, getSchemaMeta, setSchemaMeta } from './utils/schema'

export abstract class Parser<T> extends Lang implements ParserImpl<T> {
  private testInput(input: unknown): ReturnType<ParserFunction> {
    if (this.isOptional && (input === undefined || (!this.onlyEmpty && input === null))) return null
    try {
      for (const rule of this.rules) {
        const result = rule(input)
        if (!result) continue
        throw result
      }
    } catch (error) {
      if (!(error instanceof TsuError)) throw error
      return error
    }
    return null
  }

  private defaultHandleBefore(input: T): T {
    const isEmpty = input === undefined || (!this.onlyEmpty && input === null)
    if (isEmpty && !this.defaultValue /* && !this.isOptional */) return undefined as T
    return this.defaultHandle(isEmpty && this.defaultValue ? (this.defaultValue as T) : input)
  }

  protected abstract rules: ParserFunction[]

  protected defaultHandle(input: T): T {
    this.defaultHandle.toString()
    return input
  }

  protected error(lang: Langs, data?: { [propName: string]: string | number }) {
    this.error.toString()
    return new TsuError(this.langType, lang, data)
  }

  protected isOptional = false

  /* Allow undefined but not null */
  private onlyEmpty = false

  protected defaultValue?: T

  protected setMeta(metadata: Partial<SchemaMetadata>) {
    setSchemaMeta(this, metadata)
  }

  public parse(input: unknown): T {
    const result = this.testInput(input)
    if (!result) return this.defaultHandleBefore(input as T)
    throw result
  }

  public parseSafe(input: unknown): ParserSafeReturn<T> {
    try {
      return { value: true, data: this.parse(input) }
    } catch (error) {
      if (!(error instanceof TsuError)) throw error
      return { value: false, error }
    }
  }

  public parseAsync(input: unknown) {
    return new Promise((resolve, reject) => {
      const result = this.parseSafe(input)
      if (result.value) resolve(result.data)
      else reject(result.error)
    })
  }

  public check(input: unknown): input is T {
    return !this.testInput(input)
  }

  public optional(): Parser<T | undefined> {
    this.setMeta({ optional: true })
    this.isOptional = true
    return this
  }

  public default(value: T) {
    if (getSchemaMeta(this).type) this.setMeta({ default: value as JSONSchema7Type })
    this.defaultValue = value
    return this.optional()
  }

  public empty() {
    this.onlyEmpty = true
    return this
  }

  public describe(description: string) {
    this.setMeta({ description })
    return this
  }

  public title(title: string) {
    this.setMeta({ title })
    return this
  }

  public schema(bringSchema = true) {
    const schema = generateSchema(this)
    if (bringSchema) schema.$schema = 'http://json-schema.org/draft-07/schema#'
    return schema
  }
}

export default Parser
