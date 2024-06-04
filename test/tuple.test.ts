import Tsu from '../src';

test('tuple parser', () => {
  expect(Tsu.Tuple([Tsu.Any()]).check([1, 'hello', {}, class {}])).toBe(false);
  expect(Tsu.Tuple([Tsu.Any()]).check([1])).toBe(true);
});
