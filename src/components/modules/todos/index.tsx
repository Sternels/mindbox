import { Card } from "components/ui/card";
import { TodosList } from "./list";

export const TodosModule = () => {
	return (
		<Card maxWidth={400}>
			<Card.Content>
				<h4>Типа инпут</h4>
				<TodosList />
			</Card.Content>
			<Card.Footer>
				<h4>Типа панель</h4>
			</Card.Footer>
		</Card>
	);
};
