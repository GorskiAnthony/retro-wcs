import { Dispatch, SetStateAction } from "react";
import { sanitize } from "@/utils/sanitize";

/**
 *
 * @param setter est un setter de state
 * @returns une fonction qui génère un code aléatoire de 5 caractères
 */
export const generateRandomSession = (
	setter: Dispatch<SetStateAction<string>>
): any => {
	const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
	let result = "";
	const length = 5;

	for (let i = 0; i < length; i++) {
		const randomIndex = Math.floor(Math.random() * characters.length);
		result += characters.charAt(randomIndex);
	}

	setter(sanitize(result));
};
