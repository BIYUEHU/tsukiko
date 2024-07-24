import { UnionParser } from './union'
import type Parser from '../../parser'
import { getSchemaMeta } from '../../utils/schema'

/**
 * Parser for enum values.
 * @template T - The array of string or number parsers.
 */
export class EnumParser<T extends Parser<string | number>[]> extends UnionParser<T> {
  /**
   * Creates a new instance of EnumParser.
   * @param args - The parsers for enum values.
   */
  public constructor(...args: T) {
    super(...args)
    /* only support literal (string, number, boolean constants) */
    this.setMeta({
      type: {
        enum: args
          .map((arg) => {
            const { type } = getSchemaMeta(arg)
            if (typeof type === 'object' && 'const' in type) return type.const
            return undefined
          })
          .filter((type) => type !== undefined) as (string | number | boolean)[]
      }
    })
  }
}

export default UnionParser
