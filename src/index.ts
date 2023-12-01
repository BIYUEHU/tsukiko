/*
 * @Author: Hotaru biyuehuya@gmail.com
 * @Blog: https://hotaru.icu
 * @Date: 2023-11-24 18:43:20
 * @LastEditors: Hotaru biyuehuya@gmail.com
 * @LastEditTime: 2023-12-01 22:37:24
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
	unknownFactory,
} from './factory';
import type { ObjectParserConfig, ObjectParserInfer, ParserInfer, TupleParserConfig, TupleParserInfer } from './types';

export * from './factory';
export * from './types';

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

export default Tsu;
