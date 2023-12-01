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
} from './parsers';
import { IonParserConfig, ObjectParserConfig, ParserFunction, TupleParserConfig } from './types';
import { CustomParser, IntersectionParser, LiteralParser, UnionParser } from './utils';

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

export function arrayFactory<T extends Parser<unknown> = NeverParser>(types?: T) {
	return new ArrayParser<T>(types ?? (neverFactory() as unknown as T));
}

export function tupleFactory<T extends TupleParserConfig>(types: T = [] as never as T) {
	return new TupleParser<T>(types);
}

export function objectFactory<T extends ObjectParserConfig>(types: T = {} as T) {
	return new ObjectParser<T>(types);
}

export function literalFactory<T extends string | number>(values: T) {
	return new LiteralParser<T>(values);
}

export function intersectionFactory<T extends IonParserConfig>(values: T) {
	return new IntersectionParser<T>(values);
}

export function unionFactory<T extends IonParserConfig>(values: T) {
	return new UnionParser<T>(values);
}

export function customFactory<T>(handle: ParserFunction) {
	return new CustomParser<T>(handle);
}
