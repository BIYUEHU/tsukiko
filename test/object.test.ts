import Tsu from '../src'

test('object parser', () => {
  expect(Tsu.Object({}).check([])).toBe(false)
  expect(Tsu.Object({}).check({})).toBe(true)
  expect(Tsu.Object({}).check(1)).toBe(false)
  expect(Tsu.Object({}).check('2')).toBe(false)
  expect(Tsu.Object({}).check({ k: 1 })).toBe(true)
  expect(Tsu.Object({}).strict().check({ k: 1 })).toBe(false)
  expect(
    Tsu.Object({ k: Tsu.Number(), v: Tsu.String().default('hi') })
      .strict()
      .parse({ k: 1, g: 'h' })
  ).toStrictEqual({
    k: 1,
    v: 'hi'
  })
  expect(Tsu.Object({ k: Tsu.Number(), v: Tsu.String().default('hi') }).parse({ k: 1, g: 'test' })).toStrictEqual({
    k: 1,
    v: 'hi',
    g: 'test'
  })
  expect(Tsu.Object({ k: Tsu.Number(), v: Tsu.String() }).check({ k: 1 })).toBe(false)
  expect(
    Tsu.Object({ k: Tsu.Number(), v: Tsu.String().default('hi') })
      .default({ k: 233, v: 'hello' })
      .parse(undefined)
  ).toStrictEqual({ k: 233, v: 'hello' })
  expect(Tsu.Object({ k: Tsu.Number(), v: Tsu.String().default('hi') }).check({ v: 'hey' })).toBe(false)
  expect(
    Tsu.Object({})
      .index(Tsu.String().regexp(/[0-9]+\.[0-9]+\.[0-9]+/), Tsu.String().regexp(/kotori-plugin-(.*)/))
      .check({
        'kotori-plugin-adapter-qq': '1.5.0',
        'kotori-plugin-wiki': '1.0.0'
      })
  ).toBe(true)
  expect(
    Tsu.Object({})
      .index(Tsu.String().regexp(/[0-9]+\.[0-9]+\.[0-9]+/), Tsu.String().regexp(/kotori-plugin-(.*)/))
      .check({
        'kotori-plugin-adapter-qq': '1.5.0',
        'kotori-plin-wiki': '1.0.0'
      })
  ).toBe(false)
  expect(
    Tsu.Object({})
      .index(Tsu.String().regexp(/[0-9]+\.[0-9]+\.[0-9]+/), Tsu.String().regexp(/kotori-plugin-(.*)/))
      .check({
        'kotori-plugin-adapter-qq': '1.5.0',
        'kotori-plugin-wiki': 'hi'
      })
  ).toBe(false)
  expect(
    Tsu.Object({
      mode: Tsu.Enum(Tsu.Literal('mode1'), Tsu.Literal('mode2')),
      port: Tsu.Number().port(),
      address: Tsu.String().describe('server address')
    }).schema()
  ).toEqual({
    $schema: 'http://json-schema.org/draft-07/schema#',
    type: 'object',
    properties: {
      mode: { enum: ['mode1', 'mode2'] },
      port: { type: 'integer', minimum: 1, maximum: 65535 },
      address: { type: 'string', description: 'server address' }
    },
    required: ['mode', 'port', 'address']
  })
  expect(Tsu.Object({}).min(1).check({})).toBe(false)
  expect(Tsu.Object({}).max(1).check({ a: 1, b: 2 })).toBe(false)
  expect(Tsu.Object({}).range(1, 1).check({ a: 1 })).toBe(true)
})
