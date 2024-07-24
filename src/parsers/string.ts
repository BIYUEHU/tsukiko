import type { Langs, ParserFunction } from '../types'
import Parser from '../parser'

const MATCH_EMAIL = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
const MATCH_DOMAIN = /[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\/.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\/.?/
const MATCH_URL = /^http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/

export class StringParser extends Parser<string> {
  private isStrict = false

  private starts = ''

  private ends = ''

  private pattern?: RegExp

  private maxLength = Number.POSITIVE_INFINITY

  private minLength = 0

  protected defaultHandle(input: string) {
    super.defaultHandle(input)
    this.defaultHandle.toString()
    return String(input)
  }

  protected rules: ParserFunction[] = [
    (input) => {
      if (typeof input === 'string') {
        if (input.length > this.maxLength) return this.error('too_long', { input, value: this.maxLength })
        if (input.length < this.minLength) return this.error('too_short', { input, value: this.minLength })
        if (this.starts && !input.startsWith(this.starts))
          return this.error('illegal_starts_with', { input, content: this.starts })
        if (this.ends && !input.endsWith(this.ends))
          return this.error('illegal_ends_with', { input, content: this.ends })
        if (!this.pattern) return null
        let lang: Langs = 'illegal_match_string'
        if (this.pattern === MATCH_EMAIL) lang = 'not_a_email'
        else if (this.pattern === MATCH_DOMAIN) lang = 'not_a_domain'
        else if (this.pattern === MATCH_URL) lang = 'not_a_url'
        if (this.pattern.exec(input as string)) return null
        return this.error(lang, { input, value: `${this.pattern}`.substring(1, `${this.pattern}`.length - 1) })
      }
      return !this.isStrict && typeof input === 'number' ? null : this.error('not_string')
    }
  ]

  public constructor() {
    super()
    this.setMeta({ type: 'string' })
  }

  public regexp(pattern: RegExp) {
    this.setMeta({ pattern })
    this.pattern = pattern
    return this
  }

  public email() {
    this.regexp(MATCH_EMAIL)
    return this
  }

  public domain() {
    this.regexp(MATCH_DOMAIN)
    return this
  }

  public url() {
    this.regexp(MATCH_URL)
    return this
  }

  public startsWith(starts: string) {
    this.starts = starts
    return this
  }

  public endsWith(ends: string) {
    this.ends = ends
    return this
  }

  public max(value: number) {
    this.setMeta({ maxLength: value })
    this.maxLength = value
    return this
  }

  public min(value: number) {
    this.setMeta({ minLength: value })
    this.minLength = value
    return this
  }

  public strict(isStrict = true) {
    this.isStrict = isStrict
    return this
  }
}

export default StringParser
