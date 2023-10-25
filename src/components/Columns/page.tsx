"use client";

interface ColumnsProps {
	title: string;
	color: string;
}

import { useState } from "react";
import Card from "../Cards/page";

import style from "./columns.module.css";
function Columns({ title, color }: ColumnsProps) {
	const [cards, setCards] = useState<string[]>([]);
	const [isNew, setIsNew] = useState<boolean>(false);

	function onSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setIsNew(false);
		if (!e.currentTarget.card.value) return;
		setCards([...cards, e.currentTarget.card.value]);
	}

	function addCard() {
		setIsNew(true);
	}

	return (
		<div>
			<div className={style.column}>
				<h2 style={{ backgroundColor: color }} className={style.h2}>
					{title}
				</h2>

				<button
					style={{ color: color }}
					className={`${style.button}`}
					onClick={addCard}
				>
					+ Add New Card
				</button>
			</div>
			{isNew && (
				<Card onSubmit={onSubmit} setIsNew={setIsNew} card={cards} />
			)}
			<ul className={style.ul}>
				{cards.map((card, index) => (
					<li key={index} className={style.card}>
						{card}
					</li>
				))}
			</ul>
		</div>
	);
}

export default Columns;
