import { ParserFunction } from '..';
import Parser from '../parser';

export class CustomParser<T> extends Parser<T> {
	protected rules: ParserFunction[] = [];

	public constructor(handle: ParserFunction) {
		super();
		this.rules.push(handle);
	}
}

export default CustomParser;
