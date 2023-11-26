import Tsu from '../src';

test('tuple parser', () => {
	expect(Tsu.Tuple().check([])).toBe(true);
	expect(Tsu.Tuple([Tsu.Any()]).check([1, 'hello', {}, class {}])).toBe(false);
	expect(Tsu.Tuple([Tsu.Any()]).check([1])).toBe(true);
	expect(Tsu.Tuple([Tsu.Number(), Tsu.Number(), Tsu.String()]).check([1, 3, 5])).toBe(false);
	expect(Tsu.Tuple([Tsu.Number(), Tsu.Number(), Tsu.String()]).check([1, 3, '5'])).toBe(true);
});
