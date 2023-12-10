import type { ParserFunction } from '../types';
import Parser from '../parser';

export class AnyParser<T = any> extends Parser<T> {
	protected rules: ParserFunction[] = [() => null];
}

export default AnyParser;
