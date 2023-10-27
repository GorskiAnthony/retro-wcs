import Image from "next/image";
import style from "./links.module.css";

function Links() {
	return (
		<nav className={style.navbar}>
			<Image src="/logo.png" width={128} height={64} alt="logo" />
			<ul>
				<li>Home</li>
				<li>Contact</li>
			</ul>
		</nav>
	);
}

export default Links;
