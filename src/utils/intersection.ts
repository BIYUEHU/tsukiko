import Parser from '../parser';
import type { IonParserConfig, ParserFunction, ParserInfer } from '../types';

export class IntersectionParser<T extends IonParserConfig> extends Parser<ParserInfer<T[0]> & ParserInfer<T[1]>> {
	protected rules: ParserFunction[] = [];

	public constructor(values: T) {
		super();
		this.rules.push(input => values[0].check(input) && values[1].check(input));
	}
}

export default IntersectionParser;
