import React, { FC, InputHTMLAttributes } from "react";
import styles from "./styles.module.scss";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Checkbox: FC<CheckboxProps> = React.memo(({ ...restProps }) => {
	return (
		<>
			<label className={styles.checkbox}>dvdfbdfb
				<input {...restProps} type="checkbox"/>
				<span className={styles.checkbox__container}></span>
			</label>
		</>
	);
});
