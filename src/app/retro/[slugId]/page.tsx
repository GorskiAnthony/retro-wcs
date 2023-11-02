"use client";

import { useState, useEffect } from "react";
import { io, Socket } from "socket.io-client";

import { sanitize } from "@/utils/sanitize";
import Loader from "@/components/Loader/loader";
import Columns from "@/components/Columns/columns";

import style from "./session.module.css";

export default function Home({ params }: { params: { slugId: string } }) {
	const [socket, setSocket] = useState<Socket | null>(null);
	const [isLoaded, setIsLoaded] = useState<boolean>(false);

	// State pour les colonnes
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

	/**
	 *
	 * @param slug est le slug de la session
	 * @description socketInit permet d'initialiser le socket
	 * et de rejoindre la room
	 */
	async function socketInit(slug: string) {
		try {
			// Je récupère le socket
			await fetch("/api/socket");

			// Création d'un nouveau socket
			const newSocket = io();

			newSocket.on("connect", () => {
				newSocket.emit("joinRoom", slug); // Join une room
				setIsLoaded(true);
			});

			// Mise en place d'un récepteur d'événements pour "messageAdded".
			newSocket.on("messageAdded", (data: any) => {
				updateState(data.column, data.message);
			});

			setSocket(newSocket);
		} catch (error) {
			// Gérer les erreurs ici, par exemple, enregistrer l'erreur dans une variable d'état ou afficher un message d'erreur à l'utilisateur.
			console.error(
				"Une erreur s'est produite lors de l'initialisation du socket : ",
				error
			);
		}
	}

	/**
	 * @param name
	 * @param value
	 * @description updateState permet de mettre à jour le state en fonction de la colonne
	 */
	function updateState(name: string, value: string) {
		switch (name) {
			case "good":
				setAllGood((prev) => [...prev, sanitize(value)]);
				break;
			case "bad":
				setBadNews((prev) => [...prev, sanitize(value)]);
				break;
			case "fun":
				setFun((prev) => [...prev, sanitize(value)]);
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
