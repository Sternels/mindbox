import {FC} from 'react'
import { TodosPanelFilterBTNs } from './filter-btns'
import { Button } from 'components/ui'
import { useAppDispatch, useAppSelector } from 'app/store/hook'
import { Todo } from 'app/store/reducers'

import styles from './styles.module.scss' 

export interface ITodosPanelProps {
}

export const TodosPanel:FC<ITodosPanelProps> = ({}) => {
    const dispatch = useAppDispatch()

	const { count } = useAppSelector((state) => state.todosReducer);

    const handlerClick = () => {
        dispatch(Todo.todoSlice.actions.clearCompletedTodo())
    }
    
    return (
        <div className={styles.todos__panel}>
            <span>{count} items left</span>
            <TodosPanelFilterBTNs/>
            <Button onClick={handlerClick}>Clear completed</Button>
        </div>
    )
}