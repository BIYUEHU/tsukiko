import { UndefinedParser } from './parsers';
import type { ParserFunction, ParserImpl, ParserSafeReturn } from './types';

export abstract class Parser<T> implements ParserImpl<T> {
	private defaultHandleBefore(input: T) {
		const condition =
			!new UndefinedParser().check(this.defaultValue) && new UndefinedParser().check(input)
				? this.defaultValue
				: input;
		return this.isOptional && new UndefinedParser().check(this.defaultHandle) ? (undefined as T) : condition;
	}

	protected abstract rules: ParserFunction[];

	protected defaultHandle(input: T) {
		JSON.stringify(this);
		return input;
	}

	private defaultValue?: T;

	private isOptional = false;

	public parse(input: unknown): T {
		if (this.check(input)) {
			return this.defaultHandleBefore(input);
		}
		throw new Error();
	}

	public parseSafe(input: unknown): ParserSafeReturn<T> {
		try {
			return { value: true, data: this.parse(input) };
		} catch (error: unknown) {
			return { value: false, error: error instanceof Error ? error : new Error() };
		}
	}

	public check(input: unknown): input is T {
		if (this.isOptional && new UndefinedParser().check(input)) return true;
		try {
			this.rules.forEach(rule => {
				if (!rule(input)) throw new Error();
			});
		} catch {
			return false;
		}
		return true;
	}

	public optional(): Parser<T | undefined> {
		this.isOptional = true;
		return this;
	}

	public default(value: T) {
		this.defaultValue = value;
		return this.optional();
	}
}

export default Parser;
