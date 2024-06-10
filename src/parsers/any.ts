import type { ParserFunction } from '../types';
import Parser from '../parser';

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
export class AnyParser<T = any> extends Parser<T> {
  protected rules: ParserFunction[] = [() => null];
}

export default AnyParser;
