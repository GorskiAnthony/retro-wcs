import Image from "next/image";
import style from "./links.module.css";
import Link from "next/link";

function Links() {
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
		<nav className={style.navbar}>
			<Image src="/logo.png" width={128} height={64} alt="logo" />
			<ul>
				{links.map((link) => (
					<li key={link.id}>
						<Link href={link.url} className="hover:text-[#d6a701]">
							{link.name}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}

export default Links;
