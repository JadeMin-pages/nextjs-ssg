export const metadata = {
	title: "Title Placeholder",
	description: "Description Placeholder",
} as const;

export default ({children}: {children: React.ReactNode}) => {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
};