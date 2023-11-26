import Tsu from '../src';

test('array parser', () => {
	expect(Tsu.Array().check([])).toBe(true);
	expect(Tsu.Array(Tsu.Any()).check([1, 'hello', {}, class {}])).toBe(true);
	expect(Tsu.Array(Tsu.Any()).check(null)).toBe(false);
	expect(Tsu.Array(Tsu.Any()).check([null])).toBe(true);
	expect(Tsu.Array(Tsu.Number()).check([1, 2, 3, 34])).toBe(true);
	expect(Tsu.Array(Tsu.Number()).check([])).toBe(true);
	expect(Tsu.Array(Tsu.Number()).check([1, 3, 34, '5'])).toBe(false);
});
