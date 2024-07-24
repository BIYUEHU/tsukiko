import type { ParserInfer, ParserFunction } from '../types'
import type { NeverParser } from './never'
import { Parser } from '../parser'
import TsuError from '../utils/error'
import { getSchemaMeta } from '../utils/schema'

/**
 * Parser for array values.
 * @template S - The type of the array elements parser.
 */
export class ArrayParser<S extends Parser<unknown> = NeverParser> extends Parser<ParserInfer<S>[]> {
  private maxItems = Number.POSITIVE_INFINITY

  private minItems = 0

  protected rules: ParserFunction[] = [
    (input) => {
      if (!Array.isArray(input)) return this.error('not_an_array')
      if (input.length > this.maxItems)
        return this.error('too_many_items', { input: input.length, value: this.maxItems })
      if (input.length < this.minItems)
        return this.error('too_few_items', { input: input.length, value: this.minItems })
      let count = 0
      try {
        for (const element of input) {
          this.elementParser.parse(element)
          count += 1
        }
      } catch (error) {
        if (!(error instanceof TsuError)) throw error
        return this.error('array_error', { length: count, value: error.message })
      }
      return null
    }
  ]

  private elementParser: S

  /**
   * Creates a new instance of ArrayParser.
   * @param type - The parser for array elements.
   */
  public constructor(type: S) {
    super()
    this.setMeta({ type: 'array', items: getSchemaMeta(type) })
    this.elementParser = type
  }

  /**
   * Sets the maximum number of items allowed in the array.
   * @param value - The maximum number of items.
   * @returns The current ArrayParser instance.
   */
  public max(value: number) {
    this.setMeta({ maxItems: value })
    this.maxItems = value
    return this
  }

  /**
   * Sets the minimum number of items required in the array.
   * @param value - The minimum number of items.
   * @returns The current ArrayParser instance.
   */
  public min(value: number) {
    this.setMeta({ minItems: value })
    this.minItems = value
    return this
  }

  /**
   * Sets both the minimum and maximum number of items allowed in the array.
   * @param min - The minimum number of items.
   * @param max - The maximum number of items.
   * @returns The current ArrayParser instance.
   */
  public range(min: number, max: number) {
    return this.min(min).max(max)
  }
}

export default ArrayParser
