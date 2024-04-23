import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import useLocalStorage from 'hooks/useLocalStorage';
import { ITodo } from 'models';
import { generateKey } from 'utils';

interface TodoState {
    count: number;
    todos: ITodo[];
}

const initialState: TodoState = {
    count: 0,
    todos: [],
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        getTodos(state, action: PayloadAction<ITodo[]>){
            state.todos = action.payload
            state.count = action.payload.filter(todo => todo.status !== true).length
        },
        addTodo(state, action: PayloadAction<Pick<ITodo, "title">>) {
            const { changeItems } = useLocalStorage("todos");
            state.count += 1;
            const todos = [...state.todos, { id: generateKey(), title: action.payload.title, status: false }]
            state.todos = todos;
            changeItems(todos)
        },
        changeStatusTodo(state, action: PayloadAction<ITodo>) {
            const { changeItems } = useLocalStorage("todos");
            const status = action.payload.status;
            const todos = state.todos.map(element =>
                element.id === action.payload.id ?
                    { ...element, status: !status }
                    : element
            )
            state.todos = todos;
            status ? state.count += 1 : state.count -= 1;
            changeItems(todos)
        },
        clearCompletedTodo: (state) => {
            const { changeItems } = useLocalStorage("todos");
            const todos = state.todos.filter(todo => todo.status !== true)
            state.todos = todos
            changeItems(todos)
        },
        filterOutTodos(state, action: PayloadAction<string>) {
            const { getData } = useLocalStorage("todos");
            const todos = getData()
            if (action.payload === "Active") state.todos = todos.filter(todo => todo.status !== true)
            else if (action.payload === "Completed") state.todos = todos.filter(todo => todo.status !== false)
            else state.todos = todos
        },
    }
})

export default todoSlice.reducer;