import type { ParserFunction } from '../types';
import Parser from '../parser';

export class NeverParser extends Parser<never> {
	protected rules: ParserFunction<boolean>[] = [() => false];
}

export default NeverParser;
