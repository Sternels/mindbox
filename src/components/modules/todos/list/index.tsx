import { List } from "components/ui";
import { Todo } from "models";
import { TodosItemList } from "./item";
import { generateKey } from "utils";

import styles from "./styles.module.scss";

export const TodosList = () => {
	const list: Todo[] = [
		{ id: 1, title: "sdfsdf", status: true },
		{ id: 2, title: "sdfsdfvsdvsdvsdv", status: false },
	];

	return (
		<div className={styles.todos__box_todo}>
			<List
				items={list}
				renderItem={(itemList) => (
					<TodosItemList
						key={generateKey(itemList.id.toString())}
						item={itemList}
					/>
				)}
			/>
		</div>
	);
};
