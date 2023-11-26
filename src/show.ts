import Tsu from '.';

const e = Tsu.Tuple([Tsu.Number()]);
type t = typeof e;
export type s = Tsu.infer<t>;

const e2 = Tsu.Array(Tsu.String());
type t2 = typeof e2;
export type s2 = Tsu.infer<t2>;

const e3 = Tsu.Object({ s: Tsu.Number(), g: e2 });
type t3 = typeof e3;
export type s3 = Tsu.infer<t3>;

const e4 = Tsu.Intersection([Tsu.Number(), Tsu.Literal(1)]);
export type s4 = Tsu.infer<typeof e4>;

const e5 = Tsu.Intersection([Tsu.Literal('hello world'), Tsu.Union([e, Tsu.Union([Tsu.Number().optional(), e2])])]);
export type s5 = Tsu.infer<typeof e5>;
