"use client";

import { useState, useEffect } from "react";
import { io } from "socket.io-client";

import Links from "../components/Links/page";
import Columns from "../components/Columns/columns";
import style from "./homepage.module.css";

let socket: any;
export default function Home() {
	const [isLoaded, setIsLoaded] = useState<boolean>(false);
	const [allGood, setAllGood] = useState<string[]>([]);
	const [badNews, setBadNews] = useState<string[]>([]);
	const [fun, setFun] = useState<string[]>([]);

	useEffect(() => {
		if (!socket) socketInit();

		return () => {
			socket.disconnect();
		};
	}, []);

	async function socketInit() {
		await fetch("/api/messages");

		const res = await fetch("/api/hello");
		const data = await res.json();
		console.log(data);

		socket = io();
		// setIsLoaded permet d'enlever le loader
		if (socket) setIsLoaded(true);

		socket?.on("messageAdded", (data: any) => {
			updateState(data.column, data.message);
		});
	}

	/**
	 *
	 * @param name
	 * @param value
	 * @description updateState permet de mettre à jour le state en fonction de la colonne
	 */
	function updateState(name: string, value: string) {
		switch (name) {
			case "good":
				setAllGood((prev) => [...prev, value]);
				break;
			case "bad":
				setBadNews((prev) => [...prev, value]);
				break;
			case "fun":
				setFun((prev) => [...prev, value]);
				break;
		}
	}

	return isLoaded ? (
		<>
			<Links />
			<main className={style.main}>
				<div className={style.columns}>
					<Columns
						name="good"
						title="Ça c'est cool ! 🚀🤘"
						color="#33b195"
						state={allGood}
						socket={socket}
					/>
					<Columns
						name="bad"
						title="À améliorer 📈"
						color="#de5ab8"
						state={badNews}
						socket={socket}
					/>
					<Columns
						name="fun"
						title="Remarque & Fun 🤪"
						color="#e3a908"
						state={fun}
						socket={socket}
					/>
				</div>
			</main>
		</>
	) : (
		<div> je suis une loader</div>
	);
}
