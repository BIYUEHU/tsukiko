import type { ParserFunction } from '../types'
import Parser from '../parser'

export class NullParser extends Parser<null> {
  protected rules: ParserFunction[] = [(input) => (input === null ? null : this.error('not_null'))]

  public constructor() {
    super()
    this.setMeta({ type: 'null' })
  }
}

export default NullParser
