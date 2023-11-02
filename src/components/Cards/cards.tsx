"use client";

import { useState } from "react";
import style from "./cards.module.css";
import { sanitize } from "@/utils/sanitize";

interface CardProps {
	onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
	setIsNew: React.Dispatch<React.SetStateAction<boolean>>;
}

function Card({ onSubmit, setIsNew }: CardProps) {
	const [gifs, setGifs] = useState<string[]>([]);
	const [previews, setPreviews] = useState<string[]>([]);
	const [selectedGifIndex, setSelectedGifIndex] = useState<number | null>(
		null
	);
	const [textAreaValue, setTextAreaValue] = useState<string>("");

	/**
	 *
	 * @param text est le texte à rechercher
	 * @returns void
	 * @description getGifs permet de récupérer les GIFs
	 */
	const getGifs = async (text: string) => {
		const sanitizedText = sanitize(text);
		try {
			const response = await fetch(
				`https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${sanitizedText}&limit=6&offset=0&rating=g&lang=fr`
			);

			if (!response.ok) {
				// Si la réponse n'est pas "ok" (statut HTTP différent de 200), générer une erreur
				throw new Error(
					`Erreur lors de la requête API Giphy. Statut : ${response.status}`
				);
			}

			const data = await response.json();
			const gifUrls = data.data.map(
				(gifData: any) => gifData.images.downsized.url
			);
			const previewUrls = data.data.map(
				(gifData: any) => gifData.images.preview_gif.url
			);
			setGifs(gifUrls);
			setPreviews(previewUrls);
		} catch (error) {
			// Afficher un message d'erreur.
			console.error(error);
		}
	};

	/**
	 *
	 * @param e est un événement de type React.KeyboardEvent<HTMLTextAreaElement>
	 * @returns void
	 * @description handleKeyDown permet de récupérer les GIFs si l'utilisateur appuie sur "Entrée" & commence par "/"
	 */
	const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
		if (e.key === "Enter" && e.currentTarget.value.startsWith("/")) {
			getGifs(e.currentTarget.value);
		}
	};

	/**
	 *
	 * @param index est l'index du GIF sélectionné
	 * @returns void
	 * @description handleGifSelect permet de sélectionner un GIF et de l'ajouter dans le textarea de la carte
	 */
	const handleGifSelect = (index: number) => {
		setSelectedGifIndex(index);
		setTextAreaValue(`![gif](${gifs[index]})`);
	};

	return (
		<form className={style.card} onSubmit={onSubmit}>
			<textarea
				name="card"
				id="card"
				onKeyDown={handleKeyDown}
				value={textAreaValue}
				onChange={(e) =>
					setTextAreaValue(sanitize(e.currentTarget.value))
				}
			></textarea>

			{/* Ajoute d'un espace pour la prévisualisation des GIFs */}
			<div className={style.preview}>
				{previews.map((preview, index) => (
					<img
						key={index}
						src={preview}
						alt={`Prévisualisation du GIF ${index + 1}`}
						onClick={() => handleGifSelect(index)}
					/>
				))}
			</div>

			<div className={style.buttons}>
				<button className={style.buttonSave} type="submit">
					Envoyer
				</button>
				<button
					className={style.buttonError}
					onClick={() => setIsNew(false)}
				>
					En fait, non.
				</button>
			</div>
		</form>
	);
}

export default Card;
