import Tsu, { TsuError, tsuFactory } from '../src';

test('string parser', () => {
  expect(Tsu.String().check('')).toBe(true);
  expect(Tsu.String().check('hello')).toBe(true);
  expect(Tsu.String().check(undefined)).toBe(false);
  expect(Tsu.String().check({})).toBe(false);
  expect(Tsu.String().optional().check(undefined)).toBe(true);
  expect(Tsu.String().optional().empty().check(null)).toBe(false);
  expect(
    Tsu.String()
      .regexp(/https:\/\/(.*)/)
      .check('hello')
  ).toBe(false);
  expect(
    Tsu.String()
      .regexp(/https:\/\/(.*)/)
      .check('https://baidu.com')
  ).toBe(true);
  expect(Tsu.String().default('hi').check(undefined)).toBe(true);
  expect(Tsu.String().default('hi').parseSafe(undefined)).toStrictEqual({ value: true, data: 'hi' });
  expect(Tsu.String().parseSafe(undefined)).toStrictEqual({ value: false, error: new TsuError('en_US', 'not_string') });
  expect(tsuFactory('ja_JP').String().parseSafe(undefined)).toStrictEqual({
    value: false,
    error: new TsuError('ja_JP', 'not_string')
  });
  expect(Tsu.String().default('hi').parse(undefined)).toBe('hi');
  expect(Tsu.String().check(123)).toBe(true);
  expect(Tsu.String().strict().check(123)).toBe(false);
  expect(Tsu.String().parse(123)).toBe('123');
  expect(Tsu.String().optional().parse(null)).toBe(undefined);
});
