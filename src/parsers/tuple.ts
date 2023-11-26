import type { TupleParserInfer, ParserFunction, TupleParserConfig } from '../types';
import { Parser } from '../parser';

export class TupleParser<S extends TupleParserConfig> extends Parser<TupleParserInfer<S>> {
	protected rules: ParserFunction<boolean>[] = [
		input => {
			if (!Array.isArray(input)) return false;
			if (input.length !== this.elementsParser.length) return false;
			try {
				let count = 0;
				input.forEach(element => {
					if (!this.elementsParser[count].check(element)) throw new Error();
					count += 1;
				});
			} catch {
				return false;
			}
			return true;
		},
	];

	private elementsParser: S;

	public constructor(types: S) {
		super();
		this.elementsParser = types;
	}
}

export default TupleParser;
