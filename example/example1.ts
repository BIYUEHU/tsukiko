import Tsu, { tsuFactory } from '../src'

const schema = Tsu.Tuple([Tsu.Number()])
export type Schema = Tsu.infer<typeof schema>

const schema2 = Tsu.Array(Tsu.String())
export type Schema2 = Tsu.infer<typeof schema2>

const schema3 = Tsu.Object({
  value: Tsu.Number(),
  name: schema2,
  host: Tsu.String().regexp(/http(s)?:\/\/(.*)/),
  port: Tsu.Number().range(1, 65565).int(),
  allowList: Tsu.Array(Tsu.String()),
  listType: Tsu.Union(Tsu.Literal('include'), Tsu.Literal('exclude'))
})

export type Schema3 = Tsu.infer<typeof schema3>

const schema4 = Tsu.Intersection(Tsu.Number(), Tsu.Literal(1))
export type Schema4 = Tsu.infer<typeof schema4>

const schema5 = Tsu.Intersection(Tsu.Literal('hello world'), schema, Tsu.Number().optional(), schema2)
export type Schema5 = Tsu.infer<typeof schema5>

const schema6 = Tsu.Object({}).index(
  Tsu.String().regexp(/[0-9]+\.[0-9]+\.[0-9]+/),
  Tsu.String().regexp(/kotori-plugin-(.*)/)
)

export type Schema6 = Tsu.infer<typeof schema6>
export const example6: Schema6 = {
  'kotori-plugin-adapter-qq': '1.5.0',
  'kotori-plugin-adapter-wechat': '0.2.0',
  'kotori-plugin-database-sqlite': '2.1.0',
  'kotori-plugin-database-mysql': '3.1.0',
  'kotori-plugin-help': '1.2.0',
  'kotori-plugin-wiki': '1.0.0'
}

// Create your own tsuFactory with your own locale
const newTsu = tsuFactory('zh_CN')

export const localeTypeSchema = newTsu.Union(
  newTsu.Literal('en_US'),
  newTsu.Literal('ja_JP'),
  newTsu.Literal('zh_CN'),
  newTsu.Literal('zh_TW')
)

const globalConfigBaseSchema = newTsu.Object({
  lang: localeTypeSchema.default('ja_JP'),
  'command-prefix': newTsu.String().default('/')
})

const adapterConfigBaseSchema = newTsu.Intersection(
  newTsu.Object({
    extends: newTsu.String(),
    master: newTsu.Union(newTsu.Number(), newTsu.String())
  }),
  globalConfigBaseSchema
)

export const globalConfigSchema = newTsu.Object({
  global: globalConfigBaseSchema,
  adapter: newTsu.Object({}).index(adapterConfigBaseSchema).default({}),
  plugin: newTsu.Object({}).index(newTsu.Unknown()).default({})
})

export type GlobalConfig = Tsu.infer<typeof globalConfigSchema>

console.log(
  globalConfigSchema.parse({
    global: { lang: 'zh_CN' },
    adapter: { aa: { extends: 'bb', master: '1', lang: 'ja_JP' } }
  })
)
