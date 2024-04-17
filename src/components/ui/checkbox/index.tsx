import React, { FC, InputHTMLAttributes } from "react";
import styles from "./styles.module.scss";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
	title: string;
}

export const Checkbox: FC<CheckboxProps> = React.memo(
	({ title, ...restProps }) => {
		return (
			<>
				<label className={styles.checkbox}>
					<input {...restProps} type="checkbox" />
					<span className={styles.checkbox__text}>{title}</span>
					<span className={styles.checkbox__container}></span>
				</label>
			</>
		);
	}
);
