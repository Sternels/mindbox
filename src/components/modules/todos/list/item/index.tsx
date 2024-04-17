import { Todo } from "models";
import { FC } from "react";

export interface ITodosItemListProps {
    item: Todo
}

export const TodosItemList: FC<ITodosItemListProps> = ({item}) => {
	return <div>{item.title}</div>;
};
