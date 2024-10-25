/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Groups an array of objects by a key
 */
export function groupBy<T extends Record<string, any>>(array: T[], key: keyof T) {
	return array.reduce<Record<string, any>>((acc, cur) => {
		acc[cur[key]] = acc[cur[key]] || [];
		acc[cur[key]].push(cur);

		return acc;
	}, {});
}
