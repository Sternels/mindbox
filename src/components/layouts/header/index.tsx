import styles from "./styles.module.scss";

export const Header = () => {
	return (
		<div className={styles.header}>
			<span className={styles.header__logo}>todos</span>
		</div>
	);
};