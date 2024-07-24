import type { StringParser } from '..'
import Parser from '../../parser'
import type { ParserFunction } from '../../types'

const AsyncFunction = Object.getPrototypeOf(async () => {}).constructor
const GeneratorFunction = Object.getPrototypeOf(function* Generator() {}).constructor
const AsyncGeneratorFunction = Object.getPrototypeOf(async function* AsyncGenerator() {}).constructor

/**
 * Parser for function values.
 * @template T - The function type.
 */
export class FunctionParser<T extends (...args: unknown[]) => unknown> extends Parser<T> {
  private isAsync = false

  private isGenerator = false

  private isArrow = false

  private isConstructor = false

  private argsCount?: number

  private nameParser?: StringParser

  protected rules: ParserFunction[] = [
    (input) => {
      if (typeof input !== 'function') return this.error('not_a_function')
      if (input.toString().startsWith('class')) return this.error('not_a_function')
      if (this.isConstructor && input.name[0] !== input.name[0].toUpperCase()) return this.error('not_a_constructor')
      if (this.isAsync && !this.isGenerator && !(input instanceof AsyncFunction))
        return this.error('not_an_async_function')
      if (!this.isAsync && this.isGenerator && !(input instanceof GeneratorFunction))
        return this.error('not_a_generator_function')
      if (this.isAsync && this.isGenerator && !(input instanceof AsyncGeneratorFunction))
        return this.error('not_an_async_generator_function')
      if (this.isArrow && input.toString().includes('function')) return this.error('not_an_arrow_function')
      if (this.argsCount && input.length !== this.argsCount)
        return this.error('function_args_count_mismatch', { expected: this.argsCount, actual: input.length })
      if (this.nameParser) {
        const result = this.nameParser.parseSafe(input.name)
        if (!result.value) return this.error('function_name_mismatch', { value: result.error.message })
      }
      return null
    }
  ]

  /**
   * Configures the parser to expect async functions.
   * @param isAsync - Whether the function should be async. Defaults to true.
   * @returns The current FunctionParser instance.
   */
  public async(isAsync = true) {
    this.isAsync = isAsync
    return this
  }

  /**
   * Configures the parser to expect arrow functions.
   * @param isArrow - Whether the function should be an arrow function. Defaults to true.
   * @returns The current FunctionParser instance.
   */
  public arrow(isArrow = true) {
    this.isArrow = isArrow
    return this
  }

  /**
   * Configures the parser to expect generator functions.
   * @param isGenerator - Whether the function should be a generator. Defaults to true.
   * @returns The current FunctionParser instance.
   */
  public generator(isGenerator = true) {
    this.isGenerator = isGenerator
    return this
  }

  /**
   * Sets the expected number of arguments for the function.
   * @param count - The number of arguments.
   * @returns The current FunctionParser instance.
   */
  public args(count: number) {
    this.argsCount = count
    return this
  }

  /**
   * Sets a parser for the function name.
   * @param parser - The StringParser to use for the function name.
   * @returns The current FunctionParser instance.
   */
  public name(parser: StringParser) {
    this.nameParser = parser
    return this
  }

  /**
   * Configures the parser to expect constructor functions.
   * @param isConstructor - Whether the function should be a constructor. Defaults to true.
   * @returns The current FunctionParser instance.
   */
  public constructed(isConstructor = true) {
    this.isConstructor = isConstructor
    return this
  }
}

export default FunctionParser
