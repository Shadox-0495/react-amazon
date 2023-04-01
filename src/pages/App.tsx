import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NavBar from "../assets/components/navBar";
import Home from "./home";
import Product from "./product";
import CheckOut from "./checkOut";
import Orders from "./orders";

function App() {
	return (
		<>
			<ToastContainer limit={3} />
			<Router>
				<NavBar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/checkout" element={<CheckOut />} />
					<Route path="/product/:id" element={<Product />} />
					<Route path="/orders" element={<Orders />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
