import React from 'react';

export const UserTableCell = ({ props }) => {
	const getFullAddress = (props) => {
		const { street, suite, city } = props?.address;
		return `${street} ${suite} ${city}`;
	};
	return (
		<>
			<tr>
				<th scope="row">{props?.id}</th>
				<td>{props?.name}</td>
				<td>{props?.username}</td>
				<td>
					<a href={`mailto:${props?.email}`}>{props?.email}</a>
				</td>
				<td>
					<a href={`tel:${props?.phone}`}>{props?.phone}</a>
				</td>
				<td>
					<a href={`https://www.${props?.website}`}>{props?.website}</a>
				</td>
				<td>{getFullAddress(props)}</td>
				<td>{props?.address.zipcode}</td>
				<td>{props?.company?.name}</td>
				<td>{props?.company?.catchPhrase}</td>
			</tr>
		</>
	);
};
