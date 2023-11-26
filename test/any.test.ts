import Tsu from '../src';

test('any parser', () => {
	expect(Tsu.Unknown().check(0)).toBe(true);
	expect(Tsu.Unknown().check(1)).toBe(true);
	expect(Tsu.Unknown().check(NaN)).toBe(true);
	expect(Tsu.Unknown().check('hello')).toBe(true);
	expect(Tsu.Unknown().check(undefined)).toBe(true);
	expect(Tsu.Unknown().check({})).toBe(true);
});
