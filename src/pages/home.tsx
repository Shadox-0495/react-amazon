import React from "react";
import { Carousel } from "react-responsive-carousel";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";

export default function Home() {
	const sliders: Array<string> = ["slider1-lg", "slider2-lg", "slider3-lg", "slider4-lg", "slider5-lg", "slider6-lg"];

	return (
		<div className="pageSection" data-page="home">
			<Carousel
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
			</Carousel>

			<div className="contentCard">asdasd</div>
			<div className="contentGrid"></div>
		</div>
	);
}
