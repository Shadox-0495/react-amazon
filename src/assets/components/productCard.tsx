import React, { Children, cloneElement } from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ className, title, label, children }: any) {
	const arrayChildren = Children.toArray(children)!;
	return (
		<>
			<div className={`productCard ${className}`}>
				<div className="productCard__header">{title}</div>
				<div className="productCard__body" data-type={arrayChildren.length > 1 ? "grid" : "simple"}>
					{Children.map(arrayChildren, (child: any, index) => {
						const isLast = index === arrayChildren.length - 1;
						if (!isLast && !child.props.src) {
							throw new Error(
								`SliderItem child no. ${index + 1}
                            should be passed a 'src' prop`
							);
						}
						return (
							<>
								<div className="productCard__container">
									<Link to={child.props["data-link"]}>
										<div className="productCard__image">{cloneElement(child)}</div>
									</Link>
									{!child.props["data-text"] || child.props["data-text"] == "" ? "" : <div className="productCard__text">{child.props["data-text"]}</div>}
								</div>
							</>
						);
					})}
				</div>
				<div className="productCard__footer">{label}</div>
			</div>
		</>
	);
}
