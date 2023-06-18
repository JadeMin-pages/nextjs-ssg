'use client';

import { useState } from 'react';



export default async (): Promise<JSX.Element> => {
	const [data, setData] = useState('');
	const requestData = async (): Promise<any> => {
		const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
		return await response.text();
	};

	const handleClick = async (): Promise<void> => {
		setData(await requestData());
	};


	return (
		<>
			<button onClick={handleClick}>Click me!</button>
			<p>{data}</p>
		</>
	);
};