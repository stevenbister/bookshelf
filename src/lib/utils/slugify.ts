export function slugify(str: string) {
	return str
		.toLowerCase()
		.trim()
		.replace(/[\s\W-]+/g, '-') // Replace spaces and non-word characters with a dash
		.replace(/^(-+|-+)$/g, ''); // Remove leading/trailing dashes
}
