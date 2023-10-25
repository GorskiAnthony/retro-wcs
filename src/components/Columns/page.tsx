interface ColumnsProps {
	title: string;
	color: string;
}

import style from "./columns.module.css";
function Columns({ title, color }: ColumnsProps) {
	return (
		<div style={{ backgroundColor: color }} className={style.column}>
			<label htmlFor={title}>{title}</label>
			<div></div>
		</div>
	);
}

export default Columns;
