import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "../assets/components/navBar";
import Home from "./home";
import Product from "./product";
import CheckOut from "./checkOut";

function App() {
	return (
		<>
			<Router>
				<NavBar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/checkout" element={<CheckOut />} />
					<Route path="/product/:id" element={<Product />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
