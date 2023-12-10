import type { ParserFunction } from '../types';
import Parser from '../parser';

export class BooleanParser extends Parser<boolean> {
	protected rules: ParserFunction[] = [input => (typeof input === 'boolean' ? null : this.error('not_boolean'))];

	public true() {
		this.rules.push(input => (input === true ? null : this.error('not_true')));
		return this;
	}

	public false() {
		this.rules.push(input => (input === false ? null : this.error('not_false')));
		return this;
	}
}

export default BooleanParser;
