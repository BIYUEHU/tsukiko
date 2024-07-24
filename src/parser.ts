import type { JSONSchema7Type } from 'json-schema'
import type { Langs, ParserFunction, ParserImpl, ParserSafeReturn, SchemaMetadata } from './types'
import TsuError from './utils/error'
import Lang from './utils/lang'
import { generateSchema, getSchemaMeta, setSchemaMeta } from './utils/schema'

/**
 * Abstract base class for parsers.
 */
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

  /**
   * Parses the input and returns the result.
   * @param input - The input to parse.
   * @returns The parsed result.
   * @throws {TsuError} If parsing fails.
   */
  public parse(input: unknown): T {
    const result = this.testInput(input)
    if (!result) return this.defaultHandleBefore(input as T)
    throw result
  }

  /**
   * Safely parses the input and returns a result object.
   * @param input - The input to parse.
   * @returns An object containing the parsing result or error.
   */
  public parseSafe(input: unknown): ParserSafeReturn<T> {
    try {
      return { value: true, data: this.parse(input) }
    } catch (error) {
      if (!(error instanceof TsuError)) throw error
      return { value: false, error }
    }
  }

  /**
   * Asynchronously parses the input.
   * @param input - The input to parse.
   * @returns A promise that resolves with the parsed result or rejects with an error.
   */
  public parseAsync(input: unknown) {
    return new Promise((resolve, reject) => {
      const result = this.parseSafe(input)
      if (result.value) resolve(result.data)
      else reject(result.error)
    })
  }

  /**
   * Checks if the input is valid according to the parser's rules.
   * @param input - The input to check.
   * @returns True if the input is valid, false otherwise.
   */
  public check(input: unknown): input is T {
    return !this.testInput(input)
  }

  /**
   * Makes the parser optional.
   * @returns The current Parser instance.
   */
  public optional(): Parser<T | undefined> {
    this.setMeta({ optional: true })
    this.isOptional = true
    return this
  }

  /**
   * Sets a default value for the parser.
   * @param value - The default value.
   * @returns The current Parser instance.
   */
  public default(value: T) {
    if (getSchemaMeta(this).type) this.setMeta({ default: value as JSONSchema7Type })
    this.defaultValue = value
    return this.optional()
  }

  /**
   * Configures the parser to allow undefined but not null.
   * @returns The current Parser instance.
   */
  public empty() {
    this.onlyEmpty = true
    return this
  }

  /**
   * Sets a description for the parser.
   * @param description - The description to set.
   * @returns The current Parser instance.
   */
  public describe(description: string) {
    this.setMeta({ description })
    return this
  }

  /**
   * Sets a title for the parser.
   * @param title - The title to set.
   * @returns The current Parser instance.
   */
  public title(title: string) {
    this.setMeta({ title })
    return this
  }

  /**
   * Generates a JSON schema for the parser.
   * @param bringSchema - Whether to include the $schema property. Defaults to true.
   * @returns The generated JSON schema.
   */
  public schema(bringSchema = true) {
    const schema = generateSchema(this)
    if (bringSchema) schema.$schema = 'http://json-schema.org/draft-07/schema#'
    return schema
  }
}

export default Parser
