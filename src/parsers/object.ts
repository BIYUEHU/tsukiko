import type {
  ObjectParserInfer,
  ObjectParserConfig,
  ParserFunction,
  ParserInfer,
  Constructor,
  SchemaMetadata
} from '../types'
import Parser from '../parser'
import { StringParser } from './string'
import TsuError from '../utils/error'
import { getSchemaMeta } from '../utils/schema'

/**
 * Represents a parser for object values with configurable validation options.
 * @template S - The object parser configuration type.
 */
export class ObjectParser<S extends ObjectParserConfig> extends Parser<ObjectParserInfer<S>> {
  private maxProperties = Number.POSITIVE_INFINITY

  private minProperties = 0

  protected rules: ParserFunction[] = [
    (input) => {
      if (input === null) return this.error('object_is_null')
      if (typeof input !== 'object') return this.error('not_an_object')
      if (Array.isArray(input)) return this.error('object_is_an_array')
      if (this.constructors.filter((Constructor) => input instanceof Constructor).length !== this.constructors.length)
        return this.error('object_not_instance_of_constructor')

      const expectedLength = Object.keys(this.valuesParser).length
      const realityLength = Object.keys(input).length
      if (this.isStrict && realityLength > expectedLength)
        return this.error('object_keys_too_many', { value: expectedLength, input: realityLength })

      if (realityLength > this.maxProperties)
        return this.error('object_keys_too_many', { value: this.maxProperties, input: realityLength })
      if (realityLength < this.minProperties)
        return this.error('object_keys_too_few', { value: this.minProperties, input: realityLength })

      let key = ''
      try {
        if (this.isStrict || !this.indexValueParser) {
          for (const array of Object.entries(this.valuesParser)) {
            const { 0: index } = array
            key = index
            array[1].parse(input[index as keyof typeof input])
          }
          return null
        }

        /* index mode */
        for (const el of Object.keys(input)) {
          if (Object.keys(this.valuesParser).includes(el)) continue
          if (!this.indexKeyParser.check(el)) throw this.error('object_key_error')
          key = el
          this.indexValueParser?.parse(input[el as keyof typeof input])
        }
      } catch (error) {
        if (!(error instanceof TsuError)) throw error
        return this.error('object_error', { key, value: error.message })
      }

      return null
    }
  ]

  protected isStrict = false

  protected defaultHandle(input: ObjectParserInfer<S>) {
    const result = input as { [propName: string]: unknown }

    for (const key of Object.keys(this.valuesParser)) {
      if (
        this.valuesParser[key] instanceof ObjectParser &&
        typeof result[key] === 'object' &&
        !Array.isArray(result[key])
      ) {
        result[key] = this.valuesParser[key].parse(result[key])
        continue
      }
      if (key in input && result[key] !== undefined && result[key] !== null) continue
      result[key] = this.valuesParser[key].parse(undefined)
    }

    if (this.isStrict) {
      for (const key of Object.keys(result)) {
        if (!Object.keys(this.valuesParser).includes(key)) delete result[key]
      }
    }
    return result as ObjectParserInfer<S>
  }

  private valuesParser: S

  private constructors: Constructor[] = []

  /**
   * Creates a new instance of ObjectParser.
   * @param types - The configuration for the object parser.
   */
  public constructor(types: S) {
    super()
    const items: Record<string, SchemaMetadata> = {}
    for (const [key, value] of Object.entries(types)) items[key] = getSchemaMeta(value)
    this.setMeta({ type: 'object', items })
    this.valuesParser = types
  }

  /**
   * Sets whether the parser should be strict in its object property checking.
   * @param isStrict - Whether to enable strict mode. Defaults to true.
   * @returns The current ObjectParser instance.
   */
  public strict(isStrict = true) {
    this.setMeta({ additionalProperties: !isStrict })
    this.isStrict = isStrict
    return this
  }

  private indexValueParser?: Parser<unknown>

  private indexKeyParser: StringParser = new StringParser()

  /**
   * Configures the parser to handle additional properties with a specified value parser and key parser.
   * @param value - The parser for additional property values.
   * @param key - The parser for additional property keys. Defaults to a new StringParser instance.
   * @returns A new Parser instance for the indexed object.
   */
  public index<T extends Parser<unknown>>(
    value: T,
    key: StringParser = new StringParser()
  ): Parser<Record<string, ParserInfer<T>>> {
    this.setMeta({ items: { ...(getSchemaMeta(this).items ?? {}), '*': getSchemaMeta(value) } })
    this.indexValueParser = value
    this.indexKeyParser = key
    return this as unknown as Parser<Record<string, ParserInfer<T>>>
  }

  /**
   * Adds a constructor to the list of allowed instance types.
   * @param Constructor - The constructor function to add.
   * @returns The current ObjectParser instance.
   */
  public instance(Constructor: Constructor) {
    this.constructors.push(Constructor)
    return this
  }

  /**
   * Sets the maximum number of properties allowed in the object.
   * @param value - The maximum number of properties.
   * @returns The current ObjectParser instance.
   */
  public max(value: number) {
    this.setMeta({ maxProperties: value })
    this.maxProperties = value
    return this
  }

  /**
   * Sets the minimum number of properties required in the object.
   * @param value - The minimum number of properties.
   * @returns The current ObjectParser instance.
   */
  public min(value: number) {
    this.setMeta({ minProperties: value })
    this.minProperties = value
    return this
  }

  /**
   * Sets both the minimum and maximum number of properties allowed in the object.
   * @param min - The minimum number of properties.
   * @param max - The maximum number of properties.
   * @returns The current ObjectParser instance.
   */
  public range(min: number, max: number) {
    return this.min(min).max(max)
  }
}

export default ObjectParser
