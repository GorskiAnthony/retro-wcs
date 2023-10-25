interface CardProps {
	onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
	setIsNew: React.Dispatch<React.SetStateAction<boolean>>;
	card: string[];
}

import style from "./cards.module.css";

function Card({ onSubmit, setIsNew, card }: CardProps) {
	return (
		<form className={style.card} onSubmit={onSubmit}>
			<textarea name="card" id="card"></textarea>
			<div className={style.buttons}>
				<button className={style.buttonSave} type="submit">
					Envoyer
				</button>
				<button
					className={style.buttonError}
					onClick={() => setIsNew(false)}
				>
					En faite non..
				</button>
			</div>
		</form>
	);
}

export default Card;
