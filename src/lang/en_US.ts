export default {
  /* string */
  not_string: 'Target is not a string',
  not_a_email: 'Target string "%input%" is not an email',
  not_a_domain: 'Target string "%input%" is not a domain',
  not_a_url: 'Target string "%input%" is not a URL',
  illegal_match_string: 'Target string "%input%" does not match the pattern %value%',
  illegal_starts_with: 'Target string "%input%" does not start with %value%',
  illegal_ends_with: 'Target string "%input%" does not end with %value%',
  /* number */
  not_number: 'Target is not a number',
  not_integer_number: 'Target number "%input%" is not an integer',
  not_odd_number: 'Target number "%input%" is not an odd number',
  not_even_number: 'Target number "%input%" is not an even number',
  not_natural_number: 'Target number "%input%" is not a natural number ( >= 0 )',
  not_positive_number: 'Target number "%input%" is not a positive number ( > 0 )',
  not_negative_number: 'Target number "%input%" is not a negative number ( < 0 )',
  not_percentage: 'Target number "%input%" is not a percentage ( >= 0, <= 1 )',
  too_bigger: 'Target number "%input%" is too big, should be < %value%',
  too_bigger_has: 'Target number "%input%" is too big, should be <= %value%',
  too_smaller: 'Target number "%input%" is too small, should be > %value%',
  too_smaller_has: 'Target number "%input%" is too small, should be >= %value%',
  is_a_NaN: 'Target number is a NaN',
  /* boolean */
  not_boolean: 'Target is not a boolean',
  not_true: 'Target is not true',
  not_false: 'Target is not false',
  /* empty */
  not_null: 'Target is not null',
  not_undefined: 'Target is not undefined',
  /* extends */
  not_never: 'Target is not never',
  /* stacks - array */
  not_an_array: 'Target is not an array',
  array_error: 'Target array error at %length%: %value%',
  /* stacks - tuple */
  not_a_tuple: 'Target is not a tuple',
  illegal_tuple_length: 'Target tuple length should be %value%, not %input%',
  tuple_error: 'Target tuple error at %length%: %value%',
  /* stacks - object */
  not_an_object: 'Target is not an object',
  object_is_null: 'Target object is null',
  object_is_an_array: 'Target object is an array',
  object_not_instance_of_constructor: 'Target object is not an instance of constructor',
  object_keys_too_many: 'Strict mode: too many keys for target object, should be %value% or less, not %input%',
  object_error: 'Target object error at %key%: %value%',
  object_key_error: 'Target object key type error',
  /* advance - intersection */
  intersection_error_first: 'Intersection type first error: %value%',
  intersection_error_second: 'Intersection type second error: %value%',
  /* advance - union */
  union_error: 'Union type error: %value1%, %value2%',
  /* advance - literal */
  literal_only: 'Literal types allow only strings and numbers',
  literal_number_error: 'Target number cannot assign to %value%',
  literal_string_error: 'Target string cannot assign to %value%',
  /* advance - custom */
  custom_error: 'Cannot pass custom validation: %value%',
  /* standard - function */
  not_a_function: 'Target is not a function',
  not_a_constructor: 'Target is not a constructor',
  not_an_async_function: 'Target is not an async function',
  not_a_generator_function: 'Target is not a generator function',
  not_an_async_generator_function: 'Target is not an async generator function',
  not_an_arrow_function: 'Target is not an arrow function',
  function_args_count_mismatch: 'Target function call arguments count mismatch, expected %expected%, got %actual%',
  function_name_mismatch: 'Target function name mismatch: %value%',
  /* standard - class */
  not_a_class: 'Target is not a class',
  class_args_count_mismatch: 'Target class constructor arguments count mismatch, expected %expected%, got %actual%',
  class_name_mismatch: 'Target class name mismatch: %value%',
  class_prototype_error: 'Target class does not inherit specified Constructor'
};
