[**tsukiko**](../README.md) • **Docs**

***

[tsukiko](../README.md) / StringParser

# Class: StringParser

Represents a parser for string values with various validation options.

## Extends

- [`Parser`](Parser.md)\<`string`\>

## Constructors

### new StringParser()

> **new StringParser**(): [`StringParser`](StringParser.md)

Creates a new instance of StringParser.

#### Returns

[`StringParser`](StringParser.md)

#### Overrides

[`Parser`](Parser.md).[`constructor`](Parser.md#constructors)

#### Defined in

[src/parsers/string.ts:54](https://github.com/BIYUEHU/tsukiko/blob/eb4b04a16e9c40909bed9d6503bd49914851f300/src/parsers/string.ts#L54)

## Properties

### defaultValue?

> `protected` `optional` **defaultValue**: `string`

#### Inherited from

[`Parser`](Parser.md).[`defaultValue`](Parser.md#defaultvalue)

#### Defined in

[src/parser.ts:49](https://github.com/BIYUEHU/tsukiko/blob/eb4b04a16e9c40909bed9d6503bd49914851f300/src/parser.ts#L49)

***

### isOptional

> `protected` **isOptional**: `boolean` = `false`

#### Inherited from

[`Parser`](Parser.md).[`isOptional`](Parser.md#isoptional)

#### Defined in

[src/parser.ts:44](https://github.com/BIYUEHU/tsukiko/blob/eb4b04a16e9c40909bed9d6503bd49914851f300/src/parser.ts#L44)

***

### langType

> `protected` **langType**: [`langType`](../type-aliases/langType.md) = `DEFAULT_LANG`

#### Inherited from

[`Parser`](Parser.md).[`langType`](Parser.md#langtype)

#### Defined in

[src/utils/lang.ts:6](https://github.com/BIYUEHU/tsukiko/blob/eb4b04a16e9c40909bed9d6503bd49914851f300/src/utils/lang.ts#L6)

***

### rules

> `protected` **rules**: [`ParserFunction`](../type-aliases/ParserFunction.md)[]

#### Overrides

[`Parser`](Parser.md).[`rules`](Parser.md#rules)

#### Defined in

[src/parsers/string.ts:30](https://github.com/BIYUEHU/tsukiko/blob/eb4b04a16e9c40909bed9d6503bd49914851f300/src/parsers/string.ts#L30)

## Methods

### check()

> **check**(`input`): `input is string`

Checks if the input is valid according to the parser's rules.

#### Parameters

• **input**: `unknown`

The input to check.

#### Returns

`input is string`

True if the input is valid, false otherwise.

#### Inherited from

[`Parser`](Parser.md).[`check`](Parser.md#check)

#### Defined in

[src/parser.ts:99](https://github.com/BIYUEHU/tsukiko/blob/eb4b04a16e9c40909bed9d6503bd49914851f300/src/parser.ts#L99)

***

### default()

> **default**(`value`): [`Parser`](Parser.md)\<`undefined` \| `string`\>

Sets a default value for the parser.

#### Parameters

• **value**: `string`

The default value.

#### Returns

[`Parser`](Parser.md)\<`undefined` \| `string`\>

The current Parser instance.

#### Inherited from

[`Parser`](Parser.md).[`default`](Parser.md#default)

#### Defined in

[src/parser.ts:118](https://github.com/BIYUEHU/tsukiko/blob/eb4b04a16e9c40909bed9d6503bd49914851f300/src/parser.ts#L118)

***

### defaultHandle()

> `protected` **defaultHandle**(`input`): `string`

#### Parameters

• **input**: `string`

#### Returns

`string`

#### Overrides

[`Parser`](Parser.md).[`defaultHandle`](Parser.md#defaulthandle)

#### Defined in

[src/parsers/string.ts:24](https://github.com/BIYUEHU/tsukiko/blob/eb4b04a16e9c40909bed9d6503bd49914851f300/src/parsers/string.ts#L24)

***

### describe()

> **describe**(`description`): [`StringParser`](StringParser.md)

Sets a description for the parser.

#### Parameters

• **description**: `string`

The description to set.

#### Returns

[`StringParser`](StringParser.md)

The current Parser instance.

#### Inherited from

[`Parser`](Parser.md).[`describe`](Parser.md#describe)

#### Defined in

[src/parser.ts:138](https://github.com/BIYUEHU/tsukiko/blob/eb4b04a16e9c40909bed9d6503bd49914851f300/src/parser.ts#L138)

***

### domain()

> **domain**(): [`StringParser`](StringParser.md)

Sets the parser to validate domain names.

#### Returns

[`StringParser`](StringParser.md)

The current StringParser instance.

#### Defined in

[src/parsers/string.ts:83](https://github.com/BIYUEHU/tsukiko/blob/eb4b04a16e9c40909bed9d6503bd49914851f300/src/parsers/string.ts#L83)

***

### email()

> **email**(): [`StringParser`](StringParser.md)

Sets the parser to validate email addresses.

#### Returns

[`StringParser`](StringParser.md)

The current StringParser instance.

#### Defined in

[src/parsers/string.ts:74](https://github.com/BIYUEHU/tsukiko/blob/eb4b04a16e9c40909bed9d6503bd49914851f300/src/parsers/string.ts#L74)

***

### empty()

> **empty**(): [`StringParser`](StringParser.md)

Configures the parser to allow undefined but not null.

#### Returns

[`StringParser`](StringParser.md)

The current Parser instance.

#### Inherited from

[`Parser`](Parser.md).[`empty`](Parser.md#empty)

#### Defined in

[src/parser.ts:128](https://github.com/BIYUEHU/tsukiko/blob/eb4b04a16e9c40909bed9d6503bd49914851f300/src/parser.ts#L128)

***

### endsWith()

> **endsWith**(`ends`): [`StringParser`](StringParser.md)

Sets a suffix that the string must end with.

#### Parameters

• **ends**: `string`

The suffix string.

#### Returns

[`StringParser`](StringParser.md)

The current StringParser instance.

#### Defined in

[src/parsers/string.ts:112](https://github.com/BIYUEHU/tsukiko/blob/eb4b04a16e9c40909bed9d6503bd49914851f300/src/parsers/string.ts#L112)

***

### error()

> `protected` **error**(`lang`, `data`?): [`TsuError`](TsuError.md)

#### Parameters

• **lang**: `"not_string"` \| `"not_a_email"` \| `"not_a_domain"` \| `"not_a_url"` \| `"illegal_match_string"` \| `"illegal_starts_with"` \| `"illegal_ends_with"` \| `"too_long"` \| `"too_short"` \| `"not_number"` \| `"not_integer_number"` \| `"not_odd_number"` \| `"not_even_number"` \| `"not_natural_number"` \| `"not_positive_number"` \| `"not_negative_number"` \| `"not_percentage"` \| `"too_bigger"` \| `"too_bigger_has"` \| `"too_smaller"` \| `"too_smaller_has"` \| `"not_multiple_number"` \| `"is_a_NaN"` \| `"not_boolean"` \| `"not_true"` \| `"not_false"` \| `"not_null"` \| `"not_undefined"` \| `"not_never"` \| `"not_an_array"` \| `"array_error"` \| `"too_many_items"` \| `"too_few_items"` \| `"not_a_tuple"` \| `"illegal_tuple_length"` \| `"tuple_error"` \| `"not_an_object"` \| `"object_is_null"` \| `"object_is_an_array"` \| `"object_not_instance_of_constructor"` \| `"object_keys_too_many"` \| `"object_keys_too_few"` \| `"object_error"` \| `"object_key_error"` \| `"intersection_error"` \| `"union_error"` \| `"literal_only"` \| `"literal_number_error"` \| `"literal_string_error"` \| `"literal_boolean_error"` \| `"custom_error"` \| `"not_a_function"` \| `"not_a_constructor"` \| `"not_an_async_function"` \| `"not_a_generator_function"` \| `"not_an_async_generator_function"` \| `"not_an_arrow_function"` \| `"function_args_count_mismatch"` \| `"function_name_mismatch"` \| `"not_a_class"` \| `"class_args_count_mismatch"` \| `"class_name_mismatch"` \| `"class_prototype_error"`

• **data?**

#### Returns

[`TsuError`](TsuError.md)

#### Inherited from

[`Parser`](Parser.md).[`error`](Parser.md#error)

#### Defined in

[src/parser.ts:39](https://github.com/BIYUEHU/tsukiko/blob/eb4b04a16e9c40909bed9d6503bd49914851f300/src/parser.ts#L39)

***

### lang()

> **lang**(`value`): [`StringParser`](StringParser.md)

#### Parameters

• **value**: [`langType`](../type-aliases/langType.md) = `DEFAULT_LANG`

#### Returns

[`StringParser`](StringParser.md)

#### Inherited from

[`Parser`](Parser.md).[`lang`](Parser.md#lang)

#### Defined in

[src/utils/lang.ts:8](https://github.com/BIYUEHU/tsukiko/blob/eb4b04a16e9c40909bed9d6503bd49914851f300/src/utils/lang.ts#L8)

***

### max()

> **max**(`value`): [`StringParser`](StringParser.md)

Sets the maximum length for the string.

#### Parameters

• **value**: `number`

The maximum length.

#### Returns

[`StringParser`](StringParser.md)

The current StringParser instance.

#### Defined in

[src/parsers/string.ts:122](https://github.com/BIYUEHU/tsukiko/blob/eb4b04a16e9c40909bed9d6503bd49914851f300/src/parsers/string.ts#L122)

***

### min()

> **min**(`value`): [`StringParser`](StringParser.md)

Sets the minimum length for the string.

#### Parameters

• **value**: `number`

The minimum length.

#### Returns

[`StringParser`](StringParser.md)

The current StringParser instance.

#### Defined in

[src/parsers/string.ts:133](https://github.com/BIYUEHU/tsukiko/blob/eb4b04a16e9c40909bed9d6503bd49914851f300/src/parsers/string.ts#L133)

***

### optional()

> **optional**(): [`Parser`](Parser.md)\<`undefined` \| `string`\>

Makes the parser optional.

#### Returns

[`Parser`](Parser.md)\<`undefined` \| `string`\>

The current Parser instance.

#### Inherited from

[`Parser`](Parser.md).[`optional`](Parser.md#optional)

#### Defined in

[src/parser.ts:107](https://github.com/BIYUEHU/tsukiko/blob/eb4b04a16e9c40909bed9d6503bd49914851f300/src/parser.ts#L107)

***

### parse()

> **parse**(`input`): `string`

Parses the input and returns the result.

#### Parameters

• **input**: `unknown`

The input to parse.

#### Returns

`string`

The parsed result.

#### Throws

If parsing fails.

#### Inherited from

[`Parser`](Parser.md).[`parse`](Parser.md#parse)

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

#### Inherited from

[`Parser`](Parser.md).[`parseAsync`](Parser.md#parseasync)

#### Defined in

[src/parser.ts:86](https://github.com/BIYUEHU/tsukiko/blob/eb4b04a16e9c40909bed9d6503bd49914851f300/src/parser.ts#L86)

***

### parseSafe()

> **parseSafe**(`input`): [`ParserSafeReturn`](../type-aliases/ParserSafeReturn.md)\<`string`\>

Safely parses the input and returns a result object.

#### Parameters

• **input**: `unknown`

The input to parse.

#### Returns

[`ParserSafeReturn`](../type-aliases/ParserSafeReturn.md)\<`string`\>

An object containing the parsing result or error.

#### Inherited from

[`Parser`](Parser.md).[`parseSafe`](Parser.md#parsesafe)

#### Defined in

[src/parser.ts:72](https://github.com/BIYUEHU/tsukiko/blob/eb4b04a16e9c40909bed9d6503bd49914851f300/src/parser.ts#L72)

***

### regexp()

> **regexp**(`pattern`): [`StringParser`](StringParser.md)

Sets a regular expression pattern for string validation.

#### Parameters

• **pattern**: `RegExp`

The regular expression to use for validation.

#### Returns

[`StringParser`](StringParser.md)

The current StringParser instance.

#### Defined in

[src/parsers/string.ts:64](https://github.com/BIYUEHU/tsukiko/blob/eb4b04a16e9c40909bed9d6503bd49914851f300/src/parsers/string.ts#L64)

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

#### Inherited from

[`Parser`](Parser.md).[`schema`](Parser.md#schema)

#### Defined in

[src/parser.ts:158](https://github.com/BIYUEHU/tsukiko/blob/eb4b04a16e9c40909bed9d6503bd49914851f300/src/parser.ts#L158)

***

### setMeta()

> `protected` **setMeta**(`metadata`): `void`

#### Parameters

• **metadata**: `Partial`\<[`SchemaMetadata`](../interfaces/SchemaMetadata.md)\>

#### Returns

`void`

#### Inherited from

[`Parser`](Parser.md).[`setMeta`](Parser.md#setmeta)

#### Defined in

[src/parser.ts:51](https://github.com/BIYUEHU/tsukiko/blob/eb4b04a16e9c40909bed9d6503bd49914851f300/src/parser.ts#L51)

***

### startsWith()

> **startsWith**(`starts`): [`StringParser`](StringParser.md)

Sets a prefix that the string must start with.

#### Parameters

• **starts**: `string`

The prefix string.

#### Returns

[`StringParser`](StringParser.md)

The current StringParser instance.

#### Defined in

[src/parsers/string.ts:102](https://github.com/BIYUEHU/tsukiko/blob/eb4b04a16e9c40909bed9d6503bd49914851f300/src/parsers/string.ts#L102)

***

### strict()

> **strict**(`isStrict`): [`StringParser`](StringParser.md)

Sets whether the parser should be strict in its type checking.

#### Parameters

• **isStrict**: `boolean` = `true`

Whether to enable strict mode. Defaults to true.

#### Returns

[`StringParser`](StringParser.md)

The current StringParser instance.

#### Defined in

[src/parsers/string.ts:144](https://github.com/BIYUEHU/tsukiko/blob/eb4b04a16e9c40909bed9d6503bd49914851f300/src/parsers/string.ts#L144)

***

### title()

> **title**(`title`): [`StringParser`](StringParser.md)

Sets a title for the parser.

#### Parameters

• **title**: `string`

The title to set.

#### Returns

[`StringParser`](StringParser.md)

The current Parser instance.

#### Inherited from

[`Parser`](Parser.md).[`title`](Parser.md#title)

#### Defined in

[src/parser.ts:148](https://github.com/BIYUEHU/tsukiko/blob/eb4b04a16e9c40909bed9d6503bd49914851f300/src/parser.ts#L148)

***

### url()

> **url**(): [`StringParser`](StringParser.md)

Sets the parser to validate URLs.

#### Returns

[`StringParser`](StringParser.md)

The current StringParser instance.

#### Defined in

[src/parsers/string.ts:92](https://github.com/BIYUEHU/tsukiko/blob/eb4b04a16e9c40909bed9d6503bd49914851f300/src/parsers/string.ts#L92)
