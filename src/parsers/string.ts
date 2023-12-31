import type { Langs, ParserFunction } from '../types';
import NullParser from './null';
import Parser from '../parser';

const MATCH_EMAIL = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
const MATCH_DOMAIN = /[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\/.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\/.?/;
const MATCH_URL = /^http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/;

export class StringParser extends Parser<string> {
	protected rules: ParserFunction[] = [input => (typeof input === 'string' ? null : this.error('not_string'))];

	public regexp(match: RegExp) {
		let lang: Langs = 'illegal_match_string';
		if (match === MATCH_EMAIL) lang = 'not_a_email';
		else if (match === MATCH_DOMAIN) lang = 'not_a_domain';
		else if (match === MATCH_URL) lang = 'not_a_url';
		this.rules.push(input =>
			!new NullParser().check(match.exec(input as string))
				? null
				: this.error(lang, {
						input: input as string,
						content: `${match}`.substring(1, `${match}`.length - 1),
				  }),
		);
		return this;
	}

	public email() {
		this.regexp(MATCH_EMAIL);
		return this;
	}

	public domain() {
		this.regexp(MATCH_DOMAIN);
		return this;
	}

	public url() {
		this.regexp(MATCH_URL);
		return this;
	}

	public startsWith(value: string) {
		this.rules.push(input =>
			(input as string).startsWith(value)
				? null
				: this.error('illegal_starts_with', { input: input as string, content: value }),
		);
		return this;
	}

	public endsWith(value: string) {
		this.rules.push(input =>
			(input as string).endsWith(value)
				? null
				: this.error('illegal_ends_with', { input: input as string, content: value }),
		);
		return this;
	}
}

export default StringParser;
