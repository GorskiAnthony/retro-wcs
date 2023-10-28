import Image from "next/image";

function Homepage() {
	return (
		<section className="bg-[#f7f6f2]">
			<div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
				<div className="mx-auto max-w-3xl text-center">
					<h2 className="mb-4 mt-6 text-3xl font-extrabold md:text-5xl">
						l'application de rétrospective Scrum
					</h2>
					<p className="mx-auto mb-8 mt-4 max-w-[528px] text-[#636262] md:mb-12 lg:mb-16">
						Notre application vous permet de mener des
						rétrospectives Scrum en ligne. Vous pouvez créer des
						rétrospectives, invités des participants, créer des
						groupes et bien plus encore.
					</p>
				</div>
				<div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
					<div className="grid grid-cols-1 gap-6 rounded-xl bg-white p-8 md:p-10">
						<Image
							src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a287_Circle%20Image.svg"
							alt="Features Icon"
							className="inline-block h-16"
							height={1000}
							width={1000}
						/>
						<p className="text-xl font-semibold">Support</p>
						<p className="text-sm text-[#636262]">
							Notre équipe est toujours disponible pour répondre à
							vos questions et vous assister à tout moment. Nous
							sommes là pour vous soutenir dans toutes vos
							rétrospectives Scrum.
						</p>
					</div>
					<div className="grid grid-cols-1 gap-6 rounded-xl bg-white p-8 md:p-10">
						<Image
							src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a285_Circle%20Image-1.svg"
							alt="Features Icon"
							className="inline-block h-16"
							height={1000}
							width={1000}
						/>
						<p className="text-xl font-semibold">Organisation</p>
						<p className="text-sm text-[#636262]">
							Concernant notre l'organisation, nous avons
							simplement créé un bouton pour vous simplifier la
							prise en main de l'application.
						</p>
					</div>
					<div className="grid grid-cols-1 gap-6 rounded-xl bg-white p-8 md:p-10">
						<Image
							src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a286_Circle%20Image-2.svg"
							alt="Features Icon"
							className="inline-block h-16"
							width={1000}
							height={1000}
						/>
						<p className="text-xl font-semibold">Flexibilité</p>
						<p className="text-sm text-[#636262]">
							Vous n'avez pas besoin de vous soucier de la gestion
							de vos données. Notre plateforme est totalement
							flexible, vous permettant de vous concentrer sur vos
							rétrospectives sans vous soucier de la gestion des
							fichiers ou des paramètres compliqués.
						</p>
					</div>
					<div className="grid grid-cols-1 gap-6 rounded-xl bg-white p-8 md:p-10">
						<Image
							src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a283_Circle%20Image-3.svg"
							alt="Features Icon"
							className="inline-block h-16"
							width={1000}
							height={1000}
						/>

						<p className="text-xl font-semibold">Réactivité</p>
						<p className="text-sm text-[#636262]">
							Notre site est incroyablement réactif, vous offrant
							une expérience utilisateur fluide et rapide. Vous
							pouvez travailler sans délai pour maximiser votre
							productivité pendant vos rétrospectives.
						</p>
					</div>
					<div className="grid grid-cols-1 gap-6 rounded-xl bg-white p-8 md:p-10">
						<Image
							src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a286_Circle%20Image-2.svg"
							alt="Features Icon"
							className="inline-block h-16"
							height={1000}
							width={1000}
						/>
						<p className="text-xl font-semibold">Qualité</p>
						<p className="text-sm text-[#636262]">
							Nous prenons la sécurité de vos données au sérieux.
							Notre code est sécurisé, garantissant la
							confidentialité et l'intégrité de vos informations
							tout au long de votre expérience de rétrospective
							Scrum.
						</p>
					</div>
					<div className="grid grid-cols-1 gap-6 rounded-xl bg-white p-8 md:p-10">
						<Image
							src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a288_Circle%20Image-5.svg"
							alt="Features Icon"
							className="inline-block h-16"
							height={1000}
							width={1000}
						/>
						<p className="text-xl font-semibold">Ressources</p>
						<p className="text-sm text-[#636262]">
							Pour explorer davantage ou contribuer à notre
							projet, vous pouvez trouver notre code source sur
							GitHub. Découvrez nos ressources et participez à
							l'amélioration de notre plateforme.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Homepage;
