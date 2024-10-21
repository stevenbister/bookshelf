import { drizzle } from 'drizzle-orm/d1';
import type { DbClient } from './types';
import { cfBindingNotFound } from '$lib/utils/cfBindingNotFound';
import { error } from '@sveltejs/kit';

type DBType = App.Platform['env']['DB'];

export class Database {
	private static instance: DbClient | null = null;
	private static DB: DBType | undefined;

	private constructor() {}

	// Method to initialize the DbClient instance with the platform
	public static initialize(DB: DBType | undefined): DbClient {
		if (!Database.instance) {
			// Store the platform for future reference
			Database.DB = DB;

			// Initialize the DbClient with the platform's DB configuration
			if (!Database.DB) cfBindingNotFound();

			Database.instance = drizzle(Database.DB);
		}
		return Database.instance;
	}

	// Method to get the singleton instance of DbClient
	public static getInstance(): DbClient {
		if (!Database.instance) {
			return error(
				500,
				'Database has not been initialized. Call Database.initialize(platform) first.'
			);
		}

		return Database.instance;
	}
}
