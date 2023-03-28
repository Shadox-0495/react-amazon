import React, { createContext, useContext, useReducer } from "react";

interface data {
	products: Array<any>;
	cart: Array<any>;
}

const spec = [
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
];

const description = [
	`Occaecat mollit consequat mollit consequat veniam voluptate et mollit labore sint adipisicing. Qui consectetur ullamco amet eiusmod amet exercitation consectetur culpa qui anim id consectetur qui sint. Fugiat ex veniam culpa velit. Eu fugiat ad est consectetur consectetur proident minim duis elit pariatur velit. Eiusmod sunt dolore do cillum ex irure eiusmod dolore sint ullamco nisi minim. Proident consectetur cillum tempor sunt ullamco. Reprehenderit mollit consectetur id ex officia ipsum.`,
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
];

const initialState: data = {
	products: [
		{
			id: 1,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "grid1-1.jpg",
			text: "Labore velit eu labore est ullamco do reprehenderit enim eu aute ad culpa.",
			price: 1,
			rating: 5,
		},
		{
			id: 2,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "grid1-2.jpg",
			text: "Labore velit eu labore est ullamco do reprehenderit enim eu aute ad culpa.",
			price: 2,
			rating: 5,
		},
		{
			id: 3,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "grid1-3.jpg",
			text: "Labore velit eu labore est ullamco do reprehenderit enim eu aute ad culpa.",
			price: 3,
			rating: 5,
		},
		{
			id: 4,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "grid1-4.jpg",
			text: "Labore velit eu labore est ullamco do reprehenderit enim eu aute ad culpa.",
			price: 4,
			rating: 5,
		},
		{
			id: 5,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "grid2-1.jpg",
			text: "Labore velit eu labore est ullamco do reprehenderit enim eu aute ad culpa.",
			price: 1,
			rating: 5,
		},
		{
			id: 6,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "grid2-2.jpg",
			text: "Labore velit eu labore est ullamco do reprehenderit enim eu aute ad culpa.",
			price: 2,
			rating: 5,
		},
		{
			id: 7,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "grid2-3.jpg",
			text: "Labore velit eu labore est ullamco do reprehenderit enim eu aute ad culpa.",
			price: 3,
			rating: 5,
		},
		{
			id: 8,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "grid2-4.jpg",
			text: "Labore velit eu labore est ullamco do reprehenderit enim eu aute ad culpa.",
			price: 4,
			rating: 5,
		},
		{
			id: 9,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow1-1.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 10,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow1-2.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 11,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow1-3.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 12,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow1-4.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 13,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow1-5.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 14,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow1-6.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 15,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow1-7.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 16,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow1-8.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 17,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow1-9.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 18,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow1-10.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 19,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow1-11.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 20,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow1-12.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 21,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow1-13.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 22,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow1-14.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 23,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow1-15.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 24,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow1-16.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 25,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow1-17.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 26,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow1-18.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 27,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow1-19.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 28,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow1-20.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 29,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow1-21.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 30,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow1-22.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 31,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow1-23.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 32,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow1-24.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 33,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow1-25.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 34,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow1-26.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 35,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow1-27.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 36,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow1-28.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 37,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow1-29.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 38,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow1-30.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 39,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow2-1.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 40,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow2-2.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 41,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow2-3.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 42,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow2-4.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 43,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow2-5.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 44,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow2-6.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 45,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow2-7.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 46,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow2-8.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 47,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow2-9.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 48,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow2-10.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 49,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow2-11.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 50,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow2-12.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 51,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow2-13.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 52,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow2-14.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 53,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow2-15.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 54,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow2-16.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 55,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow2-17.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 56,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow2-18.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 57,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow2-19.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 58,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow2-20.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 59,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow3-1.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 60,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow3-2.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 61,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow3-3.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 62,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow3-4.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 63,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow3-5.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 64,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow3-6.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 65,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow3-7.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 66,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow3-8.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 67,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow3-9.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 68,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow3-10.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 69,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow3-11.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 70,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow3-12.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 71,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow3-13.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 72,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow3-14.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 73,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow3-15.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 74,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow3-16.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 75,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow3-17.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 76,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow3-18.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 77,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow3-19.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 78,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow3-20.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 79,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow4-1.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 80,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow4-2.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 81,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow4-3.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 82,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow4-4.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 83,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow4-5.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 84,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow4-6.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 85,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow4-7.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 86,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow4-8.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 87,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow4-9.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 88,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow4-10.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 89,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow4-11.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 90,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow4-12.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 91,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow4-13.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 92,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow4-14.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 93,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow4-15.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 94,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow4-16.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 95,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow4-17.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 96,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow4-18.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 97,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow4-19.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 98,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow4-20.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 99,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow4-21.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 100,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow4-22.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 101,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow4-23.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 102,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "grid3-1.jpg",
			text: "Labore velit eu labore est ullamco do reprehenderit enim eu aute ad culpa.",
			price: 1,
			rating: 5,
		},
		{
			id: 103,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "grid3-2.jpg",
			text: "Labore velit eu labore est ullamco do reprehenderit enim eu aute ad culpa.",
			price: 2,
			rating: 5,
		},
		{
			id: 104,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "grid3-3.jpg",
			text: "Labore velit eu labore est ullamco do reprehenderit enim eu aute ad culpa.",
			price: 3,
			rating: 5,
		},
		{
			id: 105,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "grid3-4.jpg",
			text: "Labore velit eu labore est ullamco do reprehenderit enim eu aute ad culpa.",
			price: 4,
			rating: 5,
		},
		{
			id: 106,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow5-1.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 107,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow5-2.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 108,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow5-3.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 109,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow5-4.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 110,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow5-5.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 111,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow5-6.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 112,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow5-7.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 113,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow5-8.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 114,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow5-9.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 115,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow5-10.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 116,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow5-11.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 117,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow5-12.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 118,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow5-13.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 119,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow5-14.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 120,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow5-15.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 121,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow5-16.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 122,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow5-17.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 123,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow6-1.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 124,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow6-2.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 125,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow6-3.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 126,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow6-4.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 127,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow6-5.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 128,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow6-6.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 129,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow6-7.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 130,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow6-8.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 131,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow6-9.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 132,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow6-10.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 133,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow6-11.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 134,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow6-12.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 135,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow6-13.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 136,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow6-14.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 137,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow6-15.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 138,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow6-16.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 139,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow6-17.jpg",
			price: 1,
			rating: 5,
		},
		{
			id: 140,
			name: "Ut exercitation irure non laboris laborum ex et incididunt.",
			spec: () => spec[Math.floor(Math.random() * spec.length)],
			description: () => description[Math.floor(Math.random() * description.length)],
			img: "slideShow6-18.jpg",
			price: 1,
			rating: 5,
		},
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
