import { NextResponse } from 'next/server'
 
export const GET = async () => {
	const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
	const data = await response.json();

	return NextResponse.json({data});
}