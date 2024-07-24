import Tsu from '../src'

test('number parser', () => {
  expect(Tsu.Number().check(0)).toBe(true)
  expect(Tsu.Number().check(1)).toBe(true)
  expect(Tsu.Number().check(Number.NaN)).toBe(false)
  expect(Tsu.Number().check('hello')).toBe(false)
  expect(Tsu.Number().check(undefined)).toBe(false)
  expect(Tsu.Number().default(1).parseSafe(undefined)).toStrictEqual({ value: true, data: 1 })
  expect(Tsu.Number().default(1).parse(undefined)).toBe(1)
  expect(Tsu.Number().max(2).check(1)).toBe(true)
  expect(Tsu.Number().max(1).check(1)).toBe(true)
  expect(Tsu.Number().max(1, true).check(1)).toBe(false)
  expect(Tsu.Number().min(2).check(1)).toBe(false)
  expect(Tsu.Number().min(1).check(1)).toBe(true)
  expect(Tsu.Number().min(1, true).check(1)).toBe(false)
  expect(Tsu.Number().max(2).min(1).check(1)).toBe(true)
  expect(Tsu.Number().range(1, 2).check(1)).toBe(true)
  expect(Tsu.Number().range(1, 2, true, false).check(2)).toBe(true)
  expect(Tsu.Number().int().check(2)).toBe(true)
  expect(Tsu.Number().int().check(2.33)).toBe(false)
  expect(Tsu.Number().multiple(5).check(23)).toBe(false)
  expect(Tsu.Number().multiple(5).check(25)).toBe(true)
})
