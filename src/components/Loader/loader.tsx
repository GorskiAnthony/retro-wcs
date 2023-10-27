import style from "./loader.module.css";

function Loader() {
	return (
		<div className={style.loaderContainer}>
			<div className={style.loader}></div>
		</div>
	);
}

export default Loader;
