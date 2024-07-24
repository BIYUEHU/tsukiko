import type { ParserFunction } from '../..'
import Parser from '../../parser'

export class CustomParser<T> extends Parser<T> {
  protected rules: ParserFunction[] = []

  public constructor(handle: ParserFunction<boolean>) {
    super()
    this.rules.push((input) => {
      const result = handle(input)
      if (result) return null
      return this.error('custom_error', { value: handle.toString() })
    })
  }
}

export default CustomParser
