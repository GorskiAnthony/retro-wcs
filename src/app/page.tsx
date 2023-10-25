import Links from "../components/Links/page";
import Columns from "../components/Columns/page";
import style from "./homepage.module.css";

export default function Home() {
	return (
		<>
			<Links />
			<main className={style.main}>
				<Columns title="Ça c'est cool !" color="#33b195" />
				<Columns title="À améliorer" color="#de5ab8" />
				<Columns title="🤪 Remarque & Fun" color="#e3a908" />
			</main>
		</>
	);
}
