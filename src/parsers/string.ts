import type { ParserFunction } from '../types';
import NullParser from './null';
import Parser from '../parser';

export class StringParser extends Parser<string> {
	protected rules: ParserFunction<boolean>[] = [input => typeof input === 'string'];

	public regexp(match: RegExp) {
		this.rules.push(input => !new NullParser().check(match.exec(input as string)));
		return this;
	}

	public email() {
		this.regexp(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
		return this;
	}

	public domain() {
		this.regexp(/[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\/.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\/.?/);
		return this;
	}

	public url() {
		this.regexp(/^http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/);
		return this;
	}

	public startsWith(value: string) {
		this.rules.push(input => (input as string).startsWith(value));
		return this;
	}

	public endsWith(value: string) {
		this.rules.push(input => (input as string).endsWith(value));
		return this;
	}
}

export default StringParser;
