import React, { useRef } from "react";
import { Carousel as Gallery } from "react-responsive-carousel";
import Carousel from "react-multi-carousel";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import ProductCard from "../assets/components/productCard";
import { Link } from "react-router-dom";
import useMemory from "../assets/features/memory";

export default function Home() {
	const { products } = useMemory();

	const sliders: Array<string> = ["slider1-lg", "slider2-lg", "slider3-lg", "slider4-lg", "slider5-lg", "slider6-lg"];
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};

	function backToTop() {
		window.scrollTo(0, 0);
	}

	return (
		<>
			<div className="pageSection" data-page="home">
				<Gallery
					className="banner"
					autoPlay
					interval={5000}
					infiniteLoop
					showThumbs={false}
					showIndicators={false}
					showStatus={false}
					renderArrowPrev={(onClickHandler, hasPrev, label) => (
						<button type="button" className="control-arrow control-prev" onClick={onClickHandler} title={label}>
							<ArrowBackIosNew />
						</button>
					)}
					renderArrowNext={(onClickHandler, hasNext, label) => (
						<button type="button" className="control-arrow control-next" onClick={onClickHandler} title={label}>
							<ArrowForwardIos />
						</button>
					)}
				>
					{sliders.map((slide) => {
						return (
							<div>
								<img src={`./assets/img/backgrounds/${slide}.jpg`} alt="" />
							</div>
						);
					})}
				</Gallery>

				<div className="contentCard">
					<ProductCard title="Gaming accessories" label="See more">
						{products
							.filter((product: any) => product.img.includes("grid1-"))
							.map((product) => (
								<img src={`/assets/img/products/${product.img}`} alt="" data-text={product.text} data-link={`/product/${product.id}`} />
							))}
					</ProductCard>

					<ProductCard title="Get fit at home">
						<img src="/assets/img/products/card1.jpg" alt="" />
					</ProductCard>

					<ProductCard title="Dresses">
						<img src="/assets/img/products/card2.jpg" alt="" />
					</ProductCard>

					<div></div>

					<ProductCard title="Shop By Category">
						{products
							.filter((product: any) => product.img.includes("grid2-"))
							.map((product) => (
								<img src={`/assets/img/products/${product.img}`} alt="" data-text={product.text} data-link={`/product/${product.id}`} />
							))}
					</ProductCard>

					<ProductCard title="Easy returns">
						<img src="/assets/img/products/card3.jpg" alt="" />
					</ProductCard>

					<ProductCard title="Health & Personal Care">
						<img src="/assets/img/products/card4.jpg" alt="" />
					</ProductCard>

					<ProductCard title="Beauty picks">
						<img src="/assets/img/products/card5.jpg" alt="" />
					</ProductCard>
				</div>

				<div className="contentGrid">
					<div className="contentCategory">
						<div className="contentCategory__title">Top Sellers in Books for you</div>

						<Carousel arrows responsive={responsive}>
							{products
								.filter((product: any) => product.img.includes("slideShow1-"))
								.map((product) => {
									return (
										<Link to={`/product/${product.id}`}>
											<img src={`/assets/img/products/${product.img}`} alt="" data-text={product.text} />
										</Link>
									);
								})}
						</Carousel>
					</div>

					<div className="contentCategory">
						<div className="contentCategory__title">Popular products in Beauty internationally</div>

						<Carousel responsive={responsive}>
							{products
								.filter((product: any) => product.img.includes("slideShow2-"))
								.map((product) => {
									return (
										<Link to={`/product/${product.id}`}>
											<img src={`/assets/img/products/${product.img}`} alt="" data-text={product.text} />
										</Link>
									);
								})}
						</Carousel>
					</div>

					<div className="contentCard">
						<ProductCard title="New arrival in Toys" label="Shop Now">
							<img src="/assets/img/products/card6.jpg" alt="" />
						</ProductCard>

						<ProductCard title="For your Fitness Needs" label="Shop Now">
							<img src="/assets/img/products/card7.jpg" alt="" />
						</ProductCard>

						<ProductCard title="For your Fitness Needs" label="Shop Now">
							<img src="/assets/img/products/card8.jpg" alt="" />
						</ProductCard>

						<ProductCard title="For your Fitness Needs" label="Shop Now">
							<img src="/assets/img/products/card9.jpg" alt="" />
						</ProductCard>
					</div>

					<div className="contentCategory">
						<div className="contentCategory__title">International top sellers in Home Improvement</div>

						<Carousel responsive={responsive}>
							{products
								.filter((product: any) => product.img.includes("slideShow3-"))
								.map((product) => {
									return (
										<Link to={`/product/${product.id}`}>
											<img src={`/assets/img/products/${product.img}`} alt="" data-text={product.text} />
										</Link>
									);
								})}
						</Carousel>
					</div>

					<div className="contentCategory">
						<div className="contentCategory__title">International top sellers</div>

						<Carousel responsive={responsive}>
							{products
								.filter((product: any) => product.img.includes("slideShow4-"))
								.map((product) => {
									return (
										<Link to={`/product/${product.id}`}>
											<img src={`/assets/img/products/${product.img}`} alt="" data-text={product.text} />
										</Link>
									);
								})}
						</Carousel>
					</div>

					<div className="contentCard">
						<ProductCard title="Sjop Laptops & Tablets" label="Shop Now">
							<img src="/assets/img/products/card10.jpg" alt="" />
						</ProductCard>

						<ProductCard title="Create with stip lights" label="Shop Now">
							<img src="/assets/img/products/card11.jpg" alt="" />
						</ProductCard>

						<ProductCard title="Gaming merchandise" label="Shop Now">
							{products
								.filter((product: any) => product.img.includes("grid3-"))
								.map((product) => (
									<img src={`/assets/img/products/${product.img}`} alt="" data-text={product.text} data-link={`/product/${product.id}`} />
								))}
						</ProductCard>

						<ProductCard title="Shop Pet supplies" label="Shop Now">
							<img src="/assets/img/products/card12.jpg" alt="" />
						</ProductCard>
					</div>

					<div className="contentCategory">
						<div className="contentCategory__title">Popular products in Wireless internationally</div>

						<Carousel responsive={responsive}>
							{products
								.filter((product: any) => product.img.includes("slideShow5-"))
								.map((product) => {
									return (
										<Link to={`/product/${product.id}`}>
											<img src={`/assets/img/products/${product.img}`} alt="" data-text={product.text} />
										</Link>
									);
								})}
						</Carousel>
					</div>

					<div className="contentCategory">
						<div className="contentCategory__title">Popular products in PC internationally</div>

						<Carousel responsive={responsive}>
							{products
								.filter((product: any) => product.img.includes("slideShow6-"))
								.map((product) => {
									return (
										<Link to={`/product/${product.id}`}>
											<img src={`/assets/img/products/${product.img}`} alt="" data-text={product.text} />
										</Link>
									);
								})}
						</Carousel>
					</div>
				</div>
			</div>
			<div className="returnTop" onClick={backToTop}>
				Back to top
			</div>
		</>
	);
}
