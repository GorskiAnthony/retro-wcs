import style from "./support.module.css";
function Support() {
	const questions = [
		{
			id: 1,
			question: "Comment on utilise les gifs ?",
			response: `C'est très simple, il suffit pour ça d'utiliser le "/", puis votre recherche; /[votre recherche] + entrée.`,
		},
		{
			id: 2,
			question: "Une session est elle unique ?",
			response: `Oui, une session est unique. Nous ne stockons aucune donnée sur nos serveurs. Tout est stocké dans votre navigateur.`,
		},
		{
			id: 3,
			question: "Est ce gratuit ?",
			response: `Oui, à ce jour, c'est totalement gratuit. Cependant, nous ne pouvons pas garantir que cela le restera. Nous ne sommes pas une entreprise, mais un groupe de développeurs qui souhaitent partager leur passion.`,
		},
		{
			id: 4,
			question: "Comment vous soutenir ?",
			response: `Vous pouvez nous soutenir en nous faisant un don via notre page Buy me a coffee. Cela nous permettra de payer les frais de serveurs et de nom de domaine. Lien: www.buymeacoffee.com/gorskianthony`,
		},
		{
			id: 5,
			question: "Comment vous contacter ?",
			response: `Vous pouvez nous contacter par mail à l'adresse suivante : contact[at]agorski[dot]fr`,
		},
	];

	return (
		<section>
			<div className="mx-auto w-full max-w-5xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
				<div className="mb-8 text-center md:mb-12 lg:mb-16">
					<h2 className="text-3xl font-semibold md:text-5xl">
						Les
						<span
							className={`bg-cover bg-center bg-no-repeat px-4 text-white ${style.frame}`}
						>
							questions
						</span>
						fréquentes
					</h2>
					<p className="mx-auto mt-4 max-w-[528px] text-[#636262]">
						Vous retrouverez ici les questions les plus fréquentes
						que nous recevons. Si vous ne trouvez pas la réponse à
						votre question, n’hésitez pas à nous contacter !
					</p>
				</div>
				<div className="mb-8 md:mb-12 lg:mb-16">
					{questions.map((question) => (
						<div
							key={question.id}
							className="mb-6 rounded-sm border-b-[1px] border-[#c4c4c4] p-8"
						>
							<div className="flex cursor-pointer items-start justify-between">
								<p className="text-xl font-semibold">
									{question.question}
								</p>
							</div>
							<p className="mb-4 text-[#636262]">
								{question.response}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Support;
