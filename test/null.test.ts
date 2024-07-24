import Tsu from '../src'

test('null parser', () => {
  expect(Tsu.Null().check(null)).toBe(true)
  expect(Tsu.Null().check('hello')).toBe(false)
  expect(Tsu.Null().check(undefined)).toBe(false)
  expect(Tsu.Null().check({})).toBe(false)
  expect(Tsu.Null().optional().check(undefined)).toBe(true)
})
