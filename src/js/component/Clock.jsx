import React from "react";
import PropTypes from "prop-types";

export const Clock = (props) => {
	return (
		<div
			className="counter text-center d-flex justify-content-center mt-5 bg-dark p-2"
			display="flex">
			<div className="timerSymbol text-white p-3 bg-info m-1 rounded">
				<i className="far fa-clock"></i>
			</div>
			<div className="X0:00:00 text-white p-3 bg-info m-1 rounded">
				<strong>{props.secondHour}</strong>
			</div>
			<div className="0X:00:00 text-white p-3 bg-info m-1 rounded">
				<strong>{props.firstHour}</strong>
			</div>
			<div className="00:X0:00 text-white p-3 bg-info m-1 rounded">
				<strong>{props.secondMinute}</strong>
			</div>
			<div className="00:0X:00 text-white p-3 bg-info m-1 rounded">
				<strong>{props.firstMinute}</strong>
			</div>
			<div className="00:00:X0 text-white p-3 bg-info m-1 rounded">
				<strong>{props.secondSecond}</strong>
			</div>
			<div className="00:00:0X text-white p-3 bg-info m-1 rounded">
				<strong>{props.firstSecond}</strong>
			</div>
		</div>
	);
};

Clock.propTypes = {
	secondHour: PropTypes.number,
	firstHour: PropTypes.number,
	secondMinute: PropTypes.number,
	firstMinute: PropTypes.number,
	secondSecond: PropTypes.number,
	firstSecond: PropTypes.number,
};
