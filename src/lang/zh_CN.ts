export default {
  /* string */
  not_string: '目标不是 string 类型',
  not_a_email: '目标 string “%input%” 不是一个 email',
  not_a_domain: '目标 string “%input%” 目标不是一个 域名 ',
  not_a_url: '目标 string “%input%” 不是一个 URL ',
  illegal_match_string: '目标 string “%input%” 不符合规则 %value%',
  illegal_starts_with: '目标 string “%input%” 开头字符不与 %value% 匹配',
  illegal_ends_with: '目标 string “%input%” 末尾字符不与 %value% 匹配',
  too_long: '目标 string “%input%” 过长，应 <= %value%',
  too_short: '目标 string “%input%” 过短，应 >= %value%',
  /* number */
  not_number: '目标不是 number 类型',
  not_integer_number: '目标 number “%input%” 不是一个整数',
  not_odd_number: '目标 number “%input%” 不是一个奇数',
  not_even_number: '目标 number “%input%” 不是一个偶数',
  not_natural_number: '目标 number “%input%” 不是一个自然数 （ >= 0 ）',
  not_positive_number: '目标 number “%input%” 不是一个正数 （ > 0 ）',
  not_negative_number: '目标 number “%input%” 不是一个负数 （ < 0 ）',
  not_percentage: '目标 number “%input%” 不是一个百分数 （ >= 0, <= 1 ）',
  too_bigger: '目标 number “%input%” 过大，应 < %value%',
  too_bigger_has: '目标 number “%input%” 过大，应 <= %value%',
  too_smaller: '目标 number “%input%” 过小，应 > %value%',
  too_smaller_has: '目标 number “%input%” 过小，应 >= %value%',
  is_a_NaN: '目标 number 是一个 NaN',
  not_multiple_number: '目标 number “%input%” 不是 %value% 的倍数',
  /* boolean */
  not_boolean: '目标不是 boolean 类型',
  not_true: '目标不是 true 类型',
  not_false: '目标不是 false 类型',
  /* empty */
  not_null: '目标不是 null 类型',
  not_undefined: '目标不是 undefined 类型',
  /* extends */
  not_never: '目标不是 never 类型',
  /* stacks - array */
  not_an_array: '目标不是一个 array 类型',
  array_error: '目标 array 在 %length% 处发生错误：%value%',
  too_many_items: '目标 array 的元素过多，应是 %value% 以内 而不是 %input%',
  too_few_items: '目标 array 的元素过少，应是 %value% 以内 而不是 %input%',
  /* stacks - tuple */
  not_a_tuple: '目标不是一个 tuple 类型',
  illegal_tuple_length: '目标 tuple 的长度应是 %value%，而不是 %input%',
  tuple_error: '目标 tuple 在 %length% 处发生错误：%value%',
  /* stacks - object */
  not_an_object: '目标不是一个 object 类型',
  object_is_null: '目标 object 是 null 类型',
  object_is_an_array: '目标 object 是一个 array 类型',
  object_not_instance_of_constructor: '目标 object 不是构造函数的实例',
  object_keys_too_many: '目标 object 键值数过多，应是 %value% 以内 而不是 %input%',
  object_keys_too_few: '目标 object 键值数过少，应是 %value% 以内 而不是 %input%',
  object_error: '目标 object 在 %key% 处发生错误：%value%',
  object_key_error: '目标 object 键类型错误',
  /* advance - intersection */
  intersection_error: '交叉类型发生错误',
  /* advance - union */
  union_error: '联合类型发生错误',
  /* advance - literal */
  literal_only: '字面量类型仅允许 string 与 number',
  literal_number_error: '目标 number 不能赋给 %value%',
  literal_string_error: '目标 string 不能赋给 %value%',
  literal_boolean_error: '目标 boolean 不能赋给 %value%',
  /* advance - custom */
  custom_error: '无法通过自定义规则： %value%',
  /* standard - function */
  not_a_function: '目标不是一个 function 类型',
  not_a_constructor: '目标不是一个构造函数',
  not_an_async_function: '目标不是一个 async function 类型',
  not_a_generator_function: '目标不是一个 generator function 类型',
  not_an_async_generator_function: '目标不是一个 async generator function 类型',
  not_an_arrow_function: '目标不是一个 arrow function 类型',
  function_args_count_mismatch: '目标 function 调用参数数目不匹配，应是 %expected%，而不是 %actual%',
  function_name_mismatch: '目标 function 名称不匹配：%value%',
  /* standard - class */
  not_a_class: '目标不是一个 class 类型',
  class_args_count_mismatch: '目标 class 构造参数数目不匹配，应是 %expected%，而不是 %actual%',
  class_name_mismatch: '目标 class 名称不匹配：%value%',
  class_prototype_error: '目标 class 没有继承指定 Constructor'
}
