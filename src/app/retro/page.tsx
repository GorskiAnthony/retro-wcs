"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { generateRandomSession } from "@/utils/helpers";

import lineDown from "../assets/lineDown.svg";
import lineUp from "../assets/lineUp.svg";
import style from "./retro.module.css";

function Retro() {
	const [session, setSession] = useState<string>("");

	// Générer une session aléatoire dès le chargement de la page
	useEffect(() => {
		generateRandomSession(setSession);
	}, []);

	return (
		<section>
			<div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-28">
				<div className="mx-auto w-full max-w-3xl">
					<div className="text-center">
						<p className="uppercase text-[#636262]">En 3 étapes</p>
						<h2 className="text-3xl font-semibold md:text-5xl">
							Comment ça
							<span
								className={`bg-cover bg-center bg-no-repeat px-4 text-white ${style.works}`}
							>
								fonctionne
							</span>
						</h2>
						<div className="mx-auto mb-8 mt-4 max-w-[528px] md:mb-12 lg:mb-16">
							<p className="text-[#636262]">
								Le processus est assez simple, il suffit de
								suivre les étapes ci-dessous.
							</p>
						</div>
					</div>
				</div>
				<div className="mx-auto grid grid-cols-1 gap-4 sm:justify-items-stretch md:grid-cols-3 lg:gap-8">
					<div className="relative flex flex-col items-center gap-4 p-8 text-center">
						<div className="mb-5 flex max-w-[400px] flex-col items-center justify-center rounded-xl border border-solid border-black bg-white px-8 py-5 [box-shadow:rgb(0,_0,_0)_4px_4px] md:mb-6 lg:mb-8">
							<p className="text-xl font-bold">1</p>
						</div>
						<p className="mb-2 text-xl font-semibold">
							Créer une salle
						</p>
						<p className="text-sm text-[#636262]">
							On doit créer une salle (ou session) avec un nom
							distinctif.
						</p>
						<img
							src={lineDown.src}
							alt=""
							className="absolute bottom-[-33%] left-0 right-auto top-auto -z-10 hidden w-96 md:bottom-auto md:left-[136px] md:right-[-50%] md:top-[18%] md:inline-block lg:left-auto"
						/>
					</div>
					<div className="relative flex flex-col items-center gap-4 p-8 text-center">
						<div className="mb-5 flex max-w-[400px] flex-col items-center justify-center rounded-xl border border-solid border-black bg-white px-8 py-5 [box-shadow:rgb(0,_0,_0)_4px_4px] md:mb-6 lg:mb-8">
							<p className="text-xl font-bold">2</p>
						</div>
						<p className="mb-2 text-xl font-semibold">
							Copier et partager
						</p>
						<p className="text-sm text-[#636262]">
							Avec la création de la session, nous sommes
							redirigés vers un lien, nous n'avons qu'à le
							partager avec notre équipe.
						</p>
						<img
							src={lineUp.src}
							alt=""
							className="absolute bottom-[-33%] left-0 right-auto top-auto -z-10 hidden w-96 md:bottom-auto md:left-[136px] md:right-[-50%] md:top-[8%] md:inline-block lg:left-auto"
						/>
					</div>
					<div className="relative flex flex-col items-center gap-4 p-8 text-center">
						<div className="mb-5 flex max-w-[400px] flex-col items-center justify-center rounded-xl border border-solid border-black bg-white px-8 py-5 [box-shadow:rgb(0,_0,_0)_4px_4px] md:mb-6 lg:mb-8">
							<p className="text-xl font-bold">3</p>
						</div>
						<p className="mb-2 text-xl font-semibold">
							Et c'est bon !
						</p>
						<p className="text-sm text-[#636262]">
							Vous pouvez maintenant commencer à faire votre
							rétrospective.
						</p>
					</div>
				</div>
				<div className="pt-5">
					<h2 className="font-bold text-3xl py-3">Créer une salle</h2>
					<p className="flex mb-2 text-xl font-semibold">
						Créer une nouvelle session :
						<Link
							href={`/retro/${session}`}
							className="text-md font-normal text-[#636262]"
						>
							<span className="flex mx-2 gap-2">
								Go la session{" "}
								<span className="underline decoration-[#d6a701]">
									{session}
								</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="1.5"
									stroke="currentColor"
									className="w-6 h-6 "
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
									/>
								</svg>
							</span>
						</Link>
					</p>
					<button
						type="button"
						onClick={() => generateRandomSession(setSession)}
						className="rounded-md bg-indigo-50 px-3 py-2 text-sm font-semibold text-[#d6a701] shadow-sm hover:bg-[#d6a701] hover:text-white"
					>
						Générer
					</button>
				</div>
			</div>
		</section>
	);
}

export default Retro;
