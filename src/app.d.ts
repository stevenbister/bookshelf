// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		interface Platform {
			env: {
				DB: D1Database;
				ENVIRONMENT: 'development' | 'preview' | 'production';
			};
			context: {
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				waitUntil(promise: Promise<any>): void;
			};
			caches: CacheStorage & { default: Cache };
		}
	}
}

export {};
