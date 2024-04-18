import { Card } from "components/ui";
import { TodosList } from "./list";
import { TodosInput } from "./input";

export const TodosModule = () => {
	return (
		<Card maxWidth={400}>
			<Card.Content>
				<TodosInput />
				<TodosList />
			</Card.Content>
			<Card.Footer>
				<h4>Типа панель</h4>
			</Card.Footer>
		</Card>
	);
};
