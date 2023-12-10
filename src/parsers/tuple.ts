import type { TupleParserInfer, ParserFunction, TupleParserConfig } from '../types';
import { Parser } from '../parser';
import TsuError from '../utils/error';

export class TupleParser<S extends TupleParserConfig> extends Parser<TupleParserInfer<S>> {
	protected rules: ParserFunction[] = [
		input => {
			if (!Array.isArray(input)) return this.error('not_a_tuple');
			if (input.length !== this.elementsParser.length)
				return this.error('illegal_tuple_length', { value: this.elementsParser.length, input: input.length });
			let count = 0;
			try {
				input.forEach(element => {
					this.elementsParser[count].parse(element);
					count += 1;
				});
			} catch (error) {
				if (!(error instanceof TsuError)) throw error;
				return this.error('tuple_error', { length: count, value: error.message });
			}
			return null;
		},
	];

	private elementsParser: S;

	public constructor(types: S) {
		super();
		this.elementsParser = types;
	}
}

export default TupleParser;
