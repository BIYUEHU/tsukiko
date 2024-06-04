import Tsu from '../src';

test('insection parser', () => {
  expect(Tsu.Intersection([Tsu.Number(), Tsu.Literal(2)]).check(2)).toBe(true);
  expect(Tsu.Intersection([Tsu.Number(), Tsu.Literal(2)]).check(1)).toBe(false);
  expect(Tsu.Intersection([Tsu.Object({ k: Tsu.Number() }), Tsu.Object({ v: Tsu.String() })]).check({ k: 1 })).toBe(
    false
  );
  expect(
    Tsu.Union([Tsu.Object({ k: Tsu.Number() }).strict(), Tsu.Object({ v: Tsu.String().strict() })]).check({
      k: 1,
      v: 2
    })
  ).toBe(false);
});
