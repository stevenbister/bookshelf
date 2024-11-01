import { describe, expect, it } from 'vitest';
import { groupBy } from './groupBy';

describe('groupBy function', () => {
	it('returns empty object for empty array', () => {
		const input: [] = [];
		const result = groupBy(input, 'key');

		expect(result).toEqual({});
	});

	it('returns object with single key-value pair for array with single element', () => {
		const input = [{ key: 'value' }];
		const result = groupBy(input, 'key');

		expect(result).toEqual({ value: [{ key: 'value' }] });
	});

	it('groups elements by key value', () => {
		const input = [
			{ key: 'value1', otherKey: 'otherValue1' },
			{ key: 'value1', otherKey: 'otherValue2' },
			{ key: 'value2', otherKey: 'otherValue3' }
		];
		const result = groupBy(input, 'key');

		expect(result).toEqual({
			value1: [
				{ key: 'value1', otherKey: 'otherValue1' },
				{ key: 'value1', otherKey: 'otherValue2' }
			],
			value2: [{ key: 'value2', otherKey: 'otherValue3' }]
		});
	});

	it('handles nested objects and key value', () => {
		const input = [
			{ key: 'value1', nested: { otherKey: 'otherValue1' } },
			{ key: 'value1', nested: { otherKey: 'otherValue2' } },
			{ key: 'value2', nested: { otherKey: 'otherValue3' } }
		];
		const result = groupBy(input, 'key');

		expect(result).toEqual({
			value1: [
				{ key: 'value1', nested: { otherKey: 'otherValue1' } },
				{ key: 'value1', nested: { otherKey: 'otherValue2' } }
			],
			value2: [{ key: 'value2', nested: { otherKey: 'otherValue3' } }]
		});
	});
});
