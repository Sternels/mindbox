import { lazy } from "react";
import { MainLayout } from "components/layouts";
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
