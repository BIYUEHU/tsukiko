import { ObjectParser } from '../..';
import Parser from '../../parser';
import type { IonParserConfig, ParserFunction, ParserInfer } from '../../types';

export class IntersectionParser<T extends IonParserConfig> extends Parser<ParserInfer<T[0]> & ParserInfer<T[1]>> {
	private values: T;

	protected rules: ParserFunction[] = [];

	public constructor(values: T) {
		super();
		this.values = values;
		this.rules.push(input => {
			const result1 = this.values[0].parseSafe(input);
			const result2 = this.values[1].parseSafe(input);
			if (!result1.value) throw this.error('intersection_error_first', { value: result1.error.message });
			if (!result2.value) throw this.error('intersection_error_second', { value: result2.error.message });
			return null;
		});
	}

	protected defaultHandle(input: ParserInfer<T[0]> & ParserInfer<T[1]>) {
		if (!(this.values[0] instanceof ObjectParser && this.values[1] instanceof ObjectParser)) return input;
		return Object.assign(
			this.values[0].strict(false).parse(input),
			this.values[1].strict(false).parse(input),
		) as ParserInfer<T[0]> & ParserInfer<T[1]>;
	}
}

export default IntersectionParser;
