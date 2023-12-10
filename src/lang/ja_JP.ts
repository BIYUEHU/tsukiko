export default {
	/* string */
	not_string: '対象は文字列ではありません',
	not_a_email: '対象の文字列 "%input%" はメールアドレスではありません',
	not_a_domain: '対象の文字列 "%input%" はドメインではありません',
	not_a_url: '対象の文字列 "%input%" はURLではありません',
	illegal_match_string: '対象の文字列 "%input%" は %value% のパターンと一致しません',
	illegal_starts_with: '対象の文字列 "%input%" のprefixは %value% ではありません',
	illegal_ends_with: '対象の文字列 "%input%" のsuffixは %value% ではありません',
	/* number */
	not_number: '対象は数値ではありません',
	not_integer_number: '対象の数値 "%input%" は整数ではありません',
	not_odd_number: '対象の数値 "%input%" は奇数ではありません',
	not_even_number: '対象の数値 "%input%"は偶数ではありません',
	not_natural_number: '対象の数値 "%input%" は自然数ではありません ( >= 0 )',
	not_positive_number: '対象の数値 "%input%" は正の数ではありません ( > 0 )',
	not_negative_number: '対象の数値 "%input%" は負の数ではありません ( < 0 )',
	not_percentage: '対象の数値 "%input%" はパーセンテージではありません ( >= 0, <= 1 )',
	too_bigger: '対象の数値 "%input%" は大きすぎます。%value%未満であるべきです',
	too_bigger_has: '対象の数値 "%input%" は大きすぎます。%value%以下であるべきです',
	too_smaller: '対象の数値 "%input%" は小さすぎます。%value%より大きいべきです',
	too_smaller_has: '対象の数値 "%input%" は小さすぎます。%value%以上であるべきです',
	is_a_NaN: '対象の数値は NaN です',
	/* boolean */
	not_boolean: '対象はブール値ではありません',
	not_true: '対象は true ではありません',
	not_false: '対象は false ではありません',
	/* empty */
	not_null: '対象は null ではありません',
	not_undefined: '対象は undefined ではありません',
	/* extends */
	not_never: '対象は never ではありません',
	/* stacks - array */
	not_an_array: '対象は配列ではありません',
	array_error: '配列の %length% 番目でエラーが発生しました: %value%',
	/* stacks - tuple */
	not_a_tuple: '対象はタプルではありません',
	illegal_tuple_length: 'タプルの長さは %value% であるべきですが、 %input% でした',
	tuple_error: 'タプルの %length% 番目でエラーが発生しました: %value%',
	/* stacks - object */
	not_an_object: '対象はオブジェクトではありません',
	object_is_null: '対象のオブジェクトは null です',
	object_is_an_array: '対象のオブジェクトは配列です',
	object_keys_too_many:
		'STRICTモード: オブジェクトのキーが多すぎます。%value%個以下であるべきですが、%input%個存在しました',
	object_error: '%key% でエラーが発生しました: %value%',
	object_key_error: '対象のオブジェクトのキーの型が間違っています',
	/* advance - intersection */
	intersection_error_first: '交差型の最初の型でエラーが発生しました: %value%',
	intersection_error_second: '交差型の2番目の型でエラーが発生しました: %value%',
	/* advance - union */
	union_error: '合併型でエラーが発生しました: %value1%, %value2%',
	/* advance - literal */
	literal_only: 'リテラル型は文字列と数値のみ許可されます',
	literal_number_error: '対象の数値を %value% に代入できません',
	literal_string_error: '対象の文字列を %value% に代入できません',
	/* advance - custom */
	custom_error: 'カスタム検証をパスできませんでした: %value%',
};
