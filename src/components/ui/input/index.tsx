import React, {FC, InputHTMLAttributes} from 'react';
import styles from './styles.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
}

export const Input:FC<InputProps> = React.memo(({...restProps}) => {
    return (
        <input {...restProps} className={styles.input}/>
    )
})