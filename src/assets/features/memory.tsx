import React, { createContext, useContext, useReducer } from "react";

interface data {
	products: Array<any>;
	cart: Array<any>;
}

const initialState: data = {
	products: [
		{ img: "grid1-1.jpg", text: "Labore velit eu labore est ullamco do reprehenderit enim eu aute ad culpa.", cost: 1, rating: 5 },
		{ img: "grid1-2.jpg", text: "Labore velit eu labore est ullamco do reprehenderit enim eu aute ad culpa.", cost: 2, rating: 5 },
		{ img: "grid1-3.jpg", text: "Labore velit eu labore est ullamco do reprehenderit enim eu aute ad culpa.", cost: 3, rating: 5 },
		{ img: "grid1-4.jpg", text: "Labore velit eu labore est ullamco do reprehenderit enim eu aute ad culpa.", cost: 4, rating: 5 },
		{ img: "grid2-1.jpg", text: "Labore velit eu labore est ullamco do reprehenderit enim eu aute ad culpa.", cost: 1, rating: 5 },
		{ img: "grid2-2.jpg", text: "Labore velit eu labore est ullamco do reprehenderit enim eu aute ad culpa.", cost: 2, rating: 5 },
		{ img: "grid2-3.jpg", text: "Labore velit eu labore est ullamco do reprehenderit enim eu aute ad culpa.", cost: 3, rating: 5 },
		{ img: "grid2-4.jpg", text: "Labore velit eu labore est ullamco do reprehenderit enim eu aute ad culpa.", cost: 4, rating: 5 },
		{ img: "slideShow1-1.jpg", cost: 1, rating: 5 },
		{ img: "slideShow1-2.jpg", cost: 1, rating: 5 },
		{ img: "slideShow1-3.jpg", cost: 1, rating: 5 },
		{ img: "slideShow1-4.jpg", cost: 1, rating: 5 },
		{ img: "slideShow1-5.jpg", cost: 1, rating: 5 },
		{ img: "slideShow1-6.jpg", cost: 1, rating: 5 },
		{ img: "slideShow1-7.jpg", cost: 1, rating: 5 },
		{ img: "slideShow1-8.jpg", cost: 1, rating: 5 },
		{ img: "slideShow1-9.jpg", cost: 1, rating: 5 },
		{ img: "slideShow1-10.jpg", cost: 1, rating: 5 },
		{ img: "slideShow1-11.jpg", cost: 1, rating: 5 },
		{ img: "slideShow1-12.jpg", cost: 1, rating: 5 },
		{ img: "slideShow1-13.jpg", cost: 1, rating: 5 },
		{ img: "slideShow1-14.jpg", cost: 1, rating: 5 },
		{ img: "slideShow1-15.jpg", cost: 1, rating: 5 },
		{ img: "slideShow1-16.jpg", cost: 1, rating: 5 },
		{ img: "slideShow1-17.jpg", cost: 1, rating: 5 },
		{ img: "slideShow1-18.jpg", cost: 1, rating: 5 },
		{ img: "slideShow1-19.jpg", cost: 1, rating: 5 },
		{ img: "slideShow1-20.jpg", cost: 1, rating: 5 },
		{ img: "slideShow1-21.jpg", cost: 1, rating: 5 },
		{ img: "slideShow1-22.jpg", cost: 1, rating: 5 },
		{ img: "slideShow1-23.jpg", cost: 1, rating: 5 },
		{ img: "slideShow1-24.jpg", cost: 1, rating: 5 },
		{ img: "slideShow1-25.jpg", cost: 1, rating: 5 },
		{ img: "slideShow1-26.jpg", cost: 1, rating: 5 },
		{ img: "slideShow1-27.jpg", cost: 1, rating: 5 },
		{ img: "slideShow1-28.jpg", cost: 1, rating: 5 },
		{ img: "slideShow1-29.jpg", cost: 1, rating: 5 },
		{ img: "slideShow1-30.jpg", cost: 1, rating: 5 },
		{ img: "slideShow2-1.jpg", cost: 1, rating: 5 },
		{ img: "slideShow2-2.jpg", cost: 1, rating: 5 },
		{ img: "slideShow2-3.jpg", cost: 1, rating: 5 },
		{ img: "slideShow2-4.jpg", cost: 1, rating: 5 },
		{ img: "slideShow2-5.jpg", cost: 1, rating: 5 },
		{ img: "slideShow2-6.jpg", cost: 1, rating: 5 },
		{ img: "slideShow2-7.jpg", cost: 1, rating: 5 },
		{ img: "slideShow2-8.jpg", cost: 1, rating: 5 },
		{ img: "slideShow2-9.jpg", cost: 1, rating: 5 },
		{ img: "slideShow2-10.jpg", cost: 1, rating: 5 },
		{ img: "slideShow2-11.jpg", cost: 1, rating: 5 },
		{ img: "slideShow2-12.jpg", cost: 1, rating: 5 },
		{ img: "slideShow2-13.jpg", cost: 1, rating: 5 },
		{ img: "slideShow2-14.jpg", cost: 1, rating: 5 },
		{ img: "slideShow2-15.jpg", cost: 1, rating: 5 },
		{ img: "slideShow2-16.jpg", cost: 1, rating: 5 },
		{ img: "slideShow2-17.jpg", cost: 1, rating: 5 },
		{ img: "slideShow2-18.jpg", cost: 1, rating: 5 },
		{ img: "slideShow2-19.jpg", cost: 1, rating: 5 },
		{ img: "slideShow2-20.jpg", cost: 1, rating: 5 },
		{ img: "slideShow3-1.jpg", cost: 1, rating: 5 },
		{ img: "slideShow3-2.jpg", cost: 1, rating: 5 },
		{ img: "slideShow3-3.jpg", cost: 1, rating: 5 },
		{ img: "slideShow3-4.jpg", cost: 1, rating: 5 },
		{ img: "slideShow3-5.jpg", cost: 1, rating: 5 },
		{ img: "slideShow3-6.jpg", cost: 1, rating: 5 },
		{ img: "slideShow3-7.jpg", cost: 1, rating: 5 },
		{ img: "slideShow3-8.jpg", cost: 1, rating: 5 },
		{ img: "slideShow3-9.jpg", cost: 1, rating: 5 },
		{ img: "slideShow3-10.jpg", cost: 1, rating: 5 },
		{ img: "slideShow3-11.jpg", cost: 1, rating: 5 },
		{ img: "slideShow3-12.jpg", cost: 1, rating: 5 },
		{ img: "slideShow3-13.jpg", cost: 1, rating: 5 },
		{ img: "slideShow3-14.jpg", cost: 1, rating: 5 },
		{ img: "slideShow3-15.jpg", cost: 1, rating: 5 },
		{ img: "slideShow3-16.jpg", cost: 1, rating: 5 },
		{ img: "slideShow3-17.jpg", cost: 1, rating: 5 },
		{ img: "slideShow3-18.jpg", cost: 1, rating: 5 },
		{ img: "slideShow3-19.jpg", cost: 1, rating: 5 },
		{ img: "slideShow3-20.jpg", cost: 1, rating: 5 },
		{ img: "slideShow4-1.jpg", cost: 1, rating: 5 },
		{ img: "slideShow4-2.jpg", cost: 1, rating: 5 },
		{ img: "slideShow4-3.jpg", cost: 1, rating: 5 },
		{ img: "slideShow4-4.jpg", cost: 1, rating: 5 },
		{ img: "slideShow4-5.jpg", cost: 1, rating: 5 },
		{ img: "slideShow4-6.jpg", cost: 1, rating: 5 },
		{ img: "slideShow4-7.jpg", cost: 1, rating: 5 },
		{ img: "slideShow4-8.jpg", cost: 1, rating: 5 },
		{ img: "slideShow4-9.jpg", cost: 1, rating: 5 },
		{ img: "slideShow4-10.jpg", cost: 1, rating: 5 },
		{ img: "slideShow4-11.jpg", cost: 1, rating: 5 },
		{ img: "slideShow4-12.jpg", cost: 1, rating: 5 },
		{ img: "slideShow4-13.jpg", cost: 1, rating: 5 },
		{ img: "slideShow4-14.jpg", cost: 1, rating: 5 },
		{ img: "slideShow4-15.jpg", cost: 1, rating: 5 },
		{ img: "slideShow4-16.jpg", cost: 1, rating: 5 },
		{ img: "slideShow4-17.jpg", cost: 1, rating: 5 },
		{ img: "slideShow4-18.jpg", cost: 1, rating: 5 },
		{ img: "slideShow4-19.jpg", cost: 1, rating: 5 },
		{ img: "slideShow4-20.jpg", cost: 1, rating: 5 },
		{ img: "slideShow4-21.jpg", cost: 1, rating: 5 },
		{ img: "slideShow4-22.jpg", cost: 1, rating: 5 },
		{ img: "slideShow4-23.jpg", cost: 1, rating: 5 },
		{ img: "grid3-1.jpg", text: "Labore velit eu labore est ullamco do reprehenderit enim eu aute ad culpa.", cost: 1, rating: 5 },
		{ img: "grid3-2.jpg", text: "Labore velit eu labore est ullamco do reprehenderit enim eu aute ad culpa.", cost: 2, rating: 5 },
		{ img: "grid3-3.jpg", text: "Labore velit eu labore est ullamco do reprehenderit enim eu aute ad culpa.", cost: 3, rating: 5 },
		{ img: "grid3-4.jpg", text: "Labore velit eu labore est ullamco do reprehenderit enim eu aute ad culpa.", cost: 4, rating: 5 },
		{ img: "slideShow5-1.jpg", cost: 1, rating: 5 },
		{ img: "slideShow5-2.jpg", cost: 1, rating: 5 },
		{ img: "slideShow5-3.jpg", cost: 1, rating: 5 },
		{ img: "slideShow5-4.jpg", cost: 1, rating: 5 },
		{ img: "slideShow5-5.jpg", cost: 1, rating: 5 },
		{ img: "slideShow5-6.jpg", cost: 1, rating: 5 },
		{ img: "slideShow5-7.jpg", cost: 1, rating: 5 },
		{ img: "slideShow5-8.jpg", cost: 1, rating: 5 },
		{ img: "slideShow5-9.jpg", cost: 1, rating: 5 },
		{ img: "slideShow5-10.jpg", cost: 1, rating: 5 },
		{ img: "slideShow5-11.jpg", cost: 1, rating: 5 },
		{ img: "slideShow5-12.jpg", cost: 1, rating: 5 },
		{ img: "slideShow5-13.jpg", cost: 1, rating: 5 },
		{ img: "slideShow5-14.jpg", cost: 1, rating: 5 },
		{ img: "slideShow5-15.jpg", cost: 1, rating: 5 },
		{ img: "slideShow5-16.jpg", cost: 1, rating: 5 },
		{ img: "slideShow5-17.jpg", cost: 1, rating: 5 },
		{ img: "slideShow6-1.jpg", cost: 1, rating: 5 },
		{ img: "slideShow6-2.jpg", cost: 1, rating: 5 },
		{ img: "slideShow6-3.jpg", cost: 1, rating: 5 },
		{ img: "slideShow6-4.jpg", cost: 1, rating: 5 },
		{ img: "slideShow6-5.jpg", cost: 1, rating: 5 },
		{ img: "slideShow6-6.jpg", cost: 1, rating: 5 },
		{ img: "slideShow6-7.jpg", cost: 1, rating: 5 },
		{ img: "slideShow6-8.jpg", cost: 1, rating: 5 },
		{ img: "slideShow6-9.jpg", cost: 1, rating: 5 },
		{ img: "slideShow6-10.jpg", cost: 1, rating: 5 },
		{ img: "slideShow6-11.jpg", cost: 1, rating: 5 },
		{ img: "slideShow6-12.jpg", cost: 1, rating: 5 },
		{ img: "slideShow6-13.jpg", cost: 1, rating: 5 },
		{ img: "slideShow6-14.jpg", cost: 1, rating: 5 },
		{ img: "slideShow6-15.jpg", cost: 1, rating: 5 },
		{ img: "slideShow6-16.jpg", cost: 1, rating: 5 },
		{ img: "slideShow6-17.jpg", cost: 1, rating: 5 },
		{ img: "slideShow6-18.jpg", cost: 1, rating: 5 },
	],
	cart: [],
};

if (window.localStorage.getItem("cart") !== "undefined" && window.localStorage.getItem("cart") !== null) initialState.cart = JSON.parse(`${window.localStorage.getItem("cart")}`);

const memoryReducer = (state: any, action: any) => {
	const { type, payload } = action;
	switch (type) {
		case "ADD_PRODUCT":
			console.log(payload);
			return { ...state, objects: payload.product };
		case "REMOVE_PRODUCT":
			console.log(payload);
			return { ...state, objects: payload.product };
		default:
			throw new Error(`No case for type: ${type} in reducer`);
	}
};

const MemoryContext = createContext(initialState);

export const MemoryProvider = ({ children }: any) => {
	const [state, dispatch] = useReducer(memoryReducer, initialState);

	const addToCart = (product: any) => {
		const updateCart = state.products.concat(product);
		window.localStorage.setItem("cart", updateCart);
		dispatch({
			type: "ADD_PRODUCT",
			payload: { cart: updateCart },
		});
	};

	const values = {
		products: state.products,
		cart: state.cart,
		addToCart,
	};

	return <MemoryContext.Provider value={values}>{children}</MemoryContext.Provider>;
};

const useMemory = () => {
	const context = useContext(MemoryContext);
	return context;
};

export default useMemory;
