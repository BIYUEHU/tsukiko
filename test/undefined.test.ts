import Tsu from '../src';

test('undefined parser', () => {
    expect(Tsu.Undefined().check(undefined)).toBe(true);
    expect(Tsu.Undefined().check(null)).toBe(false);
    expect(Tsu.Undefined().check('hello')).toBe(false);
    expect(Tsu.Undefined().check({})).toBe(false);
    expect(Tsu.Undefined().optional().check(undefined)).toBe(true);
});
