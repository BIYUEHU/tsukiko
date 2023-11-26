import type { ObjectParserInfer, ObjectParserConfig, ParserFunction } from '../types';
import Parser from '../parser';
import { UndefinedParser } from '.';

export class ObjectParser<S extends ObjectParserConfig> extends Parser<ObjectParserInfer<S>> {
	protected rules: ParserFunction[] = [
		input => {
			if (input === null) return false;
			if (typeof input !== 'object') return false;
			if (Array.isArray(input)) return false;
			if (this.isStrict && Object.keys(input).length > Object.keys(this.valuesParser).length) return false;
			try {
				Object.entries(this.valuesParser).forEach(array => {
					if (!array[1].check(input[array[0] as keyof typeof input])) throw new Error();
				});
			} catch {
				return false;
			}
			return true;
		},
	];

	protected isStrict = false;

	protected defaultHandle(input: ObjectParserInfer<S>) {
		if ('v' in this.valuesParser) console.log(input, this.valuesParser);
		const result = input;

		if (this.isStrict) {
			Object.keys(result)
				.filter(key => !Object.keys(this.valuesParser).includes(key))
				.forEach(key => {
					if ('v' in this.valuesParser) console.log(key);

					delete result[key];
				});
		}
		Object.keys(this.valuesParser).forEach(key => {
			if (new UndefinedParser().check(result[key])) {
				(result as { [propName: string]: unknown })[key] = this.valuesParser[key].parse(undefined);
			}
		});
		if ('v' in this.valuesParser) console.log(result);

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
}

export default ObjectParser;
