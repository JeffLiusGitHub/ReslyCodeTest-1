import { Card, CardHeader, CardBody, Button, Table } from 'reactstrap';
import axios from 'axios';
import { UserTableCell } from '../Component/UserTableCell';

import React, { useState } from 'react';

const Test3 = () => {
	const [data, setData] = useState([]);
	const [error, setError] = useState(null);
	const [small, setSmall] = useState(false);
	// TASK
	// 1. Click the button and fetch a random user from `https://jsonplaceholder.typicode.com/users` using async/await
	// 2. Display the user information in the <div> using your UI design skill, try to utilize the boostrap and reactstrap library and be as creative as you want here.

	const BASE_URL = 'https://jsonplaceholder.typicode.com/users';
	const fetchData = async () => {
		try {
			const results = await axios.get(BASE_URL);
			setData(results.data);
		} catch (error) {
			setError(error.message);
		}
	};
	const tableHeader = (
		<thead>
			<tr>
				<th>#</th>
				<th>🪪 name</th>
				<th>📇 userName</th>
				<th>📧 email</th>
				<th>☎️ phone</th>
				<th>🧑‍💻 website</th>
				<th>📬 address</th>
				<th>zipcode</th>
				<th>🏢 company</th>
				<th>🙊 slogan</th>
			</tr>
		</thead>
	);

	return (
		<>
			<Card className="mb-4">
				<CardHeader>Test 3 - User information</CardHeader>
				<CardBody className="m-3">
					<div>
						<Button onClick={fetchData}>Fetch User</Button>
					</div>
					<h3 className="mt-4">Result:</h3>
					<div>
						{error && error}
						{data.length > 0 && (
							<>
								<Table responsive hover striped size={small ? 'sm' : ''}>
									{tableHeader}
									<tbody>
										{data?.map((user) => (
											<UserTableCell key={user.id} props={user} />
										))}
									</tbody>
								</Table>

								<Button onClick={() => setSmall((prevSmall) => !prevSmall)}>
									{!small ? 'Dense Mode' : 'Light Mode'}
								</Button>
							</>
						)}
					</div>
				</CardBody>
			</Card>
		</>
	);
};

export default Test3;
