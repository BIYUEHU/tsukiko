import Tsu from '../src'

test('boolean parser', () => {
  expect(Tsu.Boolean().check('')).toBe(false)
  expect(Tsu.Boolean().check('hello')).toBe(false)
  expect(Tsu.Boolean().check(undefined)).toBe(false)
  expect(Tsu.Boolean().check(1)).toBe(false)
  expect(Tsu.Boolean().check({})).toBe(false)
  expect(Tsu.Boolean().check(true)).toBe(true)
  expect(Tsu.Boolean().false().check(true)).toBe(false)
})
