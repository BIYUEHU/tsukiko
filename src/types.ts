import type { JSONSchema7, JSONSchema7Type, JSONSchema7TypeName } from 'json-schema'
import type enUS from './lang/en_US'
import type Parser from './parser'
import type TsuError from './utils/error'

export type Constructor = new (...args: unknown[]) => unknown

export type ParserInfer<T> = T extends Parser<infer R> ? R : never
export type GetParserClassType<T> = T extends new () => Parser<infer R> ? R : never

export type ParserFunction<R = null | TsuError> = (input: unknown) => R
export type ParserSafeReturn<T> = { value: true; data: T /* | undefined */ } | { value: false; error: TsuError }

export interface ParserImpl<T> {
  parse: ParserFunction<T>
  parseSafe: ParserFunction<ParserSafeReturn<T>>
  check: ParserFunction<boolean>
  optional: () => Parser<T | undefined>
  default: (value: T) => Parser<T | undefined>
}

export interface ObjectParserConfig {
  [propName: string]: Parser<unknown>
}

export type ObjectParserInfer<T extends ObjectParserConfig> = {
  [K in keyof T]: ParserInfer<T[K]>
}

export type TupleParserConfig = [Parser<unknown>, ...Parser<unknown>[]]

export type TupleParserInfer<T extends TupleParserConfig> = {
  [K in keyof T]: ParserInfer<T[K]>
}

export type IonParserConfig = Parser<unknown>[]

export type Langs = keyof typeof enUS

export type langType = 'en_US' | 'ja_JP' | 'zh_TW' | 'zh_CN'

type SchemaType =
  | JSONSchema7TypeName
  | { mode: 'allOf' | 'oneOf'; items: SchemaMetadata[] }
  | { enum: (string | number | boolean)[] }
  | { const: string | number | boolean }

export type JsonSchema = Omit<JSONSchema7, 'pattern'> & { pattern?: string }

export interface SchemaMetadata {
  type?: SchemaType
  optional?: boolean
  title?: string
  default?: JSONSchema7Type
  description?: string
  /* String */
  pattern?: RegExp
  maxLength?: number
  minLength?: number
  /* Number */
  maximum?: number
  exclusiveMax?: boolean
  minimum?: number
  exclusiveMin?: boolean
  multipleOf?: number
  /* Array */
  items?: SchemaMetadata | SchemaMetadata[] | Record<string, SchemaMetadata>
  maxItems?: number
  minItems?: number
  /* Object */
  additionalProperties?: boolean
  maxProperties?: number
  minProperties?: number
}
