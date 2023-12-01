# Tsukiko

运行时下的动态类型检测器，基于 **TypeScript** 开发

## Install

> NPM

```bash
npm install tsukiko
```

> YAYN

```bash
yarn add tsukiko
```

> PNPM

```bash
pnpm install tsukiko
```

## Code

```typescript
import Tsu from 'tsukiko';

const schema = Tsu.Tuple([Tsu.Number()]);
export type Schema = Tsu.infer<typeof schema>;

const schema2 = Tsu.Array(Tsu.String());
export type Schema2 = Tsu.infer<typeof schema2>;

const schema3 = Tsu.Object({
	value: Tsu.Number(),
	name: schema2,
	host: Tsu.String().regexp(/http(s)?:\/\/(.*)/),
	port: Tsu.Number().range(1, 65565).int(),
	allowList: Tsu.Array(Tsu.String()),
	listType: Tsu.Union([Tsu.Literal('include'), Tsu.Literal('exclude')]),
});

export type Schema3 = Tsu.infer<typeof schema3>;

const schema4 = Tsu.Intersection([Tsu.Number(), Tsu.Literal(1)]);
export type Schema4 = Tsu.infer<typeof schema4>;

const schema5 = Tsu.Intersection([
	Tsu.Literal('hello world'),
	Tsu.Union([schema, Tsu.Union([Tsu.Number().optional(), schema2])]),
]);
export type Schema5 = Tsu.infer<typeof schema5>;

const schema6 = Tsu.Object({}).index(
	Tsu.String().regexp(/[0-9]+\.[0-9]+\.[0-9]+/),
	Tsu.String().regexp(/kotori-plugin-(.*)/),
);
export type Schema6 = Tsu.infer<typeof schema6>;
export const example6: Schema6 = {
	'kotori-plugin-adapter-qq': '1.5.0',
	'kotori-plugin-adapter-wechat': '0.2.0',
	'kotori-plugin-database-sqlite': '2.1.0',
	'kotori-plugin-database-mysql': '3.1.0',
	'kotori-plugin-help': '1.2.0',
	'kotori-plugin-wiki': '1.0.0',
};
```
