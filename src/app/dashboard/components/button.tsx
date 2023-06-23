'use client';

import { useState } from 'react';



export default (): React.ReactElement => {
	const [data, setData] = useState('');

	const requestData = async (): Promise<string> => {
		const randomInt = Math.floor(Math.random() * 2) + 1;
		const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${randomInt}`);
		return await response.text();
	};
	const handleClick = async (): Promise<void> => {
		setData(await requestData());
	};


	return (
		<>
			<button onClick={handleClick}>Fetch in Client Side!</button>
			<h2>CSR fetched data :</h2>
			<p>{data}</p>
		</>
	);
};