import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/Home";
import ApiDetails from "./pages/API/ApiDetails";
import { Routes, Route } from "react-router-dom";
const App = () => {
	return (
		<div className="app">
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/api" element={<ApiDetails />} />
			</Routes>
		</div>
	);
};

export default App;
