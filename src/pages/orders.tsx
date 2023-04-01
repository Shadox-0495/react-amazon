import React, { useEffect, useState } from "react";
import useMemory from "../assets/features/memory";
import { formatRating } from "./product";
import CheckoutProduct from "../assets/components/checkoutProduct";

export default function Orders() {
	const { currentUser, db } = useMemory();
	const [orders, setOrders] = useState([]);

	useEffect(() => {
		if (!currentUser) return;
		db.collection("users")
			.doc(currentUser.multiFactor.user.uid)
			.collection("orders")
			.onSnapshot((snapshot: any) => {
				setOrders(snapshot.docs.map((doc: any) => ({ ...doc.data() })));
			});
	}, [currentUser]);

	return (
		<>
			<div className="pageSection" data-page="orders">
				<div className="checkout__container">
					<div className="checkout__title">Shopping Log</div>
					<div>
						{!currentUser || orders.length == 0 ? (
							<div className="checkout__empty"> {!currentUser ? "Login to see your shopping log" : "You currently don't have a purchase log"} </div>
						) : (
							orders.map(({ created, cart }: any) => {
								const subTotal = cart.reduce((a: number, b: any) => a + b["price"] * b["quantity"], 0).toLocaleString("en-US");
								const totalItems = cart.reduce((a: number, b: any) => a + b["quantity"], 0).toLocaleString("en-US");
								return (
									<ul className="checkout__products">
										<li className="checkout__timestamp">
											Date and time of purchase: <span>{created}</span>
										</li>
										{cart.map((product: any) => {
											return <CheckoutProduct data={product} />;
										})}
										<li className="checkout__subTotal">
											<span className="checkout__subTotal-label">
												Total items: <strong>{totalItems}</strong>, Total cost:
											</span>
											<span className="checkout__subTotal-value">${subTotal}</span>
										</li>
									</ul>
								);
							})
						)}
					</div>
				</div>
			</div>
		</>
	);
}
