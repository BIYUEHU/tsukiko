import type { ParserFunction } from '../types'
import Parser from '../parser'

/**
 * Parser for never values.
 */
export class NeverParser extends Parser<never> {
  protected rules: ParserFunction[] = [() => this.error('not_never')]
}

export default NeverParser
