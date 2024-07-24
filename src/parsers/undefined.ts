import type { ParserFunction } from '../types'
import Parser from '../parser'

/**
 * Parser for undefined values.
 */
export class UndefinedParser extends Parser<undefined> {
  protected rules: ParserFunction[] = [(input) => (input === undefined ? null : this.error('not_undefined'))]
}

export default UndefinedParser
