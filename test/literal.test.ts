import Tsu from '../src';

test('literal parser', () => {
  expect(Tsu.Literal(1).check(1)).toBe(true);
  expect(Tsu.Literal(1).check(2)).toBe(false);
  expect(Tsu.Literal('1').check('1')).toBe(true);
  expect(Tsu.Literal(1).check('1')).toBe(false);
  expect(Tsu.Union(Tsu.Literal('1'), Tsu.Literal(1)).check('1')).toBe(true);
  expect(Tsu.Union(Tsu.Literal('1'), Tsu.Literal(1)).check(1)).toBe(true);
  expect(Tsu.Union(Tsu.Literal('1'), Tsu.Literal(1)).check(2)).toBe(false);
  expect(Tsu.Union(Tsu.Literal('1'), Tsu.Literal(1)).optional().check(undefined)).toBe(true);
  expect(Tsu.Union(Tsu.Literal('1'), Tsu.Literal(1)).check(undefined)).toBe(false);
});
