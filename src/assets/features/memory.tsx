import React, { createContext, useContext, useReducer, useEffect, useState } from "react";
import dbProducts from "../db/products.json";
import dbSpecs from "../db/specs.json";
import dbDescriptions from "../db/description.json";
import { auth, db, loginProviders } from "./fireBase";
import { toast } from "react-toastify";

interface data {
	products: Array<any>;
	cart: Array<any>;
	spec: Array<string>;
	description: Array<string>;
	showLoginDropdown: boolean;
}

const initialState: data = {
	products: dbProducts,
	spec: dbSpecs,
	description: dbDescriptions,
	cart: [],
	showLoginDropdown: false,
};

if (window.localStorage.getItem("cart") !== "undefined" && window.localStorage.getItem("cart") !== null) initialState.cart = JSON.parse(`${window.localStorage.getItem("cart")}`);

const memoryReducer = (state: any, action: any) => {
	const { type, payload } = action;
	switch (type) {
		case "ADD_PRODUCT":
			return { ...state, cart: payload.cart };
		case "REMOVE_PRODUCT":
			return { ...state, cart: payload.cart };
		case "CLEAR_CART":
			return { ...state, cart: payload.cart };
		case "SHOW_LOGIN":
			return { ...state, showLoginDropdown: payload.show };
		default:
			throw new Error(`No case for type: ${type} in reducer`);
	}
};

const MemoryContext = createContext(initialState);

export const MemoryProvider = ({ children }: any) => {
	const [state, dispatch] = useReducer(memoryReducer, initialState);
	const [currentUser, setCurrentUser] = useState();

	const addToCart = (product: any) => {
		let cart = state.cart;
		const index = cart.findIndex((item: any) => item.id == product.id); //find if the product is alredy in the cart, if so get the index
		if (cart.length != 0 && index != -1) {
			cart[index].quantity += 1; //if the product is alredy in the cart update the quantity
		} else {
			//else add the product with a quanity of 1
			product.quantity = 1;
			cart = cart.concat(product);
		}

		window.localStorage.setItem("cart", JSON.stringify(cart));
		dispatch({
			type: "ADD_PRODUCT",
			payload: { cart },
		});
	};

	const removeFromCart = (product: any) => {
		let cart = state.cart;

		const index = cart.findIndex((item: any) => item.id == product.id);

		if (index == -1) return;

		cart.splice(index, 1); // remove index from array

		window.localStorage.setItem("cart", JSON.stringify(cart));

		dispatch({
			type: "REMOVE_PRODUCT",
			payload: { cart },
		});
	};

	const clearCart = () => {
		const cart: any = [];
		window.localStorage.setItem("cart", JSON.stringify(cart));
		dispatch({
			type: "CLEAR_CART",
			payload: { cart },
		});
	};

	const showLogin = (show: boolean) => {
		dispatch({
			type: "SHOW_LOGIN",
			payload: { show },
		});
	};

	const signInWithProvider = (provider: any) => {
		return auth.signInWithPopup(provider);
	};

	function fbGetCollection(collectionName: string = "", documentName: string = "") {
		if (collectionName === "") return;
		if (documentName === "") return db.collection(collectionName).get();
		return db.collection(collectionName).doc(documentName).get();
	}

	function fbSignup(email: string, password: string) {
		return auth.createUserWithEmailAndPassword(email, password);
	}

	function fbLogin(email: string, password: string) {
		return auth.signInWithEmailAndPassword(email, password);
	}

	function fbLogout() {
		return auth.signOut();
	}

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user: any) => setCurrentUser(user));
		return unsubscribe;
	}, []);

	const values = {
		products: state.products,
		cart: state.cart,
		spec: state.spec,
		description: state.description,
		showLoginDropdown: state.showLoginDropdown,
		showLogin,
		currentUser,
		loginProviders,
		addToCart,
		removeFromCart,
		clearCart,
		fbSignup,
		fbLogin,
		signInWithProvider,
		fbLogout,
		db,
		toast,
	};

	return <MemoryContext.Provider value={values}>{children}</MemoryContext.Provider>;
};

const useMemory: any = () => {
	const context = useContext(MemoryContext);
	return context;
};

export default useMemory;
