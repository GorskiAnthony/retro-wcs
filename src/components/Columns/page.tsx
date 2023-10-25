interface ColumnsProps {
	title: string;
	color: string;
}

import style from "./columns.module.css";
function Columns({ title, color }: ColumnsProps) {
	return (
		<div className={style.column}>
			<h2 style={{ backgroundColor: color }} className={style.h2}>
				{title}
			</h2>
			<button style={{ color: color }} className={`${style.button}`}>
				Add button
			</button>
		</div>
	);
}

export default Columns;
