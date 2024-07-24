import type { StringParser } from '..'
import Parser from '../../parser'
import type { Constructor, ParserFunction } from '../../types'

export class ClassParser<T extends Constructor> extends Parser<T> {
  private argsCount?: number

  private nameParser?: StringParser

  private constructors: Constructor[] = []

  protected rules: ParserFunction[] = [
    (input) => {
      if (typeof input !== 'function') return this.error('not_a_class')
      if (input.toString().startsWith('function')) return this.error('not_a_class')
      if (this.argsCount && input.length !== this.argsCount)
        return this.error('class_args_count_mismatch', { expected: this.argsCount, actual: input.length })
      if (this.nameParser) {
        const result = this.nameParser.parseSafe(input.name)
        if (!result.value) return this.error('class_name_mismatch', { value: result.error.message })
      }
      if (
        this.constructors.filter((Constructor) => Object.isPrototypeOf.call(Constructor, input.prototype)).length !==
        this.constructors.length
      )
        return this.error('class_prototype_error')
      return null
    }
  ]

  public args(count: number) {
    this.argsCount = count
    return this
  }

  public name(parser: StringParser) {
    this.nameParser = parser
    return this
  }
}

export default ClassParser
