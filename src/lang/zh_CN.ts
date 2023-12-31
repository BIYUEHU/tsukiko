export default {
	/* string */
	not_string: '目标不是 string 类型',
	not_a_email: '目标 string “%input%” 不是一个 email',
	not_a_domain: '目标 string “%input%” 目标不是一个 域名 ',
	not_a_url: '目标 string “%input%” 不是一个 URL ',
	illegal_match_string: '目标 string “%input%” 不符合规则 %value%',
	illegal_starts_with: '目标 string “%input%” 开头字符不与 %value% 匹配',
	illegal_ends_with: '目标 string “%input%” 末尾字符不与 %value% 匹配',
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
	/* stacks - tuple */
	not_a_tuple: '目标不是一个 tuple 类型',
	illegal_tuple_length: '目标 tuple 的长度应是 %value%，而不是 %input%',
	tuple_error: '目标 tuple 在 %length% 处发生错误：%value%',
	/* stacks - object */
	not_an_object: '目标不是一个 object 类型',
	object_is_null: '目标 object 是 null 类型',
	object_is_an_array: '目标 object 是一个 array 类型',
	object_keys_too_many: '严格模式：目标 object 键值数过多，应是 %value% 以内 而不是 %input%',
	object_error: '目标 object 在 %key% 处发生错误：%value%',
	object_key_error: '目标 object 键类型错误',
	/* advance - intersection */
	intersection_error_first: '交叉类型的第一个类型发生错误：%value%',
	intersection_error_second: '交叉类型的第二个类型发生错误：%value%',
	/* advance - union */
	union_error: '联合类型发生错误：%value1% ， %value2%',
	/* advance - literal */
	literal_only: '字面量类型仅允许 string 与 number',
	literal_number_error: '目标 number 不能赋给 %value%',
	literal_string_error: '目标 string 不能赋给 %value%',
	/* advance - custom */
	custom_error: '无法通过自定义规则： %value%',
};
