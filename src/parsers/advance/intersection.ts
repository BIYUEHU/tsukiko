import { ObjectParser } from '../..'
import Parser from '../../parser'
import type { IonParserConfig, ParserFunction, ParserInfer } from '../../types'
import { getSchemaMeta } from '../../utils/schema'

type IntersectionFromArray<T extends unknown[]> = T extends [infer F, ...infer R]
  ? ParserInfer<F> & IntersectionFromArray<R>
  : // biome-ignore lint:
    {}

export class IntersectionParser<T extends IonParserConfig> extends Parser<IntersectionFromArray<T>> {
  private values: T

  protected rules: ParserFunction[] = []

  public constructor(...values: T) {
    super()
    this.setMeta({ type: { mode: 'allOf', items: values.map(getSchemaMeta) } })
    this.values = values
    this.rules.push((input) => {
      if (values.filter((parser) => parser.check(input)).length === values.length) return null
      throw this.error('intersection_error')
    })
  }

  protected defaultHandle(input: IntersectionFromArray<T>) {
    if (!(this.values[0] instanceof ObjectParser && this.values[1] instanceof ObjectParser)) return input
    return Object.assign(
      this.values[0].strict(false).parse(input),
      this.values[1].strict(false).parse(input)
    ) as IntersectionFromArray<T>
  }
}

export default IntersectionParser
