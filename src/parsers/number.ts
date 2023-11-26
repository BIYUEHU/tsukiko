import type { ParserFunction } from '../types';
import Parser from '../parser';

export class NumberParser extends Parser<number> {
	protected rules: ParserFunction<boolean>[] = [
		input => {
			if (typeof input !== 'number') return false;
			if (Number.isNaN(input)) return false;
			return true;
		},
	];

	public max(value: number, has: boolean = true) {
		this.rules.push(input => (input as number) <= value && (has || input !== value));
		return this;
	}

	public min(value: number, has: boolean = true) {
		this.rules.push(input => (input as number) >= value && (has || input !== value));
		return this;
	}

	public range(min: number, max: number, minHas: boolean = true, maxHas: boolean = true) {
		this.rules.push(
			input =>
				(input as number) >= min &&
				(minHas || input !== min) &&
				(input as number) <= max &&
				(maxHas || input !== max),
		);
		return this;
	}

	public int() {
		this.rules.push(input => input === parseInt((input as number).toFixed(2), 10));
		return this;
	}
}

export default NumberParser;
