import Tsu from '../src';

test('object parser', () => {
	expect(Tsu.Object({}).check([])).toBe(false);
	expect(Tsu.Object({}).check({})).toBe(true);
	expect(Tsu.Object({}).check(1)).toBe(false);
	expect(Tsu.Object({}).check('2')).toBe(false);
	expect(Tsu.Object({}).check({ k: 1 })).toBe(true);
	expect(Tsu.Object({}).strict().check({ k: 1 })).toBe(false);
	expect(
		Tsu.Object({ k: Tsu.Number(), v: Tsu.String().default('hi') })
			.strict()
			.parse({ k: 1, g: 'h' }),
	).toStrictEqual({
		k: 1,
		v: 'hi',
	});
	expect(Tsu.Object({ k: Tsu.Number(), v: Tsu.String().default('hi') }).parse({ k: 1, g: 'test' })).toStrictEqual({
		k: 1,
		v: 'hi',
		g: 'test',
	});
	expect(Tsu.Object({ k: Tsu.Number(), v: Tsu.String() }).check({ k: 1 })).toBe(false);
	expect(
		Tsu.Object({ k: Tsu.Number(), v: Tsu.String().default('hi') })
			.default({ k: 233, v: 'hello' })
			.parse(undefined),
	).toStrictEqual({ k: 233, v: 'hello' });
	expect(Tsu.Object({ k: Tsu.Number(), v: Tsu.String().default('hi') }).check({ v: 'hey' })).toBe(false);
	expect(
		Tsu.Object({})
			.index(Tsu.String().regexp(/[0-9]+\.[0-9]+\.[0-9]+/), Tsu.String().regexp(/kotori-plugin-(.*)/))
			.check({
				'kotori-plugin-adapter-qq': '1.5.0',
				'kotori-plugin-wiki': '1.0.0',
			}),
	).toBe(true);
	expect(
		Tsu.Object({})
			.index(Tsu.String().regexp(/[0-9]+\.[0-9]+\.[0-9]+/), Tsu.String().regexp(/kotori-plugin-(.*)/))
			.check({
				'kotori-plugin-adapter-qq': '1.5.0',
				'kotori-plin-wiki': '1.0.0',
			}),
	).toBe(false);
	expect(
		Tsu.Object({})
			.index(Tsu.String().regexp(/[0-9]+\.[0-9]+\.[0-9]+/), Tsu.String().regexp(/kotori-plugin-(.*)/))
			.check({
				'kotori-plugin-adapter-qq': '1.5.0',
				'kotori-plugin-wiki': 'hi',
			}),
	).toBe(false);
});
