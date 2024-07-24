import { ObjectParser } from '..'
import Parser from '../../parser'
import type { IonParserConfig, ParserFunction, ParserInfer } from '../../types'
import { getSchemaMeta } from '../../utils/schema'

export class UnionParser<T extends IonParserConfig> extends Parser<ParserInfer<T[number]>> {
  private values: T

  protected rules: ParserFunction[] = []

  public constructor(...values: T) {
    super()
    this.setMeta({ type: { mode: 'oneOf', items: values.map(getSchemaMeta) } })
    this.values = values
    this.rules.push((input) => {
      if (values.filter((parser) => parser.check(input)).length >= 1) return null
      throw this.error('union_error')
    })
  }

  protected defaultHandle(input: ParserInfer<T[0]> | ParserInfer<T[1]>) {
    if (!(this.values[0] instanceof ObjectParser && this.values[1] instanceof ObjectParser)) return input
    const result = this.values[0].parseSafe(input)
    if (result.value) return result.data as ParserInfer<T[0]>
    return this.values[1].parse(input) as ParserInfer<T[1]>
  }
}

export default UnionParser
