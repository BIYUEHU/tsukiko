import type { ParserFunction } from '../types';
import NullParser from './null';
import Parser from '../parser';

export class StringParser extends Parser<string> {
	protected rules: ParserFunction<boolean>[] = [input => typeof input === 'string'];

	public regexp(match: RegExp) {
		this.rules.push(input => !new NullParser().check(match.exec(input as string)));
		return this;
	}
}

export default StringParser;
