"use client";

import { useState, useEffect } from "react";
import { io, Socket } from "socket.io-client";

import Loader from "@/components/Loader/loader";
import Columns from "@/components/Columns/columns";
import style from "./retro.module.css";

export default function Home() {
	const [socket, setSocket] = useState<Socket | null>(null);
	const [isLoaded, setIsLoaded] = useState<boolean>(false);
	const [allGood, setAllGood] = useState<string[]>([]);
	const [badNews, setBadNews] = useState<string[]>([]);
	const [fun, setFun] = useState<string[]>([]);

	useEffect(() => {
		if (!socket) {
			socketInit();
		}

		return () => {
			if (socket) {
				socket.disconnect();
			}
		};
	}, []);

	async function socketInit() {
		// Fetch for initializing the socket connection
		await fetch("/api/socket");

		// Create a new Socket.io instance
		const newSocket = io();

		newSocket.on("connect", () => {
			console.log("Connected to Socket.io");
			setIsLoaded(true); // Set the 'isLoaded' state to true when connected
		});

		// Set up event listener for 'messageAdded'
		newSocket.on("messageAdded", (data: any) => {
			updateState(data.column, data.message);
		});

		setSocket(newSocket);
	}

	/**
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
			default:
				break;
		}
	}

	return isLoaded ? (
		<>
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
		<Loader />
	);
}
