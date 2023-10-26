import React from "react";

import style from "./loader.module.css"; // Assurez-vous de créer le fichier CSS correspondant

function Loader() {
	return (
		<div className={style.loaderContainer}>
			<div className={style.loader}></div>
		</div>
	);
}

export default Loader;
