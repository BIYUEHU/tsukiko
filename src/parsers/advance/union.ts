import { ObjectParser } from '..';
import Parser from '../../parser';
import type { IonParserConfig, ParserFunction, ParserInfer } from '../../types';

export class UnionParser<T extends IonParserConfig> extends Parser<ParserInfer<T[number]>> {
  private values: T;

  protected rules: ParserFunction[] = [];

  public constructor(...values: T) {
    super();
    this.values = values;
    this.rules.push((input) => {
      const result1 = this.values[0].parseSafe(input);
      const result2 = this.values[1].parseSafe(input);
      if (result1.value || result2.value) return null;
      throw this.error('union_error', { value1: result1.error.message, value2: result2.error.message });
    });
  }

  protected defaultHandle(input: ParserInfer<T[0]> | ParserInfer<T[1]>) {
    if (!(this.values[0] instanceof ObjectParser && this.values[1] instanceof ObjectParser)) return input;
    const result = this.values[0].parseSafe(input);
    if (result.value) return result.data as ParserInfer<T[0]>;
    return this.values[1].parse(input) as ParserInfer<T[1]>;
  }
}

export default UnionParser;
