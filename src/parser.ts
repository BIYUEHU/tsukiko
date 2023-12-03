import type { ParserFunction, ParserImpl, ParserSafeReturn } from './types';

export abstract class Parser<T> implements ParserImpl<T> {
	private defaultHandleBefore(input: T) {
		return input === undefined ? (this.defaultValue as T) : this.defaultHandle(input);
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
		if (this.isOptional && (input === undefined || input === null)) return true;
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
		this.optional();
		return this;
	}
}

export default Parser;
