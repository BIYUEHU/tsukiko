import type { ParserFunction } from '../..'
import Parser from '../../parser'

/**
 * Parser for custom parsing logic.
 * @template T - The type of the parsed value.
 */
export class CustomParser<T> extends Parser<T> {
  protected rules: ParserFunction[] = []

  /**
   * Creates a new instance of CustomParser.
   * @param handle - The custom parsing function.
   */
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
