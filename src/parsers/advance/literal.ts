import Parser from '../../parser'
import type { ParserFunction } from '../../types'

export class LiteralParser<T extends string | number | boolean> extends Parser<T> {
  protected rules: ParserFunction[] = []

  public constructor(value: T) {
    super()
    this.setMeta({ type: { const: value } })
    this.rules.push((input) => {
      const isString = typeof input === 'string'
      const isNumber = typeof input === 'number'
      const isBoolean = typeof input === 'boolean'
      if (!isString && !isNumber && !isBoolean) return this.error('literal_only')
      if (value === input) return null
      if (isString) return this.error('literal_string_error', { value: String(value) })
      if (isNumber) return this.error('literal_number_error', { value: String(value) })
      return this.error('literal_boolean_error', { value: String(value) })
    })
  }
}

export default LiteralParser
