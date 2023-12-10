import Parser from '../../parser';
import type { ParserFunction } from '../../types';

export class LiteralParser<T extends string | number> extends Parser<T> {
	protected rules: ParserFunction[] = [];

	public constructor(value: T) {
		super();
		this.rules.push(input => {
			const isString = typeof input === 'string';
			const isNumber = typeof input === 'number';
			if (!isString && !isNumber) return this.error('literal_only');
			if (value === input) return null;
			if (isString) return this.error('literal_string_error', { value });
			return this.error('literal_number_error', { value });
		});
	}
}

export default LiteralParser;
