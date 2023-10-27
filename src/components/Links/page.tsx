import Image from "next/image";
import style from "./links.module.css";
import Link from "next/link";

function Links() {
	return (
		<nav className={style.navbar}>
			<Image src="/logo.png" width={128} height={64} alt="logo" />
			<ul>
				<Link href="/">Accueil</Link>
				<Link href="/retro">Go la retro</Link>
				<Link href="/contact">Contact</Link>
			</ul>
		</nav>
	);
}

export default Links;
