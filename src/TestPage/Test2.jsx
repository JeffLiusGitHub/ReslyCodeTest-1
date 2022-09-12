import {
	Card,
	CardHeader,
	CardBody,
	Button,
	Input,
	InputGroup,
	FormFeedback,
} from 'reactstrap';
import formatDate from '../Component/FormatDate';
import React, { useState, useEffect } from 'react';

const Test2 = () => {
	// TASK
	// 1. Click Go and validate if the date entered is in the future, design an error response if the date is invalid.
	// 2. calculate the date difference from today and display to the end user
	const [date, setDate] = useState();
	const [isValid, setIsValid] = useState(false);
	const [dateDifference, setDateDifference] = useState(0);

	const dateChangeHandler = (event) => {
		setDate(new Date(event.target.value));
		calculateDateDifference(new Date(event.target.value));
	};

	const checkDateValid = () => {
		setIsValid(
			Date.parse(formatDate(date)) < Date.parse(formatDate(new Date()))
		);
	};

	const calculateDateDifference = (currentDate) => {
		const timeDifference = currentDate.getTime() - new Date().getTime();
		const dateDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));
		dateDifference > 0
			? setDateDifference(dateDifference)
			: setDateDifference('invalid ');
	};

	return (
		<Card className="mb-4">
			<CardHeader>Test 2 - Date</CardHeader>
			<CardBody className="m-3">
				<div className="mb-4">
					<InputGroup>
						<Input
							type="date"
							onChange={(e) => dateChangeHandler(e)}
							invalid={isValid}
						/>
						<Button
							onClick={checkDateValid}
							id="PopoverFocus"
							disabled={date === undefined}
						>
							Go
						</Button>
						<FormFeedback>please select a future date</FormFeedback>
					</InputGroup>
				</div>
				<h3 className="mt-4">Result:</h3>
				<p>
					The date entered ({date ? formatDate(date) : 'YYYY-MM-DD'}) is
					<strong> {dateDifference} days from today</strong>
				</p>
			</CardBody>
		</Card>
	);
};

export default Test2;
