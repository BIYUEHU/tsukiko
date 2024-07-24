[**tsukiko**](../README.md) • **Docs**

***

[tsukiko](../README.md) / ParserImpl

# Interface: ParserImpl\<T\>

## Type Parameters

• **T**

## Properties

### check

> **check**: [`ParserFunction`](../type-aliases/ParserFunction.md)\<`boolean`\>

#### Defined in

[src/types.ts:17](https://github.com/BIYUEHU/tsukiko/blob/eb4b04a16e9c40909bed9d6503bd49914851f300/src/types.ts#L17)

***

### default()

> **default**: (`value`) => [`Parser`](../classes/Parser.md)\<`undefined` \| `T`\>

#### Parameters

• **value**: `T`

#### Returns

[`Parser`](../classes/Parser.md)\<`undefined` \| `T`\>

#### Defined in

[src/types.ts:19](https://github.com/BIYUEHU/tsukiko/blob/eb4b04a16e9c40909bed9d6503bd49914851f300/src/types.ts#L19)

***

### optional()

> **optional**: () => [`Parser`](../classes/Parser.md)\<`undefined` \| `T`\>

#### Returns

[`Parser`](../classes/Parser.md)\<`undefined` \| `T`\>

#### Defined in

[src/types.ts:18](https://github.com/BIYUEHU/tsukiko/blob/eb4b04a16e9c40909bed9d6503bd49914851f300/src/types.ts#L18)

***

### parse

> **parse**: [`ParserFunction`](../type-aliases/ParserFunction.md)\<`T`\>

#### Defined in

[src/types.ts:15](https://github.com/BIYUEHU/tsukiko/blob/eb4b04a16e9c40909bed9d6503bd49914851f300/src/types.ts#L15)

***

### parseSafe

> **parseSafe**: [`ParserFunction`](../type-aliases/ParserFunction.md)\<[`ParserSafeReturn`](../type-aliases/ParserSafeReturn.md)\<`T`\>\>

#### Defined in

[src/types.ts:16](https://github.com/BIYUEHU/tsukiko/blob/eb4b04a16e9c40909bed9d6503bd49914851f300/src/types.ts#L16)
