import { List } from "components/ui";
import { TodosItemList } from "./item";
import { generateKey } from "utils";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "app/store/hook";
import { Todo } from "app/store/reducers";

import styles from "./styles.module.scss";
import useLocalStorage from "hooks/useLocalStorage";

export const TodosList = () => {
	const dispatch = useAppDispatch();
	const { todos } = useAppSelector((state) => state.todosReducer);

	useEffect(() => {
		const { getData } = useLocalStorage("todos");
		const todos = getData();
		dispatch(Todo.todoSlice.actions.getTodos(todos));
	}, []);

	return (
		<div className={styles.todos__box_todo}>
			{todos.length === 0 ? (
				"There are no tasks at the moment"
			) : (
				<List
					items={todos}
					renderItem={(todo) => (
						<TodosItemList key={generateKey(todo.title)} item={todo} />
					)}
				/>
			)}
		</div>
	);
};
