"use client";

interface ColumnsProps {
	name: string;
	title: string;
	color: string;
	state: string[];
	room: string;
	socket: any;
}

import { useState } from "react";

import ReactMarkdown from "react-markdown";
import Card from "../Cards/cards";
import style from "./columns.module.css";

function Columns({ name, title, color, state, socket, room }: ColumnsProps) {
	const [isNew, setIsNew] = useState<boolean>(false);

	function onSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const value = e.currentTarget.card.value;
		if (!value || !value.trim()) return;

		socket.emit("addMessage", {
			message: value,
			column: name,
			room: room,
		});
		e.currentTarget.reset();
		setIsNew(false);
	}

	function addCard() {
		setIsNew(true);
	}

	return (
		<div className={style.container}>
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
			{isNew && <Card onSubmit={onSubmit} setIsNew={setIsNew} />}
			<ul className={style.ul}>
				{state.map((card, index) => (
					<li key={index} className={style.card}>
						<ReactMarkdown>{card}</ReactMarkdown>
					</li>
				))}
			</ul>
		</div>
	);
}

export default Columns;
