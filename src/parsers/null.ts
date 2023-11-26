import type { ParserFunction } from '../types';
import Parser from '../parser';

export class NullParser extends Parser<null> {
	protected rules: ParserFunction<boolean>[] = [input => input === null];
}

export default NullParser;
