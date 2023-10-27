import Image from "next/image";

function Homepage() {
	return (
		<section className="bg-[#f7f6f2]">
			<div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
				<div className="mx-auto max-w-3xl text-center">
					<h2 className="mb-4 mt-6 text-3xl font-extrabold md:text-5xl">
						Make every step user-centric
					</h2>
					<p className="mx-auto mb-8 mt-4 max-w-[528px] text-[#636262] md:mb-12 lg:mb-16">
						Lorem ipsum dolor sit amet consectetur adipiscing elit
						ut aliquam,purus sit amet luctus magna fringilla urna
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
							Lorem ipsum dolor sit amet consectetur adipiscing
							elit ut aliquam, purus sit.
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
						<p className="text-xl font-semibold">Organise</p>
						<p className="text-sm text-[#636262]">
							Lorem ipsum dolor sit amet consectetur adipiscing
							elit ut aliquam, purus sit.
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
						<p className="text-xl font-semibold">Flexibility</p>
						<p className="text-sm text-[#636262]">
							Lorem ipsum dolor sit amet consectetur adipiscing
							elit ut aliquam, purus sit.
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

						<p className="text-xl font-semibold">Speed</p>
						<p className="text-sm text-[#636262]">
							Lorem ipsum dolor sit amet consectetur adipiscing
							elit ut aliquam, purus sit.
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
						<p className="text-xl font-semibold">Quality</p>
						<p className="text-sm text-[#636262]">
							Lorem ipsum dolor sit amet consectetur adipiscing
							elit ut aliquam, purus sit.
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
						<p className="text-xl font-semibold">Resource</p>
						<p className="text-sm text-[#636262]">
							Lorem ipsum dolor sit amet consectetur adipiscing
							elit ut aliquam, purus sit.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Homepage;
