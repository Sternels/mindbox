import { Button, Card } from "components/ui";
import { TodosList } from "./list";
import { TodosInput } from "./input";
import { TodosPanel } from "./panel";

export const TodosModule = () => {
	return (
		<Card maxWidth={600}>
			<Card.Content>
				<TodosInput />
				<TodosList />
			</Card.Content>
			<Card.Footer>
				<TodosPanel/>
			</Card.Footer>
		</Card>
	);
};
