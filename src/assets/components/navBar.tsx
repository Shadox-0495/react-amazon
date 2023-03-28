import React from "react";
import { Search, ArrowDropDown } from "@mui/icons-material";
import useMemory from "../features/memory";
import { Link } from "react-router-dom";

export default function NavBar() {
	const { cart } = useMemory();
	return (
		<nav id="navBar" className="navBar">
			<div className="navBar__left">
				<div className="navBar__logo">
					<Link to="/">
						<div className="navBar__logo-sprite"></div>
					</Link>
				</div>
			</div>
			<div className="navBar__center">
				<input className="navBar__search" type="text" id="searchBox" placeholder="Search in the app" />
				<button className="navBar__search-btn">
					<Search />
				</button>
			</div>
			<div className="navBar__right">
				<div className="navBar__login">
					<div className="navBar__login-l1">Hello,</div>
					<div className="navBar__login-l2">
						Accounts & Lists <ArrowDropDown />{" "}
					</div>
				</div>
				<div className="navBar__returns">
					<div className="navBar__returns-l1">Returns</div>
					<div className="navBar__returns-l2">& Orders</div>
				</div>
				<Link className="navBar__cart" to="/checkout">
					<div className="navBar__cart-icon" data-quantity={cart.length || 0}></div>
					<div className="navBar__cart-text">Cart</div>
				</Link>
			</div>
		</nav>
	);
}
