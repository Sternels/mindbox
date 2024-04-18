import {FC} from 'react'
import { TodosPanelFilterBTNs } from './filter-btns'
import { Button } from 'components/ui'

import styles from './styles.module.scss' 

export interface ITodosPanelProps {
}

export const TodosPanel:FC<ITodosPanelProps> = ({}) => {
    return (
        <div className={styles.todos__panel}>
            <span>2 items left</span>
            <TodosPanelFilterBTNs/>
            <Button>Clear completed</Button>
        </div>
    )
}