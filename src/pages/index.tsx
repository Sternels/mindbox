import MainLayout from "components/layouts/main-layout";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("./home"));

export const Routing = () => {
	return (
		<Routes>
			<Route element={<MainLayout />}>
				<Route path="/" element={<HomePage />} />
			</Route>
		</Routes>
	);
};
