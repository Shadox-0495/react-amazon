import React, { createContext, useContext, useReducer, useEffect, useState } from "react";
import dbProducts from "../db/products.json";
import { auth, db, loginProviders } from "./fireBase";

interface data {
	products: Array<any>;
	cart: Array<any>;
	spec: Array<string>;
	description: Array<string>;
}

const initialState: data = {
	products: dbProducts,
	spec: [
		`<table>
			<tbody>
				<tr>
					<th><span>Lorem ipsum</span></th>
					<td>Lorem ipsum dolor sit amet, consectetur</td>
				</tr>
				<tr>
					<th><span>Lorem ipsum dolor sit amet, consectetur</span></th>
					<td>Lorem ipsum dolor</td>
				</tr>
				<tr>
					<th><span>Lorem ipsum dolor sit amet</span></th>
					<td>Lorem ipsum dolor sit amet, consectetur adipiscing</td>
				</tr>
				<tr>
					<th><span>Lorem ipsum dolor sit amet, consectetur adipiscing</span></th>
					<td>Lorem ipsum dolor sit amet, consectetur</td>
				</tr>
				<tr>
					<th><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec</span></th>
					<td>Lorem ipsum dolor sit amet</td>
				</tr>
				<tr>
					<th><span>Lorem ipsum dolor sit amet</span></th>
					<td>Lorem ipsum</td>
				</tr>
				<tr>
					<th><span>Lorem ipsum</span> </th>
					<td>Lorem ipsum dolor</td>
				</tr>
			</tbody>
		</table>`,
		`<table>
			<tbody>
				<tr>
					<th><span>Lorem ipsum dolor sit amet, consectetur adipiscing</span></th>
					<td>Lorem ipsum dolor sit amet, consectetur</td>
				</tr>
				<tr>
					<th><span>Lorem ipsum dolor sit amet, consectetur</span></th>
					<td>Lorem ipsum dolor</td>
				</tr>
				<tr>
					<th><span>Lorem ipsum dolor sit amet</span></th>
					<td>Lorem ipsum dolor sit amet, consectetur adipiscing</td>
				</tr>
				<tr>
					<th><span>Lorem ipsum dolor sit amet</span></th>
					<td>Lorem ipsum</td>
				</tr>
				<tr>
					<th><span>Lorem ipsum</span></th>
					<td>Lorem ipsum dolor sit amet, consectetur</td>
				</tr>
				<tr>
					<th><span>Lorem ipsum</span> </th>
					<td>Lorem ipsum dolor</td>
				</tr>
			</tbody>
		</table>`,
		`<table>
			<tbody>
				<tr>
					<th><span>Lorem ipsum</span></th>
					<td>Lorem ipsum dolor sit amet, consectetur</td>
				</tr>
				<tr>
					<th><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec</span></th>
					<td>Lorem ipsum dolor sit amet</td>
				</tr>
				<tr>
					<th><span>Lorem ipsum dolor sit amet</span></th>
					<td>Lorem ipsum</td>
				</tr>
				<tr>
					<th><span>Lorem ipsum</span></th>
					<td>Lorem ipsum dolor</td>
				</tr>
			</tbody>
		</table>`,
	],
	description: [
		`<div>Occaecat mollit consequat mollit consequat veniam voluptate et mollit labore sint adipisicing. Qui consectetur ullamco amet eiusmod amet exercitation consectetur culpa qui anim id consectetur qui sint. Fugiat ex veniam culpa velit. Eu fugiat ad est consectetur consectetur proident minim duis elit pariatur velit. Eiusmod sunt dolore do cillum ex irure eiusmod dolore sint ullamco nisi minim. Proident consectetur cillum tempor sunt ullamco. Reprehenderit mollit consectetur id ex officia ipsum.</div>`,
		`<ul>
			<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec</li>
			<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec</li>
			<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec</li>
			<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec</li>
			<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec</li>
			<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec</li>
		</ul>`,
		`<ul>
			<li>🎁 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec</li>
			<li>✨ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec</li>
			<li>🧤 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec</li>
			<li>🎉 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec</li>
			<li>🎊 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec</li>
			<li>🧨 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec</li>
		</ul>`,
	],
	cart: [],
};

if (window.localStorage.getItem("cart") !== "undefined" && window.localStorage.getItem("cart") !== null) initialState.cart = JSON.parse(`${window.localStorage.getItem("cart")}`);

const memoryReducer = (state: any, action: any) => {
	const { type, payload } = action;
	switch (type) {
		case "ADD_PRODUCT":
			return { ...state, cart: payload.cart };
		case "REMOVE_PRODUCT":
			return { ...state, cart: payload.cart };
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

	const signInWithProvider = (provider: any) => {
		console.log(provider);
		return auth.signInWithPopup(provider);
	};

	function getCollection(collectionName: string = "", documentName: string = "") {
		if (collectionName === "") {
			return;
		}
		if (documentName === "") {
			return db.collection(collectionName).get();
		}
		return db.collection(collectionName).doc(documentName).get();
	}

	function signup(email: string, password: string) {
		return auth.createUserWithEmailAndPassword(email, password);
	}

	function logIn(email: string, password: string) {
		return auth.signInWithEmailAndPassword(email, password);
	}

	function logOut() {
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
		currentUser,
		loginProviders,
		addToCart,
		removeFromCart,
		signup,
		logIn,
		signInWithProvider,
		logOut,
	};

	return <MemoryContext.Provider value={values}>{children}</MemoryContext.Provider>;
};

const useMemory: any = () => {
	const context = useContext(MemoryContext);
	return context;
};

export default useMemory;
