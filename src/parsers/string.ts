import type { Langs, ParserFunction } from '../types'
import Parser from '../parser'

const MATCH_EMAIL = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
const MATCH_DOMAIN = /[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\/.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\/.?/
const MATCH_URL = /^http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/

/**
 * Represents a parser for string values with various validation options.
 */
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

  /**
   * Creates a new instance of StringParser.
   */
  public constructor() {
    super()
    this.setMeta({ type: 'string' })
  }

  /**
   * Sets a regular expression pattern for string validation.
   * @param pattern - The regular expression to use for validation.
   * @returns The current StringParser instance.
   */
  public regexp(pattern: RegExp) {
    this.setMeta({ pattern })
    this.pattern = pattern
    return this
  }

  /**
   * Sets the parser to validate email addresses.
   * @returns The current StringParser instance.
   */
  public email() {
    this.regexp(MATCH_EMAIL)
    return this
  }

  /**
   * Sets the parser to validate domain names.
   * @returns The current StringParser instance.
   */
  public domain() {
    this.regexp(MATCH_DOMAIN)
    return this
  }

  /**
   * Sets the parser to validate URLs.
   * @returns The current StringParser instance.
   */
  public url() {
    this.regexp(MATCH_URL)
    return this
  }

  /**
   * Sets a prefix that the string must start with.
   * @param starts - The prefix string.
   * @returns The current StringParser instance.
   */
  public startsWith(starts: string) {
    this.starts = starts
    return this
  }

  /**
   * Sets a suffix that the string must end with.
   * @param ends - The suffix string.
   * @returns The current StringParser instance.
   */
  public endsWith(ends: string) {
    this.ends = ends
    return this
  }

  /**
   * Sets the maximum length for the string.
   * @param value - The maximum length.
   * @returns The current StringParser instance.
   */
  public max(value: number) {
    this.setMeta({ maxLength: value })
    this.maxLength = value
    return this
  }

  /**
   * Sets the minimum length for the string.
   * @param value - The minimum length.
   * @returns The current StringParser instance.
   */
  public min(value: number) {
    this.setMeta({ minLength: value })
    this.minLength = value
    return this
  }

  /**
   * Sets whether the parser should be strict in its type checking.
   * @param isStrict - Whether to enable strict mode. Defaults to true.
   * @returns The current StringParser instance.
   */
  public strict(isStrict = true) {
    this.isStrict = isStrict
    return this
  }
}

export default StringParser
