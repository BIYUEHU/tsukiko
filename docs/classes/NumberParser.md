[**tsukiko**](../README.md) • **Docs**

***

[tsukiko](../README.md) / NumberParser

# Class: NumberParser

Represents a parser for number values with various validation options.

## Extends

- [`Parser`](Parser.md)\<`number`\>

## Constructors

### new NumberParser()

> **new NumberParser**(): [`NumberParser`](NumberParser.md)

Creates a new instance of NumberParser.

#### Returns

[`NumberParser`](NumberParser.md)

#### Overrides

[`Parser`](Parser.md).[`constructor`](Parser.md#constructors)

#### Defined in

[src/parsers/number.ts:73](https://github.com/BIYUEHU/tsukiko/blob/eb4b04a16e9c40909bed9d6503bd49914851f300/src/parsers/number.ts#L73)

## Properties

### defaultValue?

> `protected` `optional` **defaultValue**: `number`

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

[src/parsers/number.ts:44](https://github.com/BIYUEHU/tsukiko/blob/eb4b04a16e9c40909bed9d6503bd49914851f300/src/parsers/number.ts#L44)

## Methods

### check()

> **check**(`input`): `input is number`

Checks if the input is valid according to the parser's rules.

#### Parameters

• **input**: `unknown`

The input to check.

#### Returns

`input is number`

True if the input is valid, false otherwise.

#### Inherited from

[`Parser`](Parser.md).[`check`](Parser.md#check)

#### Defined in

[src/parser.ts:99](https://github.com/BIYUEHU/tsukiko/blob/eb4b04a16e9c40909bed9d6503bd49914851f300/src/parser.ts#L99)

***

### default()

> **default**(`value`): [`Parser`](Parser.md)\<`undefined` \| `number`\>

Sets a default value for the parser.

#### Parameters

• **value**: `number`

The default value.

#### Returns

[`Parser`](Parser.md)\<`undefined` \| `number`\>

The current Parser instance.

#### Inherited from

[`Parser`](Parser.md).[`default`](Parser.md#default)

#### Defined in

[src/parser.ts:118](https://github.com/BIYUEHU/tsukiko/blob/eb4b04a16e9c40909bed9d6503bd49914851f300/src/parser.ts#L118)

***

### defaultHandle()

> `protected` **defaultHandle**(`input`): `number`

#### Parameters

• **input**: `number`

#### Returns

`number`

#### Inherited from

[`Parser`](Parser.md).[`defaultHandle`](Parser.md#defaulthandle)

#### Defined in

[src/parser.ts:34](https://github.com/BIYUEHU/tsukiko/blob/eb4b04a16e9c40909bed9d6503bd49914851f300/src/parser.ts#L34)

***

### describe()

> **describe**(`description`): [`NumberParser`](NumberParser.md)

Sets a description for the parser.

#### Parameters

• **description**: `string`

The description to set.

#### Returns

[`NumberParser`](NumberParser.md)

The current Parser instance.

#### Inherited from

[`Parser`](Parser.md).[`describe`](Parser.md#describe)

#### Defined in

[src/parser.ts:138](https://github.com/BIYUEHU/tsukiko/blob/eb4b04a16e9c40909bed9d6503bd49914851f300/src/parser.ts#L138)

***

### empty()

> **empty**(): [`NumberParser`](NumberParser.md)

Configures the parser to allow undefined but not null.

#### Returns

[`NumberParser`](NumberParser.md)

The current Parser instance.

#### Inherited from

[`Parser`](Parser.md).[`empty`](Parser.md#empty)

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

#### Inherited from

[`Parser`](Parser.md).[`error`](Parser.md#error)

#### Defined in

[src/parser.ts:39](https://github.com/BIYUEHU/tsukiko/blob/eb4b04a16e9c40909bed9d6503bd49914851f300/src/parser.ts#L39)

***

### even()

> **even**(): [`NumberParser`](NumberParser.md)

Configures the parser to only accept even numbers.

#### Returns

[`NumberParser`](NumberParser.md)

The current NumberParser instance.

#### Defined in

[src/parsers/number.ts:139](https://github.com/BIYUEHU/tsukiko/blob/eb4b04a16e9c40909bed9d6503bd49914851f300/src/parsers/number.ts#L139)

***

### int()

> **int**(): [`NumberParser`](NumberParser.md)

Configures the parser to only accept integer values.

#### Returns

[`NumberParser`](NumberParser.md)

The current NumberParser instance.

#### Defined in

[src/parsers/number.ts:120](https://github.com/BIYUEHU/tsukiko/blob/eb4b04a16e9c40909bed9d6503bd49914851f300/src/parsers/number.ts#L120)

***

### lang()

> **lang**(`value`): [`NumberParser`](NumberParser.md)

#### Parameters

• **value**: [`langType`](../type-aliases/langType.md) = `DEFAULT_LANG`

#### Returns

[`NumberParser`](NumberParser.md)

#### Inherited from

[`Parser`](Parser.md).[`lang`](Parser.md#lang)

#### Defined in

[src/utils/lang.ts:8](https://github.com/BIYUEHU/tsukiko/blob/eb4b04a16e9c40909bed9d6503bd49914851f300/src/utils/lang.ts#L8)

***

### max()

> **max**(`value`, `exclusive`): [`NumberParser`](NumberParser.md)

Sets the maximum value (inclusive or exclusive) for the number.

#### Parameters

• **value**: `number`

The maximum value.

• **exclusive**: `boolean` = `false`

Whether the maximum is exclusive. Defaults to false.

#### Returns

[`NumberParser`](NumberParser.md)

The current NumberParser instance.

#### Defined in

[src/parsers/number.ts:84](https://github.com/BIYUEHU/tsukiko/blob/eb4b04a16e9c40909bed9d6503bd49914851f300/src/parsers/number.ts#L84)

***

### min()

> **min**(`value`, `exclusive`): [`NumberParser`](NumberParser.md)

Sets the minimum value (inclusive or exclusive) for the number.

#### Parameters

• **value**: `number`

The minimum value.

• **exclusive**: `boolean` = `false`

Whether the minimum is exclusive. Defaults to false.

#### Returns

[`NumberParser`](NumberParser.md)

The current NumberParser instance.

#### Defined in

[src/parsers/number.ts:97](https://github.com/BIYUEHU/tsukiko/blob/eb4b04a16e9c40909bed9d6503bd49914851f300/src/parsers/number.ts#L97)

***

### multiple()

> **multiple**(`rate`): [`NumberParser`](NumberParser.md)

Configures the parser to only accept multiples of a specified rate.

#### Parameters

• **rate**: `number`

The rate of which the number must be a multiple.

#### Returns

[`NumberParser`](NumberParser.md)

The current NumberParser instance.

#### Defined in

[src/parsers/number.ts:149](https://github.com/BIYUEHU/tsukiko/blob/eb4b04a16e9c40909bed9d6503bd49914851f300/src/parsers/number.ts#L149)

***

### natural()

> **natural**(): [`NumberParser`](NumberParser.md)

Configures the parser to only accept natural numbers (non-negative integers).

#### Returns

[`NumberParser`](NumberParser.md)

The current NumberParser instance.

#### Defined in

[src/parsers/number.ts:159](https://github.com/BIYUEHU/tsukiko/blob/eb4b04a16e9c40909bed9d6503bd49914851f300/src/parsers/number.ts#L159)

***

### negative()

> **negative**(): [`NumberParser`](NumberParser.md)

Configures the parser to only accept negative numbers (less than zero).

#### Returns

[`NumberParser`](NumberParser.md)

The current NumberParser instance.

#### Defined in

[src/parsers/number.ts:176](https://github.com/BIYUEHU/tsukiko/blob/eb4b04a16e9c40909bed9d6503bd49914851f300/src/parsers/number.ts#L176)

***

### odd()

> **odd**(): [`NumberParser`](NumberParser.md)

Configures the parser to only accept odd numbers.

#### Returns

[`NumberParser`](NumberParser.md)

The current NumberParser instance.

#### Defined in

[src/parsers/number.ts:130](https://github.com/BIYUEHU/tsukiko/blob/eb4b04a16e9c40909bed9d6503bd49914851f300/src/parsers/number.ts#L130)

***

### optional()

> **optional**(): [`Parser`](Parser.md)\<`undefined` \| `number`\>

Makes the parser optional.

#### Returns

[`Parser`](Parser.md)\<`undefined` \| `number`\>

The current Parser instance.

#### Inherited from

[`Parser`](Parser.md).[`optional`](Parser.md#optional)

#### Defined in

[src/parser.ts:107](https://github.com/BIYUEHU/tsukiko/blob/eb4b04a16e9c40909bed9d6503bd49914851f300/src/parser.ts#L107)

***

### parse()

> **parse**(`input`): `number`

Parses the input and returns the result.

#### Parameters

• **input**: `unknown`

The input to parse.

#### Returns

`number`

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

> **parseSafe**(`input`): [`ParserSafeReturn`](../type-aliases/ParserSafeReturn.md)\<`number`\>

Safely parses the input and returns a result object.

#### Parameters

• **input**: `unknown`

The input to parse.

#### Returns

[`ParserSafeReturn`](../type-aliases/ParserSafeReturn.md)\<`number`\>

An object containing the parsing result or error.

#### Inherited from

[`Parser`](Parser.md).[`parseSafe`](Parser.md#parsesafe)

#### Defined in

[src/parser.ts:72](https://github.com/BIYUEHU/tsukiko/blob/eb4b04a16e9c40909bed9d6503bd49914851f300/src/parser.ts#L72)

***

### percent()

> **percent**(): [`NumberParser`](NumberParser.md)

Configures the parser to only accept percentages (numbers between 0 and 100 inclusive).

#### Returns

[`NumberParser`](NumberParser.md)

The current NumberParser instance.

#### Defined in

[src/parsers/number.ts:184](https://github.com/BIYUEHU/tsukiko/blob/eb4b04a16e9c40909bed9d6503bd49914851f300/src/parsers/number.ts#L184)

***

### port()

> **port**(): [`NumberParser`](NumberParser.md)

Configures the parser to only accept valid port numbers (integers between 1 and 65535 inclusive).

#### Returns

[`NumberParser`](NumberParser.md)

The current NumberParser instance.

#### Defined in

[src/parsers/number.ts:192](https://github.com/BIYUEHU/tsukiko/blob/eb4b04a16e9c40909bed9d6503bd49914851f300/src/parsers/number.ts#L192)

***

### positive()

> **positive**(): [`NumberParser`](NumberParser.md)

Configures the parser to only accept positive numbers (greater than zero).

#### Returns

[`NumberParser`](NumberParser.md)

The current NumberParser instance.

#### Defined in

[src/parsers/number.ts:168](https://github.com/BIYUEHU/tsukiko/blob/eb4b04a16e9c40909bed9d6503bd49914851f300/src/parsers/number.ts#L168)

***

### range()

> **range**(`min`, `max`, `exclusiveMin`, `exclusiveMax`): [`NumberParser`](NumberParser.md)

Sets both the minimum and maximum values for the number.

#### Parameters

• **min**: `number`

The minimum value.

• **max**: `number`

The maximum value.

• **exclusiveMin**: `boolean` = `false`

Whether the minimum is exclusive. Defaults to false.

• **exclusiveMax**: `boolean` = `false`

Whether the maximum is exclusive. Defaults to false.

#### Returns

[`NumberParser`](NumberParser.md)

The current NumberParser instance.

#### Defined in

[src/parsers/number.ts:112](https://github.com/BIYUEHU/tsukiko/blob/eb4b04a16e9c40909bed9d6503bd49914851f300/src/parsers/number.ts#L112)

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

### title()

> **title**(`title`): [`NumberParser`](NumberParser.md)

Sets a title for the parser.

#### Parameters

• **title**: `string`

The title to set.

#### Returns

[`NumberParser`](NumberParser.md)

The current Parser instance.

#### Inherited from

[`Parser`](Parser.md).[`title`](Parser.md#title)

#### Defined in

[src/parser.ts:148](https://github.com/BIYUEHU/tsukiko/blob/eb4b04a16e9c40909bed9d6503bd49914851f300/src/parser.ts#L148)
