[**tsukiko**](../README.md) • **Docs**

***

[tsukiko](../README.md) / ArrayParser

# Class: ArrayParser\<S\>

Parser for array values.

## Extends

- [`Parser`](Parser.md)\<[`ParserInfer`](../type-aliases/ParserInfer.md)\<`S`\>[]\>

## Type Parameters

• **S** *extends* [`Parser`](Parser.md)\<`unknown`\> = [`NeverParser`](NeverParser.md)

The type of the array elements parser.

## Constructors

### new ArrayParser()

> **new ArrayParser**\<`S`\>(`type`): [`ArrayParser`](ArrayParser.md)\<`S`\>

Creates a new instance of ArrayParser.

#### Parameters

• **type**: `S`

The parser for array elements.

#### Returns

[`ArrayParser`](ArrayParser.md)\<`S`\>

#### Overrides

[`Parser`](Parser.md).[`constructor`](Parser.md#constructors)

#### Defined in

[src/parsers/array.ts:43](https://github.com/BIYUEHU/tsukiko/blob/aa7a414bb89555b3910dd9d229f505891bded4ee/src/parsers/array.ts#L43)

## Properties

### defaultValue?

> `protected` `optional` **defaultValue**: [`ParserInfer`](../type-aliases/ParserInfer.md)\<`S`\>[]

#### Inherited from

[`Parser`](Parser.md).[`defaultValue`](Parser.md#defaultvalue)

#### Defined in

[src/parser.ts:49](https://github.com/BIYUEHU/tsukiko/blob/aa7a414bb89555b3910dd9d229f505891bded4ee/src/parser.ts#L49)

***

### isOptional

> `protected` **isOptional**: `boolean` = `false`

#### Inherited from

[`Parser`](Parser.md).[`isOptional`](Parser.md#isoptional)

#### Defined in

[src/parser.ts:44](https://github.com/BIYUEHU/tsukiko/blob/aa7a414bb89555b3910dd9d229f505891bded4ee/src/parser.ts#L44)

***

### langType

> `protected` **langType**: [`langType`](../type-aliases/langType.md) = `DEFAULT_LANG`

#### Inherited from

[`Parser`](Parser.md).[`langType`](Parser.md#langtype)

#### Defined in

[src/utils/lang.ts:6](https://github.com/BIYUEHU/tsukiko/blob/aa7a414bb89555b3910dd9d229f505891bded4ee/src/utils/lang.ts#L6)

***

### rules

> `protected` **rules**: [`ParserFunction`](../type-aliases/ParserFunction.md)[]

#### Overrides

[`Parser`](Parser.md).[`rules`](Parser.md#rules)

#### Defined in

[src/parsers/array.ts:16](https://github.com/BIYUEHU/tsukiko/blob/aa7a414bb89555b3910dd9d229f505891bded4ee/src/parsers/array.ts#L16)

## Methods

### check()

> **check**(`input`): `input is ParserInfer<S>[]`

Checks if the input is valid according to the parser's rules.

#### Parameters

• **input**: `unknown`

The input to check.

#### Returns

`input is ParserInfer<S>[]`

True if the input is valid, false otherwise.

#### Inherited from

[`Parser`](Parser.md).[`check`](Parser.md#check)

#### Defined in

[src/parser.ts:99](https://github.com/BIYUEHU/tsukiko/blob/aa7a414bb89555b3910dd9d229f505891bded4ee/src/parser.ts#L99)

***

### default()

> **default**(`value`): [`Parser`](Parser.md)\<[`ParserInfer`](../type-aliases/ParserInfer.md)\<`S`\>[]\>

Sets a default value for the parser.

#### Parameters

• **value**: [`ParserInfer`](../type-aliases/ParserInfer.md)\<`S`\>[]

The default value.

#### Returns

[`Parser`](Parser.md)\<[`ParserInfer`](../type-aliases/ParserInfer.md)\<`S`\>[]\>

The current Parser instance.

#### Inherited from

[`Parser`](Parser.md).[`default`](Parser.md#default)

#### Defined in

[src/parser.ts:118](https://github.com/BIYUEHU/tsukiko/blob/aa7a414bb89555b3910dd9d229f505891bded4ee/src/parser.ts#L118)

***

### defaultHandle()

> `protected` **defaultHandle**(`input`): [`ParserInfer`](../type-aliases/ParserInfer.md)\<`S`\>[]

#### Parameters

• **input**: [`ParserInfer`](../type-aliases/ParserInfer.md)\<`S`\>[]

#### Returns

[`ParserInfer`](../type-aliases/ParserInfer.md)\<`S`\>[]

#### Inherited from

[`Parser`](Parser.md).[`defaultHandle`](Parser.md#defaulthandle)

#### Defined in

[src/parser.ts:34](https://github.com/BIYUEHU/tsukiko/blob/aa7a414bb89555b3910dd9d229f505891bded4ee/src/parser.ts#L34)

***

### describe()

> **describe**(`description`): [`ArrayParser`](ArrayParser.md)\<`S`\>

Sets a description for the parser.

#### Parameters

• **description**: `string`

The description to set.

#### Returns

[`ArrayParser`](ArrayParser.md)\<`S`\>

The current Parser instance.

#### Inherited from

[`Parser`](Parser.md).[`describe`](Parser.md#describe)

#### Defined in

[src/parser.ts:138](https://github.com/BIYUEHU/tsukiko/blob/aa7a414bb89555b3910dd9d229f505891bded4ee/src/parser.ts#L138)

***

### empty()

> **empty**(): [`ArrayParser`](ArrayParser.md)\<`S`\>

Configures the parser to allow undefined but not null.

#### Returns

[`ArrayParser`](ArrayParser.md)\<`S`\>

The current Parser instance.

#### Inherited from

[`Parser`](Parser.md).[`empty`](Parser.md#empty)

#### Defined in

[src/parser.ts:128](https://github.com/BIYUEHU/tsukiko/blob/aa7a414bb89555b3910dd9d229f505891bded4ee/src/parser.ts#L128)

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

[src/parser.ts:39](https://github.com/BIYUEHU/tsukiko/blob/aa7a414bb89555b3910dd9d229f505891bded4ee/src/parser.ts#L39)

***

### lang()

> **lang**(`value`): [`ArrayParser`](ArrayParser.md)\<`S`\>

#### Parameters

• **value**: [`langType`](../type-aliases/langType.md) = `DEFAULT_LANG`

#### Returns

[`ArrayParser`](ArrayParser.md)\<`S`\>

#### Inherited from

[`Parser`](Parser.md).[`lang`](Parser.md#lang)

#### Defined in

[src/utils/lang.ts:8](https://github.com/BIYUEHU/tsukiko/blob/aa7a414bb89555b3910dd9d229f505891bded4ee/src/utils/lang.ts#L8)

***

### max()

> **max**(`value`): [`ArrayParser`](ArrayParser.md)\<`S`\>

Sets the maximum number of items allowed in the array.

#### Parameters

• **value**: `number`

The maximum number of items.

#### Returns

[`ArrayParser`](ArrayParser.md)\<`S`\>

The current ArrayParser instance.

#### Defined in

[src/parsers/array.ts:54](https://github.com/BIYUEHU/tsukiko/blob/aa7a414bb89555b3910dd9d229f505891bded4ee/src/parsers/array.ts#L54)

***

### min()

> **min**(`value`): [`ArrayParser`](ArrayParser.md)\<`S`\>

Sets the minimum number of items required in the array.

#### Parameters

• **value**: `number`

The minimum number of items.

#### Returns

[`ArrayParser`](ArrayParser.md)\<`S`\>

The current ArrayParser instance.

#### Defined in

[src/parsers/array.ts:65](https://github.com/BIYUEHU/tsukiko/blob/aa7a414bb89555b3910dd9d229f505891bded4ee/src/parsers/array.ts#L65)

***

### optional()

> **optional**(): [`Parser`](Parser.md)\<`undefined` \| [`ParserInfer`](../type-aliases/ParserInfer.md)\<`S`\>[]\>

Makes the parser optional.

#### Returns

[`Parser`](Parser.md)\<`undefined` \| [`ParserInfer`](../type-aliases/ParserInfer.md)\<`S`\>[]\>

The current Parser instance.

#### Inherited from

[`Parser`](Parser.md).[`optional`](Parser.md#optional)

#### Defined in

[src/parser.ts:107](https://github.com/BIYUEHU/tsukiko/blob/aa7a414bb89555b3910dd9d229f505891bded4ee/src/parser.ts#L107)

***

### parse()

> **parse**(`input`): [`ParserInfer`](../type-aliases/ParserInfer.md)\<`S`\>[]

Parses the input and returns the result.

#### Parameters

• **input**: `unknown`

The input to parse.

#### Returns

[`ParserInfer`](../type-aliases/ParserInfer.md)\<`S`\>[]

The parsed result.

#### Throws

If parsing fails.

#### Inherited from

[`Parser`](Parser.md).[`parse`](Parser.md#parse)

#### Defined in

[src/parser.ts:61](https://github.com/BIYUEHU/tsukiko/blob/aa7a414bb89555b3910dd9d229f505891bded4ee/src/parser.ts#L61)

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

[src/parser.ts:86](https://github.com/BIYUEHU/tsukiko/blob/aa7a414bb89555b3910dd9d229f505891bded4ee/src/parser.ts#L86)

***

### parseSafe()

> **parseSafe**(`input`): [`ParserSafeReturn`](../type-aliases/ParserSafeReturn.md)\<[`ParserInfer`](../type-aliases/ParserInfer.md)\<`S`\>[]\>

Safely parses the input and returns a result object.

#### Parameters

• **input**: `unknown`

The input to parse.

#### Returns

[`ParserSafeReturn`](../type-aliases/ParserSafeReturn.md)\<[`ParserInfer`](../type-aliases/ParserInfer.md)\<`S`\>[]\>

An object containing the parsing result or error.

#### Inherited from

[`Parser`](Parser.md).[`parseSafe`](Parser.md#parsesafe)

#### Defined in

[src/parser.ts:72](https://github.com/BIYUEHU/tsukiko/blob/aa7a414bb89555b3910dd9d229f505891bded4ee/src/parser.ts#L72)

***

### range()

> **range**(`min`, `max`): [`ArrayParser`](ArrayParser.md)\<`S`\>

Sets both the minimum and maximum number of items allowed in the array.

#### Parameters

• **min**: `number`

The minimum number of items.

• **max**: `number`

The maximum number of items.

#### Returns

[`ArrayParser`](ArrayParser.md)\<`S`\>

The current ArrayParser instance.

#### Defined in

[src/parsers/array.ts:77](https://github.com/BIYUEHU/tsukiko/blob/aa7a414bb89555b3910dd9d229f505891bded4ee/src/parsers/array.ts#L77)

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

[src/parser.ts:158](https://github.com/BIYUEHU/tsukiko/blob/aa7a414bb89555b3910dd9d229f505891bded4ee/src/parser.ts#L158)

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

[src/parser.ts:51](https://github.com/BIYUEHU/tsukiko/blob/aa7a414bb89555b3910dd9d229f505891bded4ee/src/parser.ts#L51)

***

### title()

> **title**(`title`): [`ArrayParser`](ArrayParser.md)\<`S`\>

Sets a title for the parser.

#### Parameters

• **title**: `string`

The title to set.

#### Returns

[`ArrayParser`](ArrayParser.md)\<`S`\>

The current Parser instance.

#### Inherited from

[`Parser`](Parser.md).[`title`](Parser.md#title)

#### Defined in

[src/parser.ts:148](https://github.com/BIYUEHU/tsukiko/blob/aa7a414bb89555b3910dd9d229f505891bded4ee/src/parser.ts#L148)
