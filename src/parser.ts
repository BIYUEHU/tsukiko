import type { Langs, ParserFunction, ParserImpl, ParserSafeReturn } from './types';
import TsuError from './utils/error';
import Lang from './utils/lang';

export abstract class Parser<T> extends Lang implements ParserImpl<T> {
  private testInput(input: unknown): ReturnType<ParserFunction> {
    if (this.isOptional && (input === undefined || (!this.onlyEmpty && input === null))) return null;
    try {
      this.rules.forEach((rule) => {
        const result = rule(input);
        if (!result) return;
        throw result;
      });
    } catch (error) {
      if (!(error instanceof TsuError)) throw error;
      return error;
    }
    return null;
  }

  private defaultHandleBefore(input: T): T {
    const isEmpty = input === undefined || (!this.onlyEmpty && input === null);
    if (isEmpty && !this.defaultValue && !this.isOptional) return undefined as T;
    return this.defaultHandle(isEmpty && this.defaultValue ? (this.defaultValue as T) : input);
  }

  protected abstract rules: ParserFunction[];

  protected defaultHandle(input: T): T {
    this.defaultHandle.toString();
    return input;
  }

  protected error(lang: Langs, data?: { [propName: string]: string | number }) {
    this.error.toString();
    return new TsuError(this.langType, lang, data);
  }

  private isOptional = false;

  private onlyEmpty = false;

  protected defaultValue?: T;

  public parse(input: unknown): T {
    const result = this.testInput(input);
    if (!result) return this.defaultHandleBefore(input as T);
    throw result;
  }

  public parseSafe(input: unknown): ParserSafeReturn<T> {
    try {
      return { value: true, data: this.parse(input) };
    } catch (error) {
      if (!(error instanceof TsuError)) throw error;
      return { value: false, error };
    }
  }

  public check(input: unknown): input is T {
    return !this.testInput(input);
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

  public empty() {
    this.onlyEmpty = true;
    return this;
  }
}

export default Parser;
