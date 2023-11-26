import Tsu from '../src';

test('never parser', () => {
	expect(Tsu.Never().check(0)).toBe(false);
	expect(Tsu.Never().check(1)).toBe(false);
	expect(Tsu.Never().check(NaN)).toBe(false);
	expect(Tsu.Never().check('hello')).toBe(false);
	expect(Tsu.Never().check(undefined)).toBe(false);
	expect(Tsu.Never().check({})).toBe(false);
});
