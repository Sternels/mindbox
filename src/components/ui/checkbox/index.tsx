import React, { FC, InputHTMLAttributes } from "react";
import styles from "./styles.module.scss";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
	title: string;
	status: boolean;
}

export const Checkbox: FC<CheckboxProps> = React.memo(
	({ title, status, ...restProps }) => {
		return (
			<>
				<label className={styles.checkbox}>
					<input {...restProps} type="checkbox" checked={status} />
					<span className={styles.checkbox__text}>{title}</span>
					<span className={styles.checkbox__container}></span>
				</label>
			</>
		);
	}
);
