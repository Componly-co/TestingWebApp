import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Analytics from "../pages/Analytics";
import Reports from "../pages/Reports";

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='reports' element={<Reports />} />
				<Route path='analytics' element={<Analytics />} />
				<Route path='register' element={<Register />} />
				<Route path='/' element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
