[**tsukiko**](../README.md) • **Docs**

***

[tsukiko](../README.md) / EnumParser

# Class: EnumParser\<T\>

Parser for enum values.

## Extends

- [`UnionParser`](UnionParser.md)\<`T`\>

## Type Parameters

• **T** *extends* [`Parser`](Parser.md)\<`string` \| `number`\>[]

The array of string or number parsers.

## Constructors

### new EnumParser()

> **new EnumParser**\<`T`\>(...`args`): [`EnumParser`](EnumParser.md)\<`T`\>

Creates a new instance of EnumParser.

#### Parameters

• ...**args**: `T`

The parsers for enum values.

#### Returns

[`EnumParser`](EnumParser.md)\<`T`\>

#### Overrides

[`UnionParser`](UnionParser.md).[`constructor`](UnionParser.md#constructors)

#### Defined in

[src/parsers/advance/enum.ts:14](https://github.com/BIYUEHU/tsukiko/blob/aa7a414bb89555b3910dd9d229f505891bded4ee/src/parsers/advance/enum.ts#L14)

## Properties

### defaultValue?

> `protected` `optional` **defaultValue**: [`ParserInfer`](../type-aliases/ParserInfer.md)\<`T`\[`number`\]\>

#### Inherited from

[`UnionParser`](UnionParser.md).[`defaultValue`](UnionParser.md#defaultvalue)

#### Defined in

[src/parser.ts:49](https://github.com/BIYUEHU/tsukiko/blob/aa7a414bb89555b3910dd9d229f505891bded4ee/src/parser.ts#L49)

***

### isOptional

> `protected` **isOptional**: `boolean` = `false`

#### Inherited from

[`UnionParser`](UnionParser.md).[`isOptional`](UnionParser.md#isoptional)

#### Defined in

[src/parser.ts:44](https://github.com/BIYUEHU/tsukiko/blob/aa7a414bb89555b3910dd9d229f505891bded4ee/src/parser.ts#L44)

***

### langType

> `protected` **langType**: [`langType`](../type-aliases/langType.md) = `DEFAULT_LANG`

#### Inherited from

[`UnionParser`](UnionParser.md).[`langType`](UnionParser.md#langtype)

#### Defined in

[src/utils/lang.ts:6](https://github.com/BIYUEHU/tsukiko/blob/aa7a414bb89555b3910dd9d229f505891bded4ee/src/utils/lang.ts#L6)

***

### rules

> `protected` **rules**: [`ParserFunction`](../type-aliases/ParserFunction.md)[] = `[]`

#### Inherited from

[`UnionParser`](UnionParser.md).[`rules`](UnionParser.md#rules)

#### Defined in

[src/parsers/advance/union.ts:13](https://github.com/BIYUEHU/tsukiko/blob/aa7a414bb89555b3910dd9d229f505891bded4ee/src/parsers/advance/union.ts#L13)

## Methods

### check()

> **check**(`input`): `input is ParserInfer<T[number]>`

Checks if the input is valid according to the parser's rules.

#### Parameters

• **input**: `unknown`

The input to check.

#### Returns

`input is ParserInfer<T[number]>`

True if the input is valid, false otherwise.

#### Inherited from

[`UnionParser`](UnionParser.md).[`check`](UnionParser.md#check)

#### Defined in

[src/parser.ts:99](https://github.com/BIYUEHU/tsukiko/blob/aa7a414bb89555b3910dd9d229f505891bded4ee/src/parser.ts#L99)

***

### default()

> **default**(`value`): [`Parser`](Parser.md)\<[`ParserInfer`](../type-aliases/ParserInfer.md)\<`T`\[`number`\]\>\>

Sets a default value for the parser.

#### Parameters

• **value**: [`ParserInfer`](../type-aliases/ParserInfer.md)\<`T`\[`number`\]\>

The default value.

#### Returns

[`Parser`](Parser.md)\<[`ParserInfer`](../type-aliases/ParserInfer.md)\<`T`\[`number`\]\>\>

The current Parser instance.

#### Inherited from

[`UnionParser`](UnionParser.md).[`default`](UnionParser.md#default)

#### Defined in

[src/parser.ts:118](https://github.com/BIYUEHU/tsukiko/blob/aa7a414bb89555b3910dd9d229f505891bded4ee/src/parser.ts#L118)

***

### defaultHandle()

> `protected` **defaultHandle**(`input`): [`ParserInfer`](../type-aliases/ParserInfer.md)\<`T`\[`0`\]\> \| [`ParserInfer`](../type-aliases/ParserInfer.md)\<`T`\[`1`\]\>

#### Parameters

• **input**: [`ParserInfer`](../type-aliases/ParserInfer.md)\<`T`\[`0`\]\> \| [`ParserInfer`](../type-aliases/ParserInfer.md)\<`T`\[`1`\]\>

#### Returns

[`ParserInfer`](../type-aliases/ParserInfer.md)\<`T`\[`0`\]\> \| [`ParserInfer`](../type-aliases/ParserInfer.md)\<`T`\[`1`\]\>

#### Inherited from

[`UnionParser`](UnionParser.md).[`defaultHandle`](UnionParser.md#defaulthandle)

#### Defined in

[src/parsers/advance/union.ts:29](https://github.com/BIYUEHU/tsukiko/blob/aa7a414bb89555b3910dd9d229f505891bded4ee/src/parsers/advance/union.ts#L29)

***

### describe()

> **describe**(`description`): [`EnumParser`](EnumParser.md)\<`T`\>

Sets a description for the parser.

#### Parameters

• **description**: `string`

The description to set.

#### Returns

[`EnumParser`](EnumParser.md)\<`T`\>

The current Parser instance.

#### Inherited from

[`UnionParser`](UnionParser.md).[`describe`](UnionParser.md#describe)

#### Defined in

[src/parser.ts:138](https://github.com/BIYUEHU/tsukiko/blob/aa7a414bb89555b3910dd9d229f505891bded4ee/src/parser.ts#L138)

***

### empty()

> **empty**(): [`EnumParser`](EnumParser.md)\<`T`\>

Configures the parser to allow undefined but not null.

#### Returns

[`EnumParser`](EnumParser.md)\<`T`\>

The current Parser instance.

#### Inherited from

[`UnionParser`](UnionParser.md).[`empty`](UnionParser.md#empty)

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

[`UnionParser`](UnionParser.md).[`error`](UnionParser.md#error)

#### Defined in

[src/parser.ts:39](https://github.com/BIYUEHU/tsukiko/blob/aa7a414bb89555b3910dd9d229f505891bded4ee/src/parser.ts#L39)

***

### lang()

> **lang**(`value`): [`EnumParser`](EnumParser.md)\<`T`\>

#### Parameters

• **value**: [`langType`](../type-aliases/langType.md) = `DEFAULT_LANG`

#### Returns

[`EnumParser`](EnumParser.md)\<`T`\>

#### Inherited from

[`UnionParser`](UnionParser.md).[`lang`](UnionParser.md#lang)

#### Defined in

[src/utils/lang.ts:8](https://github.com/BIYUEHU/tsukiko/blob/aa7a414bb89555b3910dd9d229f505891bded4ee/src/utils/lang.ts#L8)

***

### optional()

> **optional**(): [`Parser`](Parser.md)\<`undefined` \| [`ParserInfer`](../type-aliases/ParserInfer.md)\<`T`\[`number`\]\>\>

Makes the parser optional.

#### Returns

[`Parser`](Parser.md)\<`undefined` \| [`ParserInfer`](../type-aliases/ParserInfer.md)\<`T`\[`number`\]\>\>

The current Parser instance.

#### Inherited from

[`UnionParser`](UnionParser.md).[`optional`](UnionParser.md#optional)

#### Defined in

[src/parser.ts:107](https://github.com/BIYUEHU/tsukiko/blob/aa7a414bb89555b3910dd9d229f505891bded4ee/src/parser.ts#L107)

***

### parse()

> **parse**(`input`): [`ParserInfer`](../type-aliases/ParserInfer.md)\<`T`\[`number`\]\>

Parses the input and returns the result.

#### Parameters

• **input**: `unknown`

The input to parse.

#### Returns

[`ParserInfer`](../type-aliases/ParserInfer.md)\<`T`\[`number`\]\>

The parsed result.

#### Throws

If parsing fails.

#### Inherited from

[`UnionParser`](UnionParser.md).[`parse`](UnionParser.md#parse)

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

[`UnionParser`](UnionParser.md).[`parseAsync`](UnionParser.md#parseasync)

#### Defined in

[src/parser.ts:86](https://github.com/BIYUEHU/tsukiko/blob/aa7a414bb89555b3910dd9d229f505891bded4ee/src/parser.ts#L86)

***

### parseSafe()

> **parseSafe**(`input`): [`ParserSafeReturn`](../type-aliases/ParserSafeReturn.md)\<[`ParserInfer`](../type-aliases/ParserInfer.md)\<`T`\[`number`\]\>\>

Safely parses the input and returns a result object.

#### Parameters

• **input**: `unknown`

The input to parse.

#### Returns

[`ParserSafeReturn`](../type-aliases/ParserSafeReturn.md)\<[`ParserInfer`](../type-aliases/ParserInfer.md)\<`T`\[`number`\]\>\>

An object containing the parsing result or error.

#### Inherited from

[`UnionParser`](UnionParser.md).[`parseSafe`](UnionParser.md#parsesafe)

#### Defined in

[src/parser.ts:72](https://github.com/BIYUEHU/tsukiko/blob/aa7a414bb89555b3910dd9d229f505891bded4ee/src/parser.ts#L72)

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

[`UnionParser`](UnionParser.md).[`schema`](UnionParser.md#schema)

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

[`UnionParser`](UnionParser.md).[`setMeta`](UnionParser.md#setmeta)

#### Defined in

[src/parser.ts:51](https://github.com/BIYUEHU/tsukiko/blob/aa7a414bb89555b3910dd9d229f505891bded4ee/src/parser.ts#L51)

***

### title()

> **title**(`title`): [`EnumParser`](EnumParser.md)\<`T`\>

Sets a title for the parser.

#### Parameters

• **title**: `string`

The title to set.

#### Returns

[`EnumParser`](EnumParser.md)\<`T`\>

The current Parser instance.

#### Inherited from

[`UnionParser`](UnionParser.md).[`title`](UnionParser.md#title)

#### Defined in

[src/parser.ts:148](https://github.com/BIYUEHU/tsukiko/blob/aa7a414bb89555b3910dd9d229f505891bded4ee/src/parser.ts#L148)
