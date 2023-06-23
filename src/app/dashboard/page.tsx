import CSRForm from "./components/button.tsx";



export default async () => {
	const randomInt = Math.floor(Math.random() * 2) + 1;
	const data = await (await fetch(`https://jsonplaceholder.typicode.com/todos/${randomInt}`)).json();


	return (
		<main>
			<h1>Hello, World!</h1>
			<CSRForm/>
			<h2>SSR fetched data :</h2>
			<p>{JSON.stringify(data)}</p>
		</main>
	);
};