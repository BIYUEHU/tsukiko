import type { ParserInfer, ParserFunction } from '../types';
import { NeverParser } from '.';
import { Parser } from '../parser';

export class ArrayParser<S extends Parser<unknown> = NeverParser> extends Parser<ParserInfer<S>[]> {
	protected rules: ParserFunction<boolean>[] = [
		input => {
			if (!Array.isArray(input)) return false;
			try {
				input.forEach(element => {
					if (!this.elementParser.check(element)) throw new Error();
				});
			} catch {
				return false;
			}
			return true;
		},
	];

	private elementParser: S;

	public constructor(types: S) {
		super();
		this.elementParser = types;
	}
}

export default ArrayParser;
