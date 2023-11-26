import { NumberParser, StringParser } from '../parsers';
import Parser from '../parser';
import type { ParserFunction } from '../types';

export class LiteralParser<T extends string | number> extends Parser<T> {
	protected rules: ParserFunction[] = [];

	public constructor(values: T) {
		super();
		this.rules.push(
			input => (new StringParser().check(input) || new NumberParser().check(input)) && values === input,
		);
	}
}

export default LiteralParser;
