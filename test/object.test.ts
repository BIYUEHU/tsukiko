import Tsu from '../src';

test('object parser', () => {
	expect(Tsu.Object().check([])).toBe(false);
	expect(Tsu.Object({}).check({})).toBe(true);
	expect(Tsu.Object({}).check(1)).toBe(false);
	expect(Tsu.Object({}).check('2')).toBe(false);
	expect(Tsu.Object({}).check({ k: 1 })).toBe(true);
	expect(Tsu.Object({}).strict().check({ k: 1 })).toBe(false);
	expect(Tsu.Object({ k: Tsu.Number(), v: Tsu.String().default('hi') }).parse({ k: 1 })).toStrictEqual({
		k: 1,
		v: 'hi',
	});
	expect(Tsu.Object({ k: Tsu.Number(), v: Tsu.String() }).check({ k: 1 })).toBe(false);
	expect(
		Tsu.Object({ k: Tsu.Number(), v: Tsu.String().default('hi') })
			.default({ k: 233, v: 'hello' })
			.parse(undefined),
	).toBe({ k: 233, v: 'hello' });
	expect(Tsu.Object({ k: Tsu.Number(), v: Tsu.String().default('hi') }).check({ v: 'hey' })).toBe(false);
});
