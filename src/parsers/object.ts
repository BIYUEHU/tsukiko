import type { ObjectParserInfer, ObjectParserConfig, ParserFunction, IndexObject, ParserInfer } from '../types';
import Parser from '../parser';
import { StringParser, UndefinedParser } from '.';

export class ObjectParser<S extends ObjectParserConfig> extends Parser<ObjectParserInfer<S>> {
	protected rules: ParserFunction[] = [
		input => {
			if (input === null) return false;
			if (typeof input !== 'object') return false;
			if (Array.isArray(input)) return false;
			if (this.isStrict && Object.keys(input).length > Object.keys(this.valuesParser).length) return false;
			try {
				if (this.isStrict || !this.indexValueParser) {
					Object.entries(this.valuesParser).forEach(array => {
						if (!array[1].check(input[array[0] as keyof typeof input])) throw new Error();
					});
					return true;
				}
				Object.keys(input)
					.filter(key => !Object.keys(this.valuesParser).includes(key))
					.forEach(key => {
						if (!this.indexKeyParser.check(key)) throw new Error();
						if (!this.indexValueParser?.check(input[key as keyof typeof input])) throw new Error();
					});
			} catch {
				return false;
			}
			return true;
		},
	];

	protected isStrict = false;

	protected defaultHandle(input: ObjectParserInfer<S>) {
		let result = input;

		Object.keys(this.valuesParser).forEach(key => {
			if (key in result && !new UndefinedParser().check(result[key])) return;
			result = Object.assign(result, { [key]: this.valuesParser[key].parse(undefined) });
		});

		if (this.isStrict) {
			Object.keys(result)
				.filter(key => !Object.keys(this.valuesParser).includes(key))
				.forEach(key => {
					delete result[key];
				});
		}
		return result;
	}

	private valuesParser: S;

	public constructor(types: S) {
		super();
		this.valuesParser = types;
	}

	public strict() {
		this.isStrict = true;
		return this;
	}

	private indexValueParser?: Parser<unknown>;

	private indexKeyParser: StringParser = new StringParser();

	public index<T extends Parser<unknown>>(
		value: T,
		key: StringParser = new StringParser(),
	): Parser<IndexObject<ParserInfer<T>>> {
		this.isStrict = false;
		this.indexValueParser = value;
		this.indexKeyParser = key;
		return this as unknown as Parser<IndexObject<ParserInfer<T>>>;
	}
}

export default ObjectParser;
