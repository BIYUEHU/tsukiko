import type { ParserFunction } from '../types'
import Parser from '../parser'

export class UndefinedParser extends Parser<undefined> {
  protected rules: ParserFunction[] = [(input) => (input === undefined ? null : this.error('not_undefined'))]
}

export default UndefinedParser
