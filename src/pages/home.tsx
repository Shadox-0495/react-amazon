import React, { useRef } from "react";
import { Carousel as Gallery } from "react-responsive-carousel";
import Carousel from "react-multi-carousel";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import ProductCard from "../assets/components/productCard";

export default function Home() {
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
						<img src="/assets/img/products/grid1-1.jpg" alt="" data-text="Labore velit eu labore est ullamco do reprehenderit enim eu aute ad culpa." />
						<img src="/assets/img/products/grid1-2.jpg" alt="" data-text="Labore velit eu labore est ullamco do reprehenderit enim eu aute ad culpa." />
						<img src="/assets/img/products/grid1-3.jpg" alt="" data-text="Labore velit eu labore est ullamco do reprehenderit enim eu aute ad culpa." />
						<img src="/assets/img/products/grid1-4.jpg" alt="" data-text="Labore velit eu labore est ullamco do reprehenderit enim eu aute ad culpa." />
					</ProductCard>
					<ProductCard title="Get fit at home">
						<img src="/assets/img/products/card1.jpg" alt="" />
					</ProductCard>
					<ProductCard title="Dresses">
						<img src="/assets/img/products/card2.jpg" alt="" />
					</ProductCard>

					<div></div>

					<ProductCard title="Shop By Category">
						<img src="/assets/img/products/grid2-1.jpg" alt="" data-text="Labore velit eu labore est ullamco do reprehenderit enim eu aute ad culpa." />
						<img src="/assets/img/products/grid2-2.jpg" alt="" data-text="Labore velit eu labore est ullamco do reprehenderit enim eu aute ad culpa." />
						<img src="/assets/img/products/grid2-3.jpg" alt="" data-text="Labore velit eu labore est ullamco do reprehenderit enim eu aute ad culpa." />
						<img src="/assets/img/products/grid2-4.jpg" alt="" data-text="Labore velit eu labore est ullamco do reprehenderit enim eu aute ad culpa." />
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
							<img src="/assets/img/products/slideShow1-1.jpg" alt="" />
							<img src="/assets/img/products/slideShow1-2.jpg" alt="" />
							<img src="/assets/img/products/slideShow1-3.jpg" alt="" />
							<img src="/assets/img/products/slideShow1-4.jpg" alt="" />
							<img src="/assets/img/products/slideShow1-5.jpg" alt="" />
							<img src="/assets/img/products/slideShow1-6.jpg" alt="" />
							<img src="/assets/img/products/slideShow1-7.jpg" alt="" />
							<img src="/assets/img/products/slideShow1-8.jpg" alt="" />
							<img src="/assets/img/products/slideShow1-9.jpg" alt="" />
							<img src="/assets/img/products/slideShow1-10.jpg" alt="" />
							<img src="/assets/img/products/slideShow1-11.jpg" alt="" />
							<img src="/assets/img/products/slideShow1-12.jpg" alt="" />
							<img src="/assets/img/products/slideShow1-13.jpg" alt="" />
							<img src="/assets/img/products/slideShow1-14.jpg" alt="" />
							<img src="/assets/img/products/slideShow1-15.jpg" alt="" />
							<img src="/assets/img/products/slideShow1-16.jpg" alt="" />
							<img src="/assets/img/products/slideShow1-17.jpg" alt="" />
							<img src="/assets/img/products/slideShow1-18.jpg" alt="" />
							<img src="/assets/img/products/slideShow1-19.jpg" alt="" />
							<img src="/assets/img/products/slideShow1-20.jpg" alt="" />
							<img src="/assets/img/products/slideShow1-21.jpg" alt="" />
							<img src="/assets/img/products/slideShow1-22.jpg" alt="" />
							<img src="/assets/img/products/slideShow1-23.jpg" alt="" />
							<img src="/assets/img/products/slideShow1-24.jpg" alt="" />
							<img src="/assets/img/products/slideShow1-25.jpg" alt="" />
							<img src="/assets/img/products/slideShow1-26.jpg" alt="" />
							<img src="/assets/img/products/slideShow1-27.jpg" alt="" />
							<img src="/assets/img/products/slideShow1-28.jpg" alt="" />
							<img src="/assets/img/products/slideShow1-29.jpg" alt="" />
							<img src="/assets/img/products/slideShow1-30.jpg" alt="" />
						</Carousel>
					</div>
					<div className="contentCategory">
						<div className="contentCategory__title">Popular products in Beauty internationally</div>
						<Carousel responsive={responsive}>
							<img src="/assets/img/products/slideShow2-1.jpg" alt="" />
							<img src="/assets/img/products/slideShow2-2.jpg" alt="" />
							<img src="/assets/img/products/slideShow2-3.jpg" alt="" />
							<img src="/assets/img/products/slideShow2-4.jpg" alt="" />
							<img src="/assets/img/products/slideShow2-5.jpg" alt="" />
							<img src="/assets/img/products/slideShow2-6.jpg" alt="" />
							<img src="/assets/img/products/slideShow2-7.jpg" alt="" />
							<img src="/assets/img/products/slideShow2-8.jpg" alt="" />
							<img src="/assets/img/products/slideShow2-9.jpg" alt="" />
							<img src="/assets/img/products/slideShow2-10.jpg" alt="" />
							<img src="/assets/img/products/slideShow2-11.jpg" alt="" />
							<img src="/assets/img/products/slideShow2-12.jpg" alt="" />
							<img src="/assets/img/products/slideShow2-13.jpg" alt="" />
							<img src="/assets/img/products/slideShow2-14.jpg" alt="" />
							<img src="/assets/img/products/slideShow2-15.jpg" alt="" />
							<img src="/assets/img/products/slideShow2-16.jpg" alt="" />
							<img src="/assets/img/products/slideShow2-17.jpg" alt="" />
							<img src="/assets/img/products/slideShow2-18.jpg" alt="" />
							<img src="/assets/img/products/slideShow2-19.jpg" alt="" />
							<img src="/assets/img/products/slideShow2-20.jpg" alt="" />
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
							<img src="/assets/img/products/slideShow3-1.jpg" alt="" />
							<img src="/assets/img/products/slideShow3-2.jpg" alt="" />
							<img src="/assets/img/products/slideShow3-3.jpg" alt="" />
							<img src="/assets/img/products/slideShow3-4.jpg" alt="" />
							<img src="/assets/img/products/slideShow3-5.jpg" alt="" />
							<img src="/assets/img/products/slideShow3-6.jpg" alt="" />
							<img src="/assets/img/products/slideShow3-7.jpg" alt="" />
							<img src="/assets/img/products/slideShow3-8.jpg" alt="" />
							<img src="/assets/img/products/slideShow3-9.jpg" alt="" />
							<img src="/assets/img/products/slideShow3-10.jpg" alt="" />
							<img src="/assets/img/products/slideShow3-11.jpg" alt="" />
							<img src="/assets/img/products/slideShow3-12.jpg" alt="" />
							<img src="/assets/img/products/slideShow3-13.jpg" alt="" />
							<img src="/assets/img/products/slideShow3-14.jpg" alt="" />
							<img src="/assets/img/products/slideShow3-15.jpg" alt="" />
							<img src="/assets/img/products/slideShow3-16.jpg" alt="" />
							<img src="/assets/img/products/slideShow3-17.jpg" alt="" />
							<img src="/assets/img/products/slideShow3-18.jpg" alt="" />
							<img src="/assets/img/products/slideShow3-19.jpg" alt="" />
							<img src="/assets/img/products/slideShow3-20.jpg" alt="" />
						</Carousel>
					</div>
					<div className="contentCategory">
						<div className="contentCategory__title">International top sellers</div>
						<Carousel responsive={responsive}>
							<img src="/assets/img/products/slideShow4-1.jpg" alt="" />
							<img src="/assets/img/products/slideShow4-2.jpg" alt="" />
							<img src="/assets/img/products/slideShow4-3.jpg" alt="" />
							<img src="/assets/img/products/slideShow4-4.jpg" alt="" />
							<img src="/assets/img/products/slideShow4-5.jpg" alt="" />
							<img src="/assets/img/products/slideShow4-6.jpg" alt="" />
							<img src="/assets/img/products/slideShow4-7.jpg" alt="" />
							<img src="/assets/img/products/slideShow4-8.jpg" alt="" />
							<img src="/assets/img/products/slideShow4-9.jpg" alt="" />
							<img src="/assets/img/products/slideShow4-10.jpg" alt="" />
							<img src="/assets/img/products/slideShow4-11.jpg" alt="" />
							<img src="/assets/img/products/slideShow4-12.jpg" alt="" />
							<img src="/assets/img/products/slideShow4-13.jpg" alt="" />
							<img src="/assets/img/products/slideShow4-14.jpg" alt="" />
							<img src="/assets/img/products/slideShow4-15.jpg" alt="" />
							<img src="/assets/img/products/slideShow4-16.jpg" alt="" />
							<img src="/assets/img/products/slideShow4-17.jpg" alt="" />
							<img src="/assets/img/products/slideShow4-18.jpg" alt="" />
							<img src="/assets/img/products/slideShow4-19.jpg" alt="" />
							<img src="/assets/img/products/slideShow4-20.jpg" alt="" />
							<img src="/assets/img/products/slideShow4-21.jpg" alt="" />
							<img src="/assets/img/products/slideShow4-22.jpg" alt="" />
							<img src="/assets/img/products/slideShow4-23.jpg" alt="" />
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
							<img src="/assets/img/products/grid3-1.jpg" alt="" data-text="Labore velit eu labore est ullamco do reprehenderit enim eu aute ad culpa." />
							<img src="/assets/img/products/grid3-2.jpg" alt="" data-text="Labore velit eu labore est ullamco do reprehenderit enim eu aute ad culpa." />
							<img src="/assets/img/products/grid3-3.jpg" alt="" data-text="Labore velit eu labore est ullamco do reprehenderit enim eu aute ad culpa." />
							<img src="/assets/img/products/grid3-4.jpg" alt="" data-text="Labore velit eu labore est ullamco do reprehenderit enim eu aute ad culpa." />
						</ProductCard>
						<ProductCard title="Shop Pet supplies" label="Shop Now">
							<img src="/assets/img/products/card12.jpg" alt="" />
						</ProductCard>
					</div>
					<div className="contentCategory">
						<div className="contentCategory__title">Popular products in Wireless internationally</div>
						<Carousel responsive={responsive}>
							<img src="/assets/img/products/slideShow5-1.jpg" alt="" />
							<img src="/assets/img/products/slideShow5-2.jpg" alt="" />
							<img src="/assets/img/products/slideShow5-3.jpg" alt="" />
							<img src="/assets/img/products/slideShow5-4.jpg" alt="" />
							<img src="/assets/img/products/slideShow5-5.jpg" alt="" />
							<img src="/assets/img/products/slideShow5-6.jpg" alt="" />
							<img src="/assets/img/products/slideShow5-7.jpg" alt="" />
							<img src="/assets/img/products/slideShow5-8.jpg" alt="" />
							<img src="/assets/img/products/slideShow5-9.jpg" alt="" />
							<img src="/assets/img/products/slideShow5-10.jpg" alt="" />
							<img src="/assets/img/products/slideShow5-11.jpg" alt="" />
							<img src="/assets/img/products/slideShow5-12.jpg" alt="" />
							<img src="/assets/img/products/slideShow5-13.jpg" alt="" />
							<img src="/assets/img/products/slideShow5-14.jpg" alt="" />
							<img src="/assets/img/products/slideShow5-15.jpg" alt="" />
							<img src="/assets/img/products/slideShow5-16.jpg" alt="" />
							<img src="/assets/img/products/slideShow5-17.jpg" alt="" />
						</Carousel>
					</div>
					<div className="contentCategory">
						<div className="contentCategory__title">Popular products in PC internationally</div>
						<Carousel responsive={responsive}>
							<img src="/assets/img/products/slideShow6-1.jpg" alt="" />
							<img src="/assets/img/products/slideShow6-2.jpg" alt="" />
							<img src="/assets/img/products/slideShow6-3.jpg" alt="" />
							<img src="/assets/img/products/slideShow6-4.jpg" alt="" />
							<img src="/assets/img/products/slideShow6-5.jpg" alt="" />
							<img src="/assets/img/products/slideShow6-6.jpg" alt="" />
							<img src="/assets/img/products/slideShow6-7.jpg" alt="" />
							<img src="/assets/img/products/slideShow6-8.jpg" alt="" />
							<img src="/assets/img/products/slideShow6-9.jpg" alt="" />
							<img src="/assets/img/products/slideShow6-10.jpg" alt="" />
							<img src="/assets/img/products/slideShow6-11.jpg" alt="" />
							<img src="/assets/img/products/slideShow6-12.jpg" alt="" />
							<img src="/assets/img/products/slideShow6-13.jpg" alt="" />
							<img src="/assets/img/products/slideShow6-14.jpg" alt="" />
							<img src="/assets/img/products/slideShow6-15.jpg" alt="" />
							<img src="/assets/img/products/slideShow6-16.jpg" alt="" />
							<img src="/assets/img/products/slideShow6-17.jpg" alt="" />
							<img src="/assets/img/products/slideShow6-18.jpg" alt="" />
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
