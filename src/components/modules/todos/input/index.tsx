import { ChangeEvent, FC, useState } from "react";
import { Input } from "components/ui";
import { useAppDispatch } from "app/store/hook";
import { Todo } from "app/store/reducers";

import styles from "./styles.module.scss";

export interface ITodosInputProps {}

export const TodosInput: FC<ITodosInputProps> = ({}) => {
	const [value, setValue] = useState<string>("");
	const dispatch = useAppDispatch();

	const handlerClick = () => {
		if (value !== "") {
			dispatch(Todo.todoSlice.actions.addTodo({ title: value }));
			setValue("")
		}
	};

	const handlerChange = (event: ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
	};

	return (
		<div className={styles.todos__input_container}>
			<span
				onClick={handlerClick}
				className={styles.todos__input_container_btn}
			></span>
			<Input value={value} onChange={handlerChange} placeholder="What needs to be done?" />
		</div>
	);
};
