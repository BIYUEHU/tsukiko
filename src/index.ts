/*
 * @Author: Hotaru biyuehuya@gmail.com
 * @Blog: https://hotaru.icu
 * @Date: 2023-11-24 18:43:20
 * @LastEditors: Hotaru biyuehuya@gmail.com
 * @LastEditTime: 2023-12-10 15:38:50
 */
import {
  anyFactory,
  arrayFactory,
  booleanFactory,
  customFactory,
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
} from './factory';
import type {
  ObjectParserConfig,
  ObjectParserInfer,
  ParserInfer,
  TupleParserConfig,
  TupleParserInfer,
  langType,
  ParserFunction
} from './types';
import { DEFAULT_LANG } from './utils/lang';

export * from './factory';
export * from './types';
export * from './parsers/advance';
export * from './parsers';
export * from './parser';
export * from './utils/error';

/* eslint-disable-next-line @typescript-eslint/no-namespace */
export namespace Tsu {
  export const Number = numberFactory;
  export const String = stringFactory;
  export const Boolean = booleanFactory;
  export const Null = nullFactory;
  export const Undefined = undefinedFactory;
  export const Any = anyFactory;
  export const Unknown = unknownFactory;
  export const Never = neverFactory;
  export const Array = arrayFactory;
  export const Tuple = tupleFactory;
  export const Object = objectFactory;
  export const Literal = literalFactory;
  export const Intersection = intersectionFactory;
  export const Union = unionFactory;
  export const Custom = customFactory;
  export type infer<T> = ParserInfer<T>;
  export type inferObject<T extends ObjectParserConfig> = ObjectParserInfer<T>;
  export type inferTuple<T extends TupleParserConfig> = TupleParserInfer<T>;
}

export function tsuFactory(lang: langType = DEFAULT_LANG): typeof Tsu {
  return {
    Number() {
      return Tsu.Number().lang(lang);
    },
    String() {
      return Tsu.String().lang(lang);
    },
    Boolean() {
      return Tsu.Boolean().lang(lang);
    },
    Null() {
      return Tsu.Null().lang(lang);
    },
    Undefined() {
      return Tsu.Undefined().lang(lang);
    },
    Any() {
      return Tsu.Any().lang(lang);
    },
    Unknown() {
      return Tsu.Unknown().lang(lang);
    },
    Never() {
      return Tsu.Never().lang(lang);
    },
    Array(value) {
      return Tsu.Array(value).lang(lang);
    },
    Tuple(value) {
      return Tsu.Tuple(value).lang(lang);
    },
    Object(value) {
      return Tsu.Object(value).lang(lang);
    },
    Literal(value) {
      return Tsu.Literal(value).lang(lang);
    },
    Intersection(values) {
      return Tsu.Intersection(values).lang(lang);
    },
    Union(value) {
      return Tsu.Union(value).lang(lang);
    },
    Custom<T>(handle: ParserFunction<boolean>) {
      return Tsu.Custom<T>(handle).lang(lang);
    }
  };
}

export default Tsu;
