import Tsu from '../src';

test('union parser', () => {
  expect(Tsu.Union(Tsu.Number(), Tsu.String()).check(1)).toBe(true);
  expect(Tsu.Union(Tsu.Number(), Tsu.Literal(2), Tsu.Literal(3)).check(3)).toBe(true);
  expect(Tsu.Union(Tsu.Number(), Tsu.Literal(2)).check(1)).toBe(true);
  expect(Tsu.Union(Tsu.Number(), Tsu.Literal(2)).check('1')).toBe(false);
  expect(Tsu.Union(Tsu.Object({ k: Tsu.Number() }), Tsu.Object({ v: Tsu.String() })).check({ k: 1, v: 2 })).toBe(true);
  expect(Tsu.Union(Tsu.Object({ k: Tsu.Number() }), Tsu.Object({ v: Tsu.String() })).check({ k: 1, v: 2, s: 3 })).toBe(
    true
  );
  expect(
    Tsu.Union(Tsu.Object({ k: Tsu.Number() }).strict(), Tsu.Object({ v: Tsu.String() }).strict()).check({
      k: 1,
      v: 2
    })
  ).toBe(false);
  expect(Tsu.Union(Tsu.Object({ k: Tsu.Number() }), Tsu.Object({ v: Tsu.String() })).check({ k: 1 })).toBe(true);
});
