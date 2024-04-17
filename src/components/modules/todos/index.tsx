import { Card, Input } from "components/ui";
import { TodosList } from "./list";
import { Checkbox } from "components/ui/checkbox";

export const TodosModule = () => {
	return (
		<Card maxWidth={400}>
			<Card.Content>
				<Input placeholder="What needs to be done?"/>
				<TodosList />
			</Card.Content>
			<Card.Footer>
				<h4>Типа панель</h4>
				<Checkbox/>
			</Card.Footer>
		</Card>
	);
};
