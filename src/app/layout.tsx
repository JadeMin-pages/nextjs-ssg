export const metadata = {
	title: "Title placeholder",
	description: "Description placeholder",
} as const;

type Args = {children: React.ReactNode};
export default function RootLayout({children}: Args): React.ReactElement {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
};