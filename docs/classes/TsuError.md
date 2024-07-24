[**tsukiko**](../README.md) • **Docs**

***

[tsukiko](../README.md) / TsuError

# Class: TsuError

## Extends

- `Error`

## Constructors

### new TsuError()

> **new TsuError**(`type`, `str`, `data`?): [`TsuError`](TsuError.md)

#### Parameters

• **type**: [`langType`](../type-aliases/langType.md)

• **str**: `"not_string"` \| `"not_a_email"` \| `"not_a_domain"` \| `"not_a_url"` \| `"illegal_match_string"` \| `"illegal_starts_with"` \| `"illegal_ends_with"` \| `"too_long"` \| `"too_short"` \| `"not_number"` \| `"not_integer_number"` \| `"not_odd_number"` \| `"not_even_number"` \| `"not_natural_number"` \| `"not_positive_number"` \| `"not_negative_number"` \| `"not_percentage"` \| `"too_bigger"` \| `"too_bigger_has"` \| `"too_smaller"` \| `"too_smaller_has"` \| `"not_multiple_number"` \| `"is_a_NaN"` \| `"not_boolean"` \| `"not_true"` \| `"not_false"` \| `"not_null"` \| `"not_undefined"` \| `"not_never"` \| `"not_an_array"` \| `"array_error"` \| `"too_many_items"` \| `"too_few_items"` \| `"not_a_tuple"` \| `"illegal_tuple_length"` \| `"tuple_error"` \| `"not_an_object"` \| `"object_is_null"` \| `"object_is_an_array"` \| `"object_not_instance_of_constructor"` \| `"object_keys_too_many"` \| `"object_keys_too_few"` \| `"object_error"` \| `"object_key_error"` \| `"intersection_error"` \| `"union_error"` \| `"literal_only"` \| `"literal_number_error"` \| `"literal_string_error"` \| `"literal_boolean_error"` \| `"custom_error"` \| `"not_a_function"` \| `"not_a_constructor"` \| `"not_an_async_function"` \| `"not_a_generator_function"` \| `"not_an_async_generator_function"` \| `"not_an_arrow_function"` \| `"function_args_count_mismatch"` \| `"function_name_mismatch"` \| `"not_a_class"` \| `"class_args_count_mismatch"` \| `"class_name_mismatch"` \| `"class_prototype_error"`

• **data?**

#### Returns

[`TsuError`](TsuError.md)

#### Overrides

`Error.constructor`

#### Defined in

[src/utils/error.ts:18](https://github.com/BIYUEHU/tsukiko/blob/aa7a414bb89555b3910dd9d229f505891bded4ee/src/utils/error.ts#L18)

## Properties

### cause?

> `optional` **cause**: `unknown`

#### Inherited from

`Error.cause`

#### Defined in

node\_modules/.pnpm/typescript@5.5.4/node\_modules/typescript/lib/lib.es2022.error.d.ts:24

***

### message

> **message**: `string`

#### Inherited from

`Error.message`

#### Defined in

node\_modules/.pnpm/typescript@5.5.4/node\_modules/typescript/lib/lib.es5.d.ts:1077

***

### name

> **name**: `string`

#### Inherited from

`Error.name`

#### Defined in

node\_modules/.pnpm/typescript@5.5.4/node\_modules/typescript/lib/lib.es5.d.ts:1076

***

### stack?

> `optional` **stack**: `string`

#### Inherited from

`Error.stack`

#### Defined in

node\_modules/.pnpm/typescript@5.5.4/node\_modules/typescript/lib/lib.es5.d.ts:1078

***

### prepareStackTrace()?

> `static` `optional` **prepareStackTrace**: (`err`, `stackTraces`) => `any`

Optional override for formatting stack traces

#### Parameters

• **err**: `Error`

• **stackTraces**: `CallSite`[]

#### Returns

`any`

#### See

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Inherited from

`Error.prepareStackTrace`

#### Defined in

node\_modules/.pnpm/@types+node@20.9.2/node\_modules/@types/node/globals.d.ts:11

***

### stackTraceLimit

> `static` **stackTraceLimit**: `number`

#### Inherited from

`Error.stackTraceLimit`

#### Defined in

node\_modules/.pnpm/@types+node@20.9.2/node\_modules/@types/node/globals.d.ts:13

## Methods

### captureStackTrace()

> `static` **captureStackTrace**(`targetObject`, `constructorOpt`?): `void`

Create .stack property on a target object

#### Parameters

• **targetObject**: `object`

• **constructorOpt?**: `Function`

#### Returns

`void`

#### Inherited from

`Error.captureStackTrace`

#### Defined in

node\_modules/.pnpm/@types+node@20.9.2/node\_modules/@types/node/globals.d.ts:4
