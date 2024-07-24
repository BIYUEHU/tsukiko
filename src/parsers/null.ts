import type { ParserFunction } from '../types'
import Parser from '../parser'

/**
 * Parser for null values.
 */
export class NullParser extends Parser<null> {
  protected rules: ParserFunction[] = [(input) => (input === null ? null : this.error('not_null'))]

  /**
   * Creates a new instance of NullParser.
   */
  public constructor() {
    super()
    this.setMeta({ type: 'null' })
  }
}

export default NullParser
