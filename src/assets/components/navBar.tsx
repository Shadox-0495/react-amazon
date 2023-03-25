import React from "react";
import { Search, ArrowDropDown } from "@mui/icons-material";

export default function NavBar() {
	return (
		<nav id="navBar" className="navBar">
			<div className="navBar__left">
				<div className="navBar__logo">
					<a href="#">
						<div className="navBar__logo-sprite"></div>
					</a>
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
				<div className="navBar__cart">
					<div className="navBar__cart-text">Cart</div>
					<div className="navBar__cart-icon"></div>
				</div>
			</div>
		</nav>
	);
}
