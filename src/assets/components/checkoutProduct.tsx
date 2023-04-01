import React from "react";
import { formatRating } from "../../pages/product";

export default function CheckoutProduct(props: any) {
	const { name, img, rating, price, quantity } = props.data;
	return (
		<>
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
					</div>
				</div>
			</li>
		</>
	);
}
