"use client";

import { useState } from "react";
import Image from "next/image";
import style from "./links.module.css";
import Link from "next/link";

function Links() {
	const [isOpen, setIsOpen] = useState<boolean>(false); // State for the mobile menu

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const links = [
		{
			id: 1,
			name: "Accueil",
			url: "/",
		},
		{
			id: 2,
			name: "Retrospective",
			url: "/retro",
		},
		{
			id: 3,
			name: "Une idée ?",
			url: "/contact",
		},
	];

	return (
		<>
			<nav className={style.navbar}>
				<Image src="/logo.png" width={128} height={64} alt="logo" />
				<button
					data-collapse-toggle="navbar-default"
					type="button"
					className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
					aria-controls="navbar-default"
					aria-expanded={isOpen ? "true" : "false"} // Mettez à jour l'attribut aria-expanded en fonction de isOpen
					onClick={toggleMenu} // Appelez la fonction toggleMenu lors du clic sur le bouton
				>
					<span className="sr-only">Open main menu</span>
					<svg
						className="w-5 h-5"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 17 14"
					>
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M1 1h15M1 7h15M1 13h15"
						/>
					</svg>
				</button>
			</nav>
			<div
				className={`${
					isOpen ? "grid-col-1" : "hidden"
				} w-full md:flex md:justify-center md:my-5 md:w-auto`} // Utilisez isOpen pour conditionnellement afficher ou masquer le menu
				id="navbar-default"
			>
				<div className="mx-5">
					<ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 ">
						{links.map((link) => (
							<li key={link.id} className="py-2">
								<Link
									href={link.url}
									className="hover:text-[#d6a701]"
								>
									{link.name}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
}

export default Links;
