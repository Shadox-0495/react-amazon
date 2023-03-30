import React, { useState } from "react";
import useMemory from "../assets/features/memory";
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from "@mui/material";
import { formatRating } from "./product";

export default function CheckOut() {
	const { cart } = useMemory();
	const [openModal, setOpenModal] = useState(false);
	const [modalMsg, setModalMsg] = useState("");
	const subTotal = cart.reduce((a: number, b: any) => a + b["price"] * b["quantity"], 0).toLocaleString("en-US");
	const totalItems = cart.reduce((a: number, b: any) => a + b["quantity"], 0).toLocaleString("en-US");

	function removeProduct() {
		setModalMsg("Are you sure you want to remove the selected product from the shopping cart?");
		setOpenModal(true);
	}

	function closeModal() {
		setOpenModal(false);
		setTimeout(() => {
			setModalMsg("");
		}, 500);
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
								const { name, img, price, quantity, rating } = product;
								return (
									<li className="checkout__product">
										<img className="checkout__image" src={`/assets/img/products/${img}`} alt=""></img>
										<div className="checkout__description">
											<div className="checkout__description-name">{name}</div>
											<div className="detail__rate">{formatRating(rating).map((item) => item)}</div>
											<div className="checkout__description-price">${price.toLocaleString("en-US")}</div>
											<div className="checkout__description-actions">
												<span className="checkout__description-qty">
													<span>Qty: </span>
													<span>{quantity.toLocaleString("en-US")}</span>
												</span>
												<span>
													<button className="checkout__description-remove" onClick={removeProduct}>
														Remove
													</button>
												</span>
											</div>
										</div>
									</li>
								);
							})
						)}
					</ul>
					<div className="checkout__subTotal">
						<span className="checkout__subTotal-label">Sub total ( {totalItems} Items ) :</span>
						<span className="checkout__subTotal-value">${subTotal}</span>
						<button className="checkout__btnCehckout">Proceed with checkout</button>
					</div>
				</div>
			</div>
			<Dialog open={openModal} onClose={closeModal} className="contactMessageDialog" aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
				<DialogTitle id="alert-dialog-title"></DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">{modalMsg}</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={closeModal} autoFocus variant="outlined">
						Yes
					</Button>
					<Button onClick={closeModal} autoFocus variant="outlined">
						No
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
}
