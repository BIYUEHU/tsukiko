/*
 * @Author: Hotaru me@hotaru.icu
 * @Blog: https://hotaru.icu
 * @Date: 2023-11-24 18:43:20
 * @LastEditors: Hotaru biyuehuya@gmail.com
 * @LastEditTime: 2024-07-23 20:58:57
 */
import 'reflect-metadata'
import {
  anyFactory,
  arrayFactory,
  booleanFactory,
  classFactory,
  customFactory,
  enumFactory,
  functionFactory,
  intersectionFactory,
  literalFactory,
  neverFactory,
  nullFactory,
  numberFactory,
  objectFactory,
  stringFactory,
  tupleFactory,
  undefinedFactory,
  unionFactory,
  unknownFactory
} from './factory'
import type {
  ObjectParserConfig,
  ObjectParserInfer,
  ParserInfer,
  TupleParserConfig,
  TupleParserInfer,
  langType,
  ParserFunction
} from './types'
import { DEFAULT_LANG } from './utils/lang'
import type { Constructor, IonParserConfig } from './types'
import type { Parser } from './parser'

export * from './factory'
export * from './types'
export * from './parsers'
export * from './parser'
export * from './utils/error'

/* eslint-disable-next-line @typescript-eslint/no-namespace */
export namespace Tsu {
  // biome-ignore lint:
  export const Number = numberFactory
  // biome-ignore lint:
  export const String = stringFactory
  // biome-ignore lint:
  export const Boolean = booleanFactory
  export const Null = nullFactory
  export const Undefined = undefinedFactory
  export const Any = anyFactory
  export const Unknown = unknownFactory
  export const Never = neverFactory
  // biome-ignore lint:
  export const Array = arrayFactory
  export const Tuple = tupleFactory
  // biome-ignore lint:
  export const Object = objectFactory
  export const Literal = literalFactory
  export const Intersection = intersectionFactory
  export const Union = unionFactory
  export const Enum = enumFactory
  export const Custom = customFactory
  // biome-ignore lint:
  export const Function = functionFactory
  export const Class = classFactory
  export type infer<T> = ParserInfer<T>
  export type inferObject<T extends ObjectParserConfig> = ObjectParserInfer<T>
  export type inferTuple<T extends TupleParserConfig> = TupleParserInfer<T>
}

export function tsuFactory(lang: langType = DEFAULT_LANG): typeof Tsu {
  return {
    Number() {
      return Tsu.Number().lang(lang)
    },
    String() {
      return Tsu.String().lang(lang)
    },
    Boolean() {
      return Tsu.Boolean().lang(lang)
    },
    Null() {
      return Tsu.Null().lang(lang)
    },
    Undefined() {
      return Tsu.Undefined().lang(lang)
    },
    Any() {
      return Tsu.Any().lang(lang)
    },
    Unknown() {
      return Tsu.Unknown().lang(lang)
    },
    Never() {
      return Tsu.Never().lang(lang)
    },
    Array(value) {
      return Tsu.Array(value).lang(lang)
    },
    Tuple(value) {
      return Tsu.Tuple(value).lang(lang)
    },
    Object(value) {
      return Tsu.Object(value).lang(lang)
    },
    Literal(value) {
      return Tsu.Literal(value).lang(lang)
    },
    Intersection<T extends IonParserConfig>(...values: T) {
      return Tsu.Intersection<T>(...values).lang(lang)
    },
    Union<T extends IonParserConfig>(...value: T) {
      return Tsu.Union<T>(...value).lang(lang)
    },
    Enum<T extends Parser<string | number>[]>(...values: T) {
      return Tsu.Enum(...values).lang(lang)
    },
    Custom<T>(handle: ParserFunction<boolean>) {
      return Tsu.Custom<T>(handle).lang(lang)
    },
    Function<T extends (...args: unknown[]) => unknown = (...args: unknown[]) => unknown>() {
      return functionFactory<T>().lang(lang)
    },
    Class<T extends Constructor = Constructor>() {
      return classFactory<T>()
    }
  }
}

export default Tsu
