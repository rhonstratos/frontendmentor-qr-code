import { Plus_Jakarta_Sans } from 'next/font/google';
import Main from '../layouts/main';
import Head from 'next/head';

const plusJakartaSans = Plus_Jakarta_Sans({
	subsets: ['latin'],
	variable: '--font-plus-jakarta-sans',
});

export default function Home() {
	return (
		<div
			className={
				'bg-[#d5e1ef] w-full h-screen grid place-content-center font-sans ' +
				plusJakartaSans.variable
			}>
			<Head>
				<title>QR code component - rhonstratos</title>
			</Head>
			<Main />
		</div>
	);
}
