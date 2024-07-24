import { UnionParser } from './union'
import type Parser from '../../parser'
import { getSchemaMeta } from '../../utils/schema'

export class EnumParser<T extends Parser<string | number>[]> extends UnionParser<T> {
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
