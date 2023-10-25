import Image from "next/image";
import style from "./links.module.css";

function Links() {
	return (
		<nav className={style.navbar}>
			<Image
				src="/next.svg"
				width={64}
				height={64}
				alt="Picture of the author"
			/>
			<ul>
				<li>Home</li>
				<li>Contact</li>
			</ul>
		</nav>
	);
}

export default Links;
