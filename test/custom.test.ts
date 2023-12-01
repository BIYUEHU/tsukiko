import Tsu from '../src';

test('custom parser', () => {
	expect(
		Tsu.Custom<{ ss: number }>(
			input => !!input && typeof input === 'object' && 'ss' in input && typeof input.ss === 'number',
		).check({ ss: 's' }),
	).toBe(false);
	expect(
		Tsu.Custom<{ ss: number }>(
			input => !!input && typeof input === 'object' && 'ss' in input && typeof input.ss === 'number',
		).check({ ss: 233 }),
	).toBe(true);
});
