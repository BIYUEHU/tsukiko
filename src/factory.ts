import Parser from './parser';
import {
  AnyParser,
  ArrayParser,
  BooleanParser,
  NeverParser,
  NullParser,
  NumberParser,
  ObjectParser,
  StringParser,
  TupleParser,
  UndefinedParser,
  UnknownParser,
  CustomParser,
  IntersectionParser,
  LiteralParser,
  UnionParser,
  EnumParser,
  ClassParser,
  FunctionParser
} from './parsers';
import { Constructor, IonParserConfig, ObjectParserConfig, ParserFunction, TupleParserConfig } from './types';

export function numberFactory() {
  return new NumberParser();
}

export function stringFactory() {
  return new StringParser();
}

export function booleanFactory() {
  return new BooleanParser();
}

export function undefinedFactory() {
  return new UndefinedParser();
}

export function nullFactory() {
  return new NullParser();
}

export function anyFactory() {
  return new AnyParser();
}

export function unknownFactory() {
  return new UnknownParser();
}

export function neverFactory() {
  return new NeverParser();
}

export function arrayFactory<T extends Parser<unknown>>(types: T) {
  return new ArrayParser<T>(types);
}

export function tupleFactory<T extends TupleParserConfig>(types: T) {
  return new TupleParser<T>(types);
}

const emptyObject = {};

export function objectFactory<T extends ObjectParserConfig = typeof emptyObject>(types?: T) {
  return new ObjectParser<T>(types ?? ({} as T));
}

export function literalFactory<T extends string | number>(values: T) {
  return new LiteralParser<T>(values);
}

export function intersectionFactory<T extends IonParserConfig>(...values: [...T]) {
  return new IntersectionParser<T>(...values);
}

export function unionFactory<T extends IonParserConfig>(...values: [...T]) {
  return new UnionParser<T>(...values);
}

export function enumFactory<T extends Parser<string | number>[]>(...values: T) {
  return new EnumParser<T>(...values);
}

export function customFactory<T>(handle: ParserFunction<boolean>) {
  return new CustomParser<T>(handle);
}

export function functionFactory<T extends (...args: unknown[]) => unknown = (...args: unknown[]) => unknown>() {
  return new FunctionParser<T>();
}

export function classFactory<T extends Constructor = Constructor>() {
  return new ClassParser<T>();
}
