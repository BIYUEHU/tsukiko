import type { ParserFunction } from '../types'
import Parser from '../parser'

function getAutoLocale(
  minimum: number,
  maximum: number,
  exclusiveMin: boolean,
  exclusiveMax: boolean,
  isInteger: boolean
) {
  if (isInteger) {
    /* Natural Number */
    if (minimum === 0 && maximum === Number.POSITIVE_INFINITY && !exclusiveMin && !exclusiveMax)
      return 'not_natural_number' as const
    return undefined
  }
  /* Positive Number */
  if (minimum === 0 && maximum === Number.POSITIVE_INFINITY && exclusiveMin && !exclusiveMax)
    return 'not_positive_number' as const
  /* Negative Number */
  if (minimum === Number.NEGATIVE_INFINITY && maximum === 0 && !exclusiveMin && exclusiveMax)
    return 'not_negative_number' as const
  /* Percentage */
  if (minimum === 0 && maximum === 100 && !exclusiveMin && !exclusiveMax) return 'not_percentage' as const
  return undefined
}

/**
 * Represents a parser for number values with various validation options.
 */
export class NumberParser extends Parser<number> {
  private minimum = Number.NEGATIVE_INFINITY

  private exclusiveMin = false

  private maximum = Number.POSITIVE_INFINITY

  private exclusiveMax = false

  private isInteger = false

  private rate?: number

  protected rules: ParserFunction[] = [
    (input) => {
      if (typeof input !== 'number') return this.error('not_number')
      if (Number.isNaN(input)) return this.error('is_a_NaN')

      const autoLocale = getAutoLocale(this.minimum, this.maximum, this.exclusiveMin, this.exclusiveMax, this.isInteger)
      if (input > this.maximum || (this.exclusiveMax && input === this.maximum)) {
        return this.error(autoLocale ?? this.exclusiveMax ? 'too_bigger' : 'too_bigger_has', {
          input,
          value: this.maximum
        })
      }
      if (input < this.minimum || (this.exclusiveMin && input === this.minimum)) {
        return this.error(autoLocale ?? this.exclusiveMin ? 'too_smaller' : 'too_smaller_has', {
          input,
          value: this.minimum
        })
      }

      if (this.isInteger && !Number.isInteger(input)) return this.error('not_integer_number', { input })
      if (this.rate !== undefined && input % this.rate !== 0)
        return this.error('not_multiple_number', { input, value: this.rate })
      return null
    }
  ]

  /**
   * Creates a new instance of NumberParser.
   */
  public constructor() {
    super()
    this.setMeta({ type: 'number' })
  }

  /**
   * Sets the maximum value (inclusive or exclusive) for the number.
   * @param value - The maximum value.
   * @param exclusive - Whether the maximum is exclusive. Defaults to false.
   * @returns The current NumberParser instance.
   */
  public max(value: number, exclusive = false) {
    this.setMeta({ maximum: value, exclusiveMax: exclusive })
    this.maximum = value
    this.exclusiveMax = exclusive
    return this
  }

  /**
   * Sets the minimum value (inclusive or exclusive) for the number.
   * @param value - The minimum value.
   * @param exclusive - Whether the minimum is exclusive. Defaults to false.
   * @returns The current NumberParser instance.
   */
  public min(value: number, exclusive = false) {
    this.setMeta({ minimum: value, exclusiveMin: exclusive })
    this.minimum = value
    this.exclusiveMin = exclusive
    return this
  }

  /**
   * Sets both the minimum and maximum values for the number.
   * @param min - The minimum value.
   * @param max - The maximum value.
   * @param exclusiveMin - Whether the minimum is exclusive. Defaults to false.
   * @param exclusiveMax - Whether the maximum is exclusive. Defaults to false.
   * @returns The current NumberParser instance.
   */
  public range(min: number, max: number, exclusiveMin = false, exclusiveMax = false) {
    return this.min(min, exclusiveMin).max(max, exclusiveMax)
  }

  /**
   * Configures the parser to only accept integer values.
   * @returns The current NumberParser instance.
   */
  public int() {
    this.setMeta({ type: 'integer' })
    this.isInteger = true
    return this
  }

  /**
   * Configures the parser to only accept odd numbers.
   * @returns The current NumberParser instance.
   */
  public odd() {
    this.rules.push((input) => ((input as number) % 2 !== 0 ? null : this.error('not_odd_number')))
    return this
  }

  /**
   * Configures the parser to only accept even numbers.
   * @returns The current NumberParser instance.
   */
  public even() {
    this.rules.push((input) => ((input as number) % 2 === 0 ? null : this.error('not_even_number')))
    return this
  }

  /**
   * Configures the parser to only accept multiples of a specified rate.
   * @param rate - The rate of which the number must be a multiple.
   * @returns The current NumberParser instance.
   */
  public multiple(rate: number) {
    this.setMeta({ multipleOf: rate })
    this.rate = rate
    return this
  }

  /**
   * Configures the parser to only accept natural numbers (non-negative integers).
   * @returns The current NumberParser instance.
   */
  public natural() {
    this.int()
    return this.min(0)
  }

  /**
   * Configures the parser to only accept positive numbers (greater than zero).
   * @returns The current NumberParser instance.
   */
  public positive() {
    return this.min(0, true)
  }

  /**
   * Configures the parser to only accept negative numbers (less than zero).
   * @returns The current NumberParser instance.
   */
  public negative() {
    return this.max(0, true)
  }

  /**
   * Configures the parser to only accept percentages (numbers between 0 and 100 inclusive).
   * @returns The current NumberParser instance.
   */
  public percent() {
    return this.range(0, 100)
  }

  /**
   * Configures the parser to only accept valid port numbers (integers between 1 and 65535 inclusive).
   * @returns The current NumberParser instance.
   */
  public port() {
    this.int()
    return this.range(1, 65535)
  }
}

export default NumberParser
