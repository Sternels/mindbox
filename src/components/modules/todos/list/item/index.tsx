import { useAppDispatch } from "app/store/hook";
import { Todo } from "app/store/reducers";
import { Checkbox } from "components/ui/checkbox";
import { ITodo } from "models";
import { FC } from "react";

export interface ITodosItemListProps {
	item: ITodo;
}

export const TodosItemList: FC<ITodosItemListProps> = ({ item }) => {
    const dispatch = useAppDispatch()

	const handlerChangedStatus = () => {
        dispatch(Todo.todoSlice.actions.changeStatusTodo(item))
    };

	return (
		<div>
			<Checkbox
				onChange={handlerChangedStatus}
				title={item.title}
				status={item.status}
			/>
		</div>
	);
};
