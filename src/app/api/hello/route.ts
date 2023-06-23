import { NextResponse } from 'next/server';



export const runtime = 'edge';

export const GET = async () => {
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/todos/1`
	);


	return new Response(await response.json(), {
		headers: {
			'content-type': 'application/json',
		},
	});
};