import type { ParserFunction } from '../types'
import Parser from '../parser'

/**
 * Generates a JSON schema for the parser.
 * @param bringSchema - Whether to include the $schema property. Defaults to true.
 * @returns The generated JSON schema.
 */
// biome-ignore lint:
export class AnyParser<T = any> extends Parser<T> {
  protected rules: ParserFunction[] = [() => null]
}

export default AnyParser
