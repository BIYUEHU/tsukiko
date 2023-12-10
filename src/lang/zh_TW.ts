export default {
	/* string */
	not_string: '目標不是 string 類型',
	not_a_email: '目標 string 「%input%」 不是一個 email',
	not_a_domain: '目標 string 「%input%」 目標不是一個 域名 ',
	not_a_url: '目標 string 「%input%」 不是一個 URL ',
	illegal_match_string: '目標 string 「%input%」 不符合規則 %value%',
	illegal_starts_with: '目標 string 「%input%」 開頭字符不與 %value% 匹配',
	illegal_ends_with: '目標 string 「%input%」 末尾字符不與 %value% 匹配',
	/* number */
	not_number: '目標不是 number 類型',
	not_integer_number: '目標 number 「%input%」 不是一個整數',
	not_odd_number: '目標 number 「%input%」 不是一個奇數',
	not_even_number: '目標 number 「%input%」 不是一個偶數',
	not_natural_number: '目標 number 「%input%」 不是一個自然數 （ >= 0 ）',
	not_positive_number: '目標 number 「%input%」 不是一個正數 （ > 0 ）',
	not_negative_number: '目標 number 「%input%」 不是一個負數 （ < 0 ）',
	not_percentage: '目標 number 「%input%」 不是一個百分數 （ >= 0, <= 1 ）',
	too_bigger: '目標 number 「%input%」 過大，應 < %value%',
	too_bigger_has: '目標 number 「%input%」 過大，應 <= %value%',
	too_smaller: '目標 number 「%input%」 過小，應 > %value%',
	too_smaller_has: '目標 number 「%input%」 過小，應 >= %value%',
	is_a_NaN: '目標 number 是一個 NaN',
	/* boolean */
	not_boolean: '目標不是 boolean 類型',
	not_true: '目標不是 true 類型',
	not_false: '目標不是 false 類型',
	/* empty */
	not_null: '目標不是 null 類型',
	not_undefined: '目標不是 undefined 類型',
	/* extends */
	not_never: '目標不是 never 類型',
	/* stacks - array */
	not_an_array: '目標不是一個 array 類型',
	array_error: '目標 array 在 %length% 處發生錯誤：%value%',
	/* stacks - tuple */
	not_a_tuple: '目標不是一個 tuple 類型',
	illegal_tuple_length: '目標 tuple 的長度應是 %value%，而不是 %input%',
	tuple_error: '目標 tuple 在 %length% 處發生錯誤：%value%',
	/* stacks - object */
	not_an_object: '目標不是一個 object 類型',
	object_is_null: '目標 object 是 null 類型',
	object_is_an_array: '目標 object 是一個 array 類型',
	object_keys_too_many: '嚴格模式：目標 object 鍵值數過多，應是 %value% 以內 而不是 %input%',
	object_error: '目標 object 在 %key% 處發生錯誤：%value%',
	object_key_error: '目標 object 鍵類型錯誤',
	/* advance - intersection */
	intersection_error_first: '交叉類型的第一個類型發生錯誤：%value%',
	intersection_error_second: '交叉類型的第二個類型發生錯誤：%value%',
	/* advance - union */
	union_error: '聯合類型發生錯誤：%value1% ， %value2%',
	/* advance - literal */
	literal_only: '字面量類型僅允許 string 與 number',
	literal_number_error: '目標 number 不能賦給 %value%',
	literal_string_error: '目標 string 不能賦給 %value%',
	/* advance - custom */
	custom_error: '無法通過自定義規則： %value%',
};
