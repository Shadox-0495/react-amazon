import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useMemory from "../assets/features/memory";
import parse from "html-react-parser";
import { Star, StarHalf, StarOutline } from "@mui/icons-material";

export function formatRating(rating: number) {
	const rateString = `${rating}`.split(".");
	let starsCount = 0;
	const rate = [];

	//add all the filled stars
	for (let i = 0; i < parseInt(rateString[0]); i++) {
		rate.push(<Star />);
		starsCount += 1;
	}

	//if there is a rate with a dot add a half star
	if (rateString.length == 2) {
		rate.push(<StarHalf />);
		starsCount += 1;
	}

	//if after filled and half there still is less than 5 stars add empty stars
	for (let y = starsCount; y < 5; y++) {
		rate.push(<StarOutline />);
	}

	//return it in array so the map function and add it to the form
	return rate;
}

export function formatPrice(price: number) {
	const priceString = `${price}`.split(".");
	const cost = [];
	cost.push(<span className="detail__price-symbol">$</span>);
	cost.push(<span className="detail__price-whole">{priceString[0]}</span>);

	//if there is a rate with a dot add a half star
	if (priceString.length == 2) {
		cost.push(<span className="detail__price-fraction">{priceString[1]}</span>);
	} else {
		cost.push(<span className="detail__price-fraction">00</span>);
	}

	return cost;
}

export default function Product() {
	const { products, addToCart, spec, description, toast } = useMemory();
	const [currentProduct, setCurrentProduct]: any = useState({});
	const { id } = useParams();

	function addProductToCart() {
		addToCart(currentProduct);
		toast.success("🎉Product added to shopping cart.🎉", { position: "bottom-right", autoClose: 1000 });
	}

	useEffect(() => {
		const product = products.filter((product: any) => product.id == id)[0];
		product.spec = spec[Math.floor(Math.random() * spec.length)]; //add random specification
		product.description = description[Math.floor(Math.random() * description.length)]; //add random description
		setCurrentProduct(product);
	}, []);

	return (
		<>
			<div className="pageSection" data-page="product">
				<div className="detail__image">
					<img src={`/assets/img/products/${currentProduct.img}`} alt="" />
				</div>
				<div className="detail__info">
					<div className="detail__name">{currentProduct.name}</div>
					<div className="detail__rate">{formatRating(currentProduct.rating).map((item) => item)}</div>
					<hr />
					<div className="detail__price" data-price={currentProduct.price}>
						{formatPrice(currentProduct.price).map((item) => item)}
					</div>
					<div className="detail__spec">{parse(currentProduct.spec || "")}</div>
					<div className="detail__description">
						<hr />
						<div className="detail__description-title">About this item</div>
						{parse(currentProduct.description || "")}
					</div>
				</div>
				<div className="detail__cost">
					<div className="detail__price" data-price={currentProduct.price}>
						{formatPrice(currentProduct.price).map((item) => item)}
					</div>
					<div className="detail__availability">In Stock</div>
					<button className="detail__btnAdd" onClick={addProductToCart}>
						Add to cart
					</button>
				</div>
			</div>
		</>
	);
}
