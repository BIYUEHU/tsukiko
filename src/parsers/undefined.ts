import type { ParserFunction } from '../types';
import Parser from '../parser';

export class UndefinedParser extends Parser<undefined> {
	protected rules: ParserFunction<boolean>[] = [input => input === undefined];
}

export default UndefinedParser;
