import { useState } from "react";
import style from "./cards.module.css";

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

	const getGifs = async (text: string) => {
		const res = await fetch(
			`https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${text}&limit=6&offset=0&rating=g&lang=fr`
		);
		const data = await res.json();
		const gifUrls = data.data.map(
			(gifData: any) => gifData.images.downsized.url
		);
		const previewUrls = data.data.map(
			(gifData: any) => gifData.images.preview_gif.url
		);
		setGifs(gifUrls);
		setPreviews(previewUrls);
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
		// get gifs only if input starts with /
		if (e.key === "Enter" && e.currentTarget.value.startsWith("/")) {
			// L'utilisateur a appuyé sur "Entrée" tout en commençant par "/"
			getGifs(e.currentTarget.value);
		}
	};

	const handleGifSelect = (index: number) => {
		setSelectedGifIndex(index);
		// Remplir automatiquement le texte du textarea avec l'URL du GIF sélectionné
		setTextAreaValue(`![gif](${gifs[index]})`);
	};

	return (
		<form className={style.card} onSubmit={onSubmit}>
			<textarea
				name="card"
				id="card"
				onKeyDown={handleKeyDown}
				value={textAreaValue}
				onChange={(e) => setTextAreaValue(e.target.value)}
			></textarea>

			{/* Ajouter un espace pour la prévisualisation des GIFs */}
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
