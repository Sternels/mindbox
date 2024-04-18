import { Button } from 'components/ui'

import styles from './styles.module.scss'

export const TodosPanelFilterBTNs = () => {
    return (
        <div className={styles.todos__panel_filter}>
            <Button className={styles.btn_active}>All</Button>
            <Button>Active</Button>
            <Button>Completed</Button>
        </div>
    )
}