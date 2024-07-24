import type { ParserFunction } from '../types'
import Parser from '../parser'

export class BooleanParser extends Parser<boolean> {
  private fixed?: boolean

  protected rules: ParserFunction[] = [
    (input) => {
      if (typeof input !== 'boolean') return this.error('not_boolean')
      if (this.fixed !== undefined && this.fixed !== input) return this.error(this.fixed ? 'not_true' : 'not_false')
      return null
    }
  ]

  public constructor() {
    super()
    this.setMeta({ type: 'boolean' })
  }

  public true() {
    this.setMeta({ type: { const: true } })
    this.fixed = true
    return this
  }

  public false() {
    this.setMeta({ type: { const: false } })
    this.fixed = false
    return this
  }
}

export default BooleanParser
