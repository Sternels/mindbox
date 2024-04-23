import { Header } from "../header";
import { Outlet } from "react-router-dom";

import styles from "./styles.module.scss";

const MainLayout = () => {
	return (
		<div className={styles.main_layout}>
			<Header />
			<Outlet />
		</div>
	);
};

export default MainLayout;