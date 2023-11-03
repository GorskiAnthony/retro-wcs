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
import { sanitize } from "@/utils/sanitize";

function Columns({ name, title, color, state, socket, room }: ColumnsProps) {
	const [isNew, setIsNew] = useState<boolean>(false);

	/**
	 *
	 * @param e est un événement de type React.FormEvent<HTMLFormElement>
	 * @returns void
	 * @description onSubmit permet d'envoyer le message au serveur
	 */
	function onSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const value = sanitize(e.currentTarget.card.value);
		if (!value || !value.trim()) return;

		const message = {
			message: value,
			column: name,
			room: room,
		};

		socket.emit("addMessage", message);
		e.currentTarget.reset();
		setIsNew(false);
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
					onClick={() => setIsNew(true)}
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
