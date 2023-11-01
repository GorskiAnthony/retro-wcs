"use client";

import { useState, useEffect } from "react";
import { io, Socket } from "socket.io-client";

import Loader from "@/components/Loader/loader";
import Columns from "@/components/Columns/columns";
import style from "./session.module.css";

export default function Home({ params }: { params: { slugId: string } }) {
	const [socket, setSocket] = useState<Socket | null>(null);
	const [isLoaded, setIsLoaded] = useState<boolean>(false);
	const [allGood, setAllGood] = useState<string[]>([]);
	const [badNews, setBadNews] = useState<string[]>([]);
	const [fun, setFun] = useState<string[]>([]);

	useEffect(() => {
		if (!socket) {
			socketInit(params.slugId);
		}

		return () => {
			if (socket) {
				socket.disconnect();
			}
		};
	}, []);

	async function socketInit(slug: string) {
		// Fetch for initializing the socket connection
		await fetch("/api/socket");

		// Create a new Socket.io instance
		const newSocket = io();

		newSocket.on("connect", () => {
			newSocket.emit("joinRoom", slug); // Join the room
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
						color="#0de5a8"
						state={allGood}
						socket={socket}
						room={params.slugId}
					/>
					<Columns
						name="bad"
						title="À améliorer 📈"
						color="#fd0a54"
						state={badNews}
						socket={socket}
						room={params.slugId}
					/>
					<Columns
						name="fun"
						title="Remarque & Fun 🤪"
						color="#c06c84"
						state={fun}
						socket={socket}
						room={params.slugId}
					/>
				</div>
			</main>
		</>
	) : (
		<Loader />
	);
}
