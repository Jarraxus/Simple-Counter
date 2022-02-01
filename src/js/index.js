//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import { Clock } from "./component/Clock.jsx";

//render your react application

let seconds = 0;
setInterval(() => {
	seconds++;
	let six = Math.floor(seconds / 100000);
	let five = Math.floor(seconds / 10000);
	let four = Math.floor(seconds / 1000);
	let three = Math.floor(seconds / 100);
	let two = Math.floor(seconds / 10);
	let one = Math.floor(seconds / 1);
	ReactDOM.render(
		<div className="container">
			<Clock
				secondHour={six % 10}
				firstHour={five % 10}
				secondMinute={four % 10}
				firstMinute={three % 10}
				secondSecond={two % 10}
				firstSecond={one % 10}
			/>
		</div>,
		document.querySelector("#app")
	);
}, 1000);
