import React from "react";
import { useParams } from "react-router-dom";
import useMemory from "../assets/features/memory";
import parse from "html-react-parser";

export default function Product() {
	const { products } = useMemory();
	const { id } = useParams();
	const product = products.filter((product) => product.id == id)[0];
	console.log(product);

	return (
		<>
			<div className="pageSection" data-page="product">
				<div className="detail__image">
					<img src={`/assets/img/products/${product.img}`} alt="" />
				</div>
				<div className="detail__info">
					<div className="detail__name">{product.name}</div>
					<div className="detail__rate">{product.rating}</div>
					<hr />
					<div className="detail__price">{product.price}</div>
					<div className="detail__spec">{parse(product.spec() || "")}</div>
					<div className="detail__description">
						<div>About this item</div>
						{parse(product.description() || "")}
					</div>
				</div>
				<div className="detail__cost">
					<div className="detail__price">{product.price}</div>
					<div>
						<button>-</button>
						<input type="text" name="" id="" />
						<button>+</button>
					</div>
					<button>Add to cart</button>
				</div>
			</div>
		</>
	);
}
