import React, { useState } from "react";
import useMemory from "../assets/features/memory";
import ConfirmModal from "../assets/components/confirmModal";
import { formatRating } from "./product";

export default function CheckOut() {
	const { cart, removeFromCart, toast } = useMemory();
	const [openModal, setOpenModal] = useState(false);
	const [selectedProduct, setSelectedProduct] = useState({});
	const subTotal = cart.reduce((a: number, b: any) => a + b["price"] * b["quantity"], 0).toLocaleString("en-US");
	const totalItems = cart.reduce((a: number, b: any) => a + b["quantity"], 0).toLocaleString("en-US");

	function removeProduct() {
		removeFromCart(selectedProduct);
		toast.warn("Product removed from shopping cart.", { position: "bottom-right", autoClose: 1000 });
		setOpenModal(false);
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
													<button
														className="checkout__description-remove"
														onClick={() => {
															setSelectedProduct(product);
															setOpenModal(true);
														}}
													>
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
			<ConfirmModal title="Remove product" open={openModal} setOpen={setOpenModal} onConfirm={removeProduct}>
				Are you sure you want to remove the selected product from the shopping cart?
			</ConfirmModal>
		</>
	);
}
