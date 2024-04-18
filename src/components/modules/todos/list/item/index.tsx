import { Checkbox } from "components/ui/checkbox";
import { Todo } from "models";
import { FC } from "react";

export interface ITodosItemListProps {
    item: Todo
}

export const TodosItemList: FC<ITodosItemListProps> = ({item}) => {
	return (
        <div>
            <Checkbox title={item.title} status={item.status}/>
        </div>
    );
};
