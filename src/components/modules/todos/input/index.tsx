import { FC } from "react";
import { Input } from "components/ui";

import styles from "./styles.module.scss";

export interface ITodosInputProps {}

export const TodosInput: FC<ITodosInputProps> = ({}) => {
	return (
		<div className={styles.todos__input_container}>
			<span className={styles.todos__input_container_btn}></span>
			<Input placeholder="What needs to be done?" />
		</div>
	);
};
