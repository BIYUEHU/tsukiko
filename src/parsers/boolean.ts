import type { ParserFunction } from '../types';
import Parser from '../parser';

export class BooleanParser extends Parser<boolean> {
	protected rules: ParserFunction<boolean>[] = [input => typeof input === 'boolean'];

	public true() {
		this.rules.push(input => input === true);
		return this;
	}

	public false() {
		this.rules.push(input => input === false);
		return this;
	}
}

export default BooleanParser;
