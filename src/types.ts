import type enUS from './lang/en_US';
import type Parser from './parser';
import type TsuError from './utils/error';

export type Constructor = new (...args: unknown[]) => unknown;

export type ParserInfer<T> = T extends Parser<infer R> ? R : never;
export type GetParserClassType<T> = T extends new () => Parser<infer R> ? R : never;

export type ParserFunction<R = null | TsuError> = (input: unknown) => R;
export type ParserSafeReturn<T> = { value: true; data: T /* | undefined */ } | { value: false; error: TsuError };

export interface ParserImpl<T> {
  parse: ParserFunction<T>;
  parseSafe: ParserFunction<ParserSafeReturn<T>>;
  check: ParserFunction<boolean>;
  optional: () => Parser<T | undefined>;
  default: (value: T) => Parser<T | undefined>;
}

export interface ObjectParserConfig {
  [propName: string]: Parser<unknown>;
}

export type ObjectParserInfer<T extends ObjectParserConfig> = {
  [K in keyof T]: ParserInfer<T[K]>;
};

export type TupleParserConfig = [Parser<unknown>, ...Parser<unknown>[]];

export type TupleParserInfer<T extends TupleParserConfig> = {
  [K in keyof T]: ParserInfer<T[K]>;
};

export type IonParserConfig = Parser<unknown>[];

export type Langs = keyof typeof enUS;

export type langType = 'en_US' | 'ja_JP' | 'zh_TW' | 'zh_CN';
