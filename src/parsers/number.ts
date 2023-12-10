import type { ParserFunction } from '../types';
import Parser from '../parser';

export class NumberParser extends Parser<number> {
	protected rules: ParserFunction[] = [
		input => {
			if (typeof input !== 'number') return this.error('not_number');
			if (Number.isNaN(input)) return this.error('is_a_NaN');
			return null;
		},
	];

	public max(value: number, has: boolean = true) {
		this.rules.push(input =>
			(input as number) <= value && (has || input !== value)
				? null
				: this.error(has ? 'too_bigger_has' : 'too_bigger', { input: input as number, value }),
		);
		return this;
	}

	public min(value: number, has: boolean = true) {
		this.rules.push(input =>
			(input as number) >= value && (has || input !== value)
				? null
				: this.error(has ? 'too_smaller_has' : 'too_smaller', { input: input as number, value }),
		);
		return this;
	}

	public range(min: number, max: number, minHas: boolean = true, maxHas: boolean = true) {
		this.min(min, minHas);
		this.max(max, maxHas);
		return this;
	}

	public int() {
		this.rules.push(input =>
			input === parseInt((input as number).toFixed(2), 10)
				? null
				: this.error('not_integer_number', { input: input as number }),
		);
		return this;
	}

	public odd() {
		this.rules.push(input => ((input as number) % 2 !== 0 ? null : this.error('not_odd_number')));
		return this;
	}

	public even() {
		this.rules.push(input => ((input as number) % 2 === 0 ? null : this.error('not_even_number')));
		return this;
	}

	public natural() {
		this.int();
		this.rules.push(input => ((input as number) >= 0 ? null : this.error('not_natural_number')));
		return this;
	}

	public positive() {
		this.rules.push(input => ((input as number) > 0 ? null : this.error('not_positive_number')));
		return this;
	}

	public negative() {
		this.rules.push(input => ((input as number) < 0 ? null : this.error('not_negative_number')));
		return this;
	}

	public percent() {
		this.rules.push(input => ((input as number) >= 0 && (input as number) <= 1 ? null : this.error('not_percentage')));
	}
}

export default NumberParser;
