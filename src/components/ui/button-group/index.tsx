import { FC, useState } from "react";
import { Button } from "../button";
import { generateKey } from "utils";

import styles from "./styles.module.scss";

interface ButtonGroupProps {
	titles: string[];
    handlerClick: (index: number) => void
}

export const ButtonGroup: FC<ButtonGroupProps> = ({ titles, handlerClick }) => {
	const [clickedId, setClickedId] = useState<number>(-1);

    const handlerClickButton = (i: number) => {
        setClickedId(i)
        handlerClick(i)
    }

	return (
		<>
			{titles.map((title, i) => (
				<Button
					key={generateKey(i.toString())}
					onClick={() => handlerClickButton(i)}
					name={title}
					className={i === clickedId ? styles.btn_active : ""}
				>
					{title}
				</Button>
			))}
		</>
	);
};
