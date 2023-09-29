//Internal App
import { RootLayout } from '@/interfaces';
import Script from 'next/script';
export default function RootLayout({ children }: RootLayout) {
	return (
		<html lang="es">
			<Script src="/public/js/connection.js" />
			<body>{children}</body>
		</html>
	);
}
