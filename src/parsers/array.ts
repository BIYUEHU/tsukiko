import type { ParserInfer, ParserFunction } from '../types';
import { NeverParser } from './never';
import { Parser } from '../parser';
import TsuError from '../utils/error';

export class ArrayParser<S extends Parser<unknown> = NeverParser> extends Parser<ParserInfer<S>[]> {
	protected rules: ParserFunction[] = [
		input => {
			if (!Array.isArray(input)) return this.error('not_an_array');
			let count = 0;
			try {
				input.forEach(element => {
					this.elementParser.parse(element);
					count += 1;
				});
			} catch (error) {
				if (!(error instanceof TsuError)) throw error;
				return this.error('array_error', { length: count, value: error.message });
			}
			return null;
		},
	];

	private elementParser: S;

	public constructor(types: S) {
		super();
		this.elementParser = types;
	}
}

export default ArrayParser;
