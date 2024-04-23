import { ButtonGroup } from "components/ui/button-group";
import { useAppDispatch } from "app/store/hook";
import { Todo } from "app/store/reducers";

import styles from "./styles.module.scss";

export const TodosPanelFilterBTNs = () => {
    const dispatch = useAppDispatch()

    const titles = ["All", "Active", "Completed"]

    const handlerClick = (index: number) => {
        dispatch(Todo.todoSlice.actions.filterOutTodos(titles[index]))
    }
	
    return (
		<div className={styles.todos__panel_filter}>
			<ButtonGroup handlerClick={handlerClick} titles={titles} />
		</div>
	);
};
