import React, { useState } from "react";
import useMemory from "../assets/features/memory";
import ConfirmModal from "../assets/components/confirmModal";
import { formatRating } from "./product";
import CheckoutProduct from "../assets/components/checkoutProduct";

export function getBrowserDate(type: string = "full") {
	const d = new Date();
	const types: Record<string, () => string> = {
		full: () => `${d.getFullYear()}-${`0${d.getMonth()}`.slice(-2)}-${`0${d.getDate()}`.slice(-2)}`,
		day: () => `${`0${d.getDate()}`.slice(-2)}`,
		month: () => `${`0${d.getMonth()}`.slice(-2)}`,
		year: () => `${d.getFullYear()}`,
	};
	//if (!types[type]) return;
	return types[type]() ?? "";
}

export function getBrowserTime(type: string = "full") {
	const d = new Date();
	const types: Record<string, () => string> = {
		full: () => `${d.getHours()}:${`0${d.getMinutes()}`.slice(-2)}:${`0${d.getSeconds()}`.slice(-2)}`,
		seconds: () => `${`0${d.getSeconds()}`.slice(-2)}`,
		minutes: () => `${`0${d.getMinutes()}`.slice(-2)}`,
		hours: () => `${d.getHours()}`,
	};
	//if (!types[type]) return;
	return types[type]() ?? "";
}

export default function CheckOut() {
	const { currentUser, db, showLogin, cart, removeFromCart, clearCart, toast } = useMemory();
	const [openModal, setOpenModal] = useState(false);
	const [selectedProduct, setSelectedProduct] = useState({});
	const subTotal = cart.reduce((a: number, b: any) => a + b["price"] * b["quantity"], 0).toLocaleString("en-US");
	const totalItems = cart.reduce((a: number, b: any) => a + b["quantity"], 0).toLocaleString("en-US");

	function removeProduct() {
		removeFromCart(selectedProduct);
		toast.warn("Product removed from shopping cart.", { position: "bottom-right", autoClose: 1000 });
		setOpenModal(false);
	}

	async function completePurchase() {
		if (!currentUser) {
			showLogin(true);
			return;
		}
		const dateFormat = new Intl.DateTimeFormat("en-US", {
			year: "numeric",
			month: "numeric",
			day: "numeric",
			hour: "numeric",
			minute: "numeric",
			second: "numeric",
		});
		let date = dateFormat.format(Date.now());
		try {
			await db.collection("users").doc(currentUser.multiFactor.user.uid).collection("orders").doc(`${getBrowserDate()}_${getBrowserTime()}`).set({ created: date, cart });
			clearCart();
			toast.success("🎉Purchase saved.🎉", { position: "bottom-right", autoClose: 1000 });
		} catch (err) {
			console.log(err);
			toast.error(`Error while saving purchase. ${err}`, { position: "bottom-right" });
		}
	}

	return (
		<>
			<div className="pageSection" data-page="checkout">
				<div className="checkout__container">
					<div className="checkout__title">Shopping Cart</div>
					<ul className="checkout__products">
						{cart.length == 0 ? (
							<li className="checkout__empty"> Your shopping cart is empty</li>
						) : (
							cart.map((product: any) => {
								return <CheckoutProduct data={product} />;
							})
						)}
					</ul>
					<div className="checkout__subTotal">
						<span className="checkout__subTotal-label">Sub total ( {totalItems} Items ) :</span>
						<span className="checkout__subTotal-value">${subTotal}</span>
						{cart.length == 0 ? (
							""
						) : (
							<button className="checkout__btnCehckout" onClick={completePurchase}>
								{!currentUser ? "Sign in to complete the purchase" : "Buy now"}
							</button>
						)}
					</div>
				</div>
			</div>
			<ConfirmModal title="Remove product" open={openModal} setOpen={setOpenModal} onConfirm={removeProduct}>
				Are you sure you want to remove the selected product from the shopping cart?
			</ConfirmModal>
		</>
	);
}
