import type { ObjectParserInfer, ObjectParserConfig, ParserFunction, IndexObject, ParserInfer } from '../types';
import Parser from '../parser';
import { StringParser } from './string';
import TsuError from '../utils/error';

export class ObjectParser<S extends ObjectParserConfig> extends Parser<ObjectParserInfer<S>> {
	protected rules: ParserFunction[] = [
		input => {
			if (input === null) return this.error('object_is_null');
			if (typeof input !== 'object') return this.error('not_an_object');
			if (Array.isArray(input)) return this.error('object_is_an_array');
			const expectedLength = Object.keys(this.valuesParser).length;
			const realityLength = Object.keys(input).length;
			if (this.isStrict && realityLength > expectedLength)
				return this.error('object_keys_too_many', { value: expectedLength, input: realityLength });
			let key: string = '';
			try {
				if (this.isStrict || !this.indexValueParser) {
					Object.entries(this.valuesParser).forEach(array => {
						const { 0: index } = array;
						key = index;
						array[1].parse(input[array[0] as keyof typeof input]);
					});
					return null;
				}
				/* index mode */
				Object.keys(input)
					.filter(key => !Object.keys(this.valuesParser).includes(key))
					.forEach(el => {
						if (!this.indexKeyParser.check(el)) throw this.error('object_key_error');
						key = el;
						this.indexValueParser?.parse(input[el as keyof typeof input]);
					});
			} catch (error) {
				if (!(error instanceof TsuError)) throw error;
				return this.error('object_error', { key, value: error.message });
			}
			return null;
		},
	];

	protected isStrict = false;

	protected defaultHandle(input: ObjectParserInfer<S>) {
		const result = input as { [propName: string]: unknown };

		Object.keys(this.valuesParser).forEach(key => {
			if (
				this.valuesParser[key] instanceof ObjectParser &&
				typeof result[key] === 'object' &&
				!Array.isArray(result[key])
			) {
				result[key] = this.valuesParser[key].parse(result[key]);
				return;
			}
			if (key in input && result[key] !== undefined && result[key] !== null) return;
			result[key] = this.valuesParser[key].parse(undefined);
		});

		if (this.isStrict) {
			Object.keys(result)
				.filter(key => !Object.keys(this.valuesParser).includes(key))
				.forEach(key => {
					delete result[key];
				});
		}
		return result as ObjectParserInfer<S>;
	}

	private valuesParser: S;

	public constructor(types: S) {
		super();
		this.valuesParser = types;
	}

	public strict(isStrict: boolean = true) {
		this.isStrict = isStrict;
		return this;
	}

	private indexValueParser?: Parser<unknown>;

	private indexKeyParser: StringParser = new StringParser();

	public index<T extends Parser<unknown>>(
		value: T,
		key: StringParser = new StringParser(),
	): Parser<IndexObject<ParserInfer<T>>> {
		this.strict(false);
		this.indexValueParser = value;
		this.indexKeyParser = key;
		return this as unknown as Parser<IndexObject<ParserInfer<T>>>;
	}
}

export default ObjectParser;
