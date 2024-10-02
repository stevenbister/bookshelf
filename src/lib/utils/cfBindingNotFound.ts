import { error } from '@sveltejs/kit';

export function cfBindingNotFound(): ReturnType<typeof error> {
	return error(500, 'Cloudflare D1 binding not found');
}

export function pageNotFound(): ReturnType<typeof error> {
	return error(404, 'Page not found');
}
