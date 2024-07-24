import Tsu from '../src';

test('array parser', () => {
	expect(Tsu.Array(Tsu.Any()).check([1, 'hello', {}, class {}])).toBe(true);
	expect(Tsu.Array(Tsu.Any()).check(null)).toBe(false);
	expect(Tsu.Array(Tsu.Any()).check([null])).toBe(true);
	expect(Tsu.Array(Tsu.Number()).check([1, 2, 3, 34])).toBe(true);
	expect(Tsu.Array(Tsu.Number()).check([])).toBe(true);
	expect(Tsu.Array(Tsu.Number()).check([1, 3, 34, '5'])).toBe(false);
	expect(Tsu.Array(Tsu.Any()).max(5).check([1, 2, 3, 4, 5, 6])).toBe(false);
	expect(Tsu.Array(Tsu.Any()).min(5).check([1, 2, 3, 4])).toBe(false);
	expect(Tsu.Array(Tsu.Any()).range(5,5).check([1, 2, 3, 4, 5])).toBe(true);
});
