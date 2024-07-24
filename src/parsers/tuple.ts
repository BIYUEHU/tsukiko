import type { TupleParserInfer, ParserFunction, TupleParserConfig } from '../types'
import { Parser } from '../parser'
import TsuError from '../utils/error'
import { getSchemaMeta } from '../utils/schema'

/**
 * Represents a parser for tuples with a specific configuration.
 * @template S - The tuple parser configuration type.
 */
export class TupleParser<S extends TupleParserConfig> extends Parser<TupleParserInfer<S>> {
  protected rules: ParserFunction[] = [
    (input) => {
      if (!Array.isArray(input)) return this.error('not_a_tuple')
      if (input.length !== this.elementsParser.length)
        return this.error('illegal_tuple_length', { value: this.elementsParser.length, input: input.length })
      let count = 0
      try {
        for (const element of input) {
          this.elementsParser[count].parse(element)
          count += 1
        }
      } catch (error) {
        if (!(error instanceof TsuError)) throw error
        return this.error('tuple_error', { length: count, value: error.message })
      }
      return null
    }
  ]

  private elementsParser: S

  /**
   * Creates a new instance of TupleParser.
   * @param types - The configuration for the tuple parser.
   */
  public constructor(types: S) {
    super()
    this.setMeta({ type: 'array', items: types.map(getSchemaMeta) })
    this.elementsParser = types
  }
}

export default TupleParser
