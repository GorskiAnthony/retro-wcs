import DOMPurify from "dompurify";

export function sanitize(text: string) {
	const sanitizedText = DOMPurify.sanitize(text);
	return sanitizedText;
}
