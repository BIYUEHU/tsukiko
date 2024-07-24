[**tsukiko**](../README.md) • **Docs**

***

[tsukiko](../README.md) / Parser

# Class: `abstract` Parser\<T\>

Abstract base class for parsers.

## Extends

- `Lang`

## Extended by

- [`NumberParser`](NumberParser.md)
- [`StringParser`](StringParser.md)
- [`BooleanParser`](BooleanParser.md)
- [`NullParser`](NullParser.md)
- [`UndefinedParser`](UndefinedParser.md)
- [`AnyParser`](AnyParser.md)
- [`NeverParser`](NeverParser.md)
- [`ArrayParser`](ArrayParser.md)
- [`TupleParser`](TupleParser.md)
- [`ObjectParser`](ObjectParser.md)
- [`LiteralParser`](LiteralParser.md)
- [`IntersectionParser`](IntersectionParser.md)
- [`UnionParser`](UnionParser.md)
- [`CustomParser`](CustomParser.md)
- [`FunctionParser`](FunctionParser.md)
- [`ClassParser`](ClassParser.md)

## Type Parameters

• **T**

## Implements

- [`ParserImpl`](../interfaces/ParserImpl.md)\<`T`\>

## Constructors

### new Parser()

> **new Parser**\<`T`\>(): [`Parser`](Parser.md)\<`T`\>

#### Returns

[`Parser`](Parser.md)\<`T`\>

#### Inherited from

`Lang.constructor`

## Properties

### defaultValue?

> `protected` `optional` **defaultValue**: `T`

#### Defined in

[src/parser.ts:49](https://github.com/BIYUEHU/tsukiko/blob/eb4b04a16e9c40909bed9d6503bd49914851f300/src/parser.ts#L49)

***

### isOptional

> `protected` **isOptional**: `boolean` = `false`

#### Defined in

[src/parser.ts:44](https://github.com/BIYUEHU/tsukiko/blob/eb4b04a16e9c40909bed9d6503bd49914851f300/src/parser.ts#L44)

***

### langType

> `protected` **langType**: [`langType`](../type-aliases/langType.md) = `DEFAULT_LANG`

#### Inherited from

`Lang.langType`

#### Defined in

[src/utils/lang.ts:6](https://github.com/BIYUEHU/tsukiko/blob/eb4b04a16e9c40909bed9d6503bd49914851f300/src/utils/lang.ts#L6)

***

### rules

> `abstract` `protected` **rules**: [`ParserFunction`](../type-aliases/ParserFunction.md)[]

#### Defined in

[src/parser.ts:32](https://github.com/BIYUEHU/tsukiko/blob/eb4b04a16e9c40909bed9d6503bd49914851f300/src/parser.ts#L32)

## Methods

### check()

> **check**(`input`): `input is T`

Checks if the input is valid according to the parser's rules.

#### Parameters

• **input**: `unknown`

The input to check.

#### Returns

`input is T`

True if the input is valid, false otherwise.

#### Implementation of

`ParserImpl.check`

#### Defined in

[src/parser.ts:99](https://github.com/BIYUEHU/tsukiko/blob/eb4b04a16e9c40909bed9d6503bd49914851f300/src/parser.ts#L99)

***

### default()

> **default**(`value`): [`Parser`](Parser.md)\<`undefined` \| `T`\>

Sets a default value for the parser.

#### Parameters

• **value**: `T`

The default value.

#### Returns

[`Parser`](Parser.md)\<`undefined` \| `T`\>

The current Parser instance.

#### Implementation of

[`ParserImpl`](../interfaces/ParserImpl.md).[`default`](../interfaces/ParserImpl.md#default)

#### Defined in

[src/parser.ts:118](https://github.com/BIYUEHU/tsukiko/blob/eb4b04a16e9c40909bed9d6503bd49914851f300/src/parser.ts#L118)

***

### defaultHandle()

> `protected` **defaultHandle**(`input`): `T`

#### Parameters

• **input**: `T`

#### Returns

`T`

#### Defined in

[src/parser.ts:34](https://github.com/BIYUEHU/tsukiko/blob/eb4b04a16e9c40909bed9d6503bd49914851f300/src/parser.ts#L34)

***

### describe()

> **describe**(`description`): [`Parser`](Parser.md)\<`T`\>

Sets a description for the parser.

#### Parameters

• **description**: `string`

The description to set.

#### Returns

[`Parser`](Parser.md)\<`T`\>

The current Parser instance.

#### Defined in

[src/parser.ts:138](https://github.com/BIYUEHU/tsukiko/blob/eb4b04a16e9c40909bed9d6503bd49914851f300/src/parser.ts#L138)

***

### empty()

> **empty**(): [`Parser`](Parser.md)\<`T`\>

Configures the parser to allow undefined but not null.

#### Returns

[`Parser`](Parser.md)\<`T`\>

The current Parser instance.

#### Defined in

[src/parser.ts:128](https://github.com/BIYUEHU/tsukiko/blob/eb4b04a16e9c40909bed9d6503bd49914851f300/src/parser.ts#L128)

***

### error()

> `protected` **error**(`lang`, `data`?): [`TsuError`](TsuError.md)

#### Parameters

• **lang**: `"not_string"` \| `"not_a_email"` \| `"not_a_domain"` \| `"not_a_url"` \| `"illegal_match_string"` \| `"illegal_starts_with"` \| `"illegal_ends_with"` \| `"too_long"` \| `"too_short"` \| `"not_number"` \| `"not_integer_number"` \| `"not_odd_number"` \| `"not_even_number"` \| `"not_natural_number"` \| `"not_positive_number"` \| `"not_negative_number"` \| `"not_percentage"` \| `"too_bigger"` \| `"too_bigger_has"` \| `"too_smaller"` \| `"too_smaller_has"` \| `"not_multiple_number"` \| `"is_a_NaN"` \| `"not_boolean"` \| `"not_true"` \| `"not_false"` \| `"not_null"` \| `"not_undefined"` \| `"not_never"` \| `"not_an_array"` \| `"array_error"` \| `"too_many_items"` \| `"too_few_items"` \| `"not_a_tuple"` \| `"illegal_tuple_length"` \| `"tuple_error"` \| `"not_an_object"` \| `"object_is_null"` \| `"object_is_an_array"` \| `"object_not_instance_of_constructor"` \| `"object_keys_too_many"` \| `"object_keys_too_few"` \| `"object_error"` \| `"object_key_error"` \| `"intersection_error"` \| `"union_error"` \| `"literal_only"` \| `"literal_number_error"` \| `"literal_string_error"` \| `"literal_boolean_error"` \| `"custom_error"` \| `"not_a_function"` \| `"not_a_constructor"` \| `"not_an_async_function"` \| `"not_a_generator_function"` \| `"not_an_async_generator_function"` \| `"not_an_arrow_function"` \| `"function_args_count_mismatch"` \| `"function_name_mismatch"` \| `"not_a_class"` \| `"class_args_count_mismatch"` \| `"class_name_mismatch"` \| `"class_prototype_error"`

• **data?**

#### Returns

[`TsuError`](TsuError.md)

#### Defined in

[src/parser.ts:39](https://github.com/BIYUEHU/tsukiko/blob/eb4b04a16e9c40909bed9d6503bd49914851f300/src/parser.ts#L39)

***

### lang()

> **lang**(`value`): [`Parser`](Parser.md)\<`T`\>

#### Parameters

• **value**: [`langType`](../type-aliases/langType.md) = `DEFAULT_LANG`

#### Returns

[`Parser`](Parser.md)\<`T`\>

#### Inherited from

`Lang.lang`

#### Defined in

[src/utils/lang.ts:8](https://github.com/BIYUEHU/tsukiko/blob/eb4b04a16e9c40909bed9d6503bd49914851f300/src/utils/lang.ts#L8)

***

### optional()

> **optional**(): [`Parser`](Parser.md)\<`undefined` \| `T`\>

Makes the parser optional.

#### Returns

[`Parser`](Parser.md)\<`undefined` \| `T`\>

The current Parser instance.

#### Implementation of

[`ParserImpl`](../interfaces/ParserImpl.md).[`optional`](../interfaces/ParserImpl.md#optional)

#### Defined in

[src/parser.ts:107](https://github.com/BIYUEHU/tsukiko/blob/eb4b04a16e9c40909bed9d6503bd49914851f300/src/parser.ts#L107)

***

### parse()

> **parse**(`input`): `T`

Parses the input and returns the result.

#### Parameters

• **input**: `unknown`

The input to parse.

#### Returns

`T`

The parsed result.

#### Throws

If parsing fails.

#### Implementation of

`ParserImpl.parse`

#### Defined in

[src/parser.ts:61](https://github.com/BIYUEHU/tsukiko/blob/eb4b04a16e9c40909bed9d6503bd49914851f300/src/parser.ts#L61)

***

### parseAsync()

> **parseAsync**(`input`): `Promise`\<`unknown`\>

Asynchronously parses the input.

#### Parameters

• **input**: `unknown`

The input to parse.

#### Returns

`Promise`\<`unknown`\>

A promise that resolves with the parsed result or rejects with an error.

#### Defined in

[src/parser.ts:86](https://github.com/BIYUEHU/tsukiko/blob/eb4b04a16e9c40909bed9d6503bd49914851f300/src/parser.ts#L86)

***

### parseSafe()

> **parseSafe**(`input`): [`ParserSafeReturn`](../type-aliases/ParserSafeReturn.md)\<`T`\>

Safely parses the input and returns a result object.

#### Parameters

• **input**: `unknown`

The input to parse.

#### Returns

[`ParserSafeReturn`](../type-aliases/ParserSafeReturn.md)\<`T`\>

An object containing the parsing result or error.

#### Implementation of

`ParserImpl.parseSafe`

#### Defined in

[src/parser.ts:72](https://github.com/BIYUEHU/tsukiko/blob/eb4b04a16e9c40909bed9d6503bd49914851f300/src/parser.ts#L72)

***

### schema()

> **schema**(`bringSchema`): [`JsonSchema`](../type-aliases/JsonSchema.md)

Generates a JSON schema for the parser.

#### Parameters

• **bringSchema**: `boolean` = `true`

Whether to include the $schema property. Defaults to true.

#### Returns

[`JsonSchema`](../type-aliases/JsonSchema.md)

The generated JSON schema.

#### Defined in

[src/parser.ts:158](https://github.com/BIYUEHU/tsukiko/blob/eb4b04a16e9c40909bed9d6503bd49914851f300/src/parser.ts#L158)

***

### setMeta()

> `protected` **setMeta**(`metadata`): `void`

#### Parameters

• **metadata**: `Partial`\<[`SchemaMetadata`](../interfaces/SchemaMetadata.md)\>

#### Returns

`void`

#### Defined in

[src/parser.ts:51](https://github.com/BIYUEHU/tsukiko/blob/eb4b04a16e9c40909bed9d6503bd49914851f300/src/parser.ts#L51)

***

### title()

> **title**(`title`): [`Parser`](Parser.md)\<`T`\>

Sets a title for the parser.

#### Parameters

• **title**: `string`

The title to set.

#### Returns

[`Parser`](Parser.md)\<`T`\>

The current Parser instance.

#### Defined in

[src/parser.ts:148](https://github.com/BIYUEHU/tsukiko/blob/eb4b04a16e9c40909bed9d6503bd49914851f300/src/parser.ts#L148)
