import { Card, CardHeader, CardBody, Button } from 'reactstrap';
import React, { useState } from 'react';

const Test1 = () => {
	// TASK
	// 1. Click each fruit button will add 1 for its color in summary result
	// 2. Display the summary in the <div> below. Design it the way how it should look like.
	// Bonus: Try to only use one handleCount function and one state for all buttons

	const [result, setResult] = useState({ red: 0, green: 0, orange: 0 });

	const handleCount = (event) => {
		setResult((prevResult) => ({
			...prevResult,
			[event.target.name]: prevResult[event.target.name] + 1,
		}));
	};

	return (
		<Card className="mb-4">
			<CardHeader>Test 1 - Color Count</CardHeader>
			<CardBody className="m-3">
				<span>
					<Button name="red" onClick={handleCount}>
						🍎
					</Button>
					<Button className="m-4" name="green" onClick={handleCount}>
						🍏
					</Button>
					<Button name="orange" onClick={handleCount}>
						🍊
					</Button>
				</span>

				<h3 className="mt-4">Result:</h3>
				<div>{`🍎: ${result.red} 🍏: ${result.green} 🍊: ${result.orange}`}</div>
			</CardBody>
		</Card>
	);
};

export default Test1;
