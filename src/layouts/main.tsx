import QrCode from "@/components/qr-code";

export default function Main() {
	const title = "Improve your front-end skills by building projects";
	const body =
		"Scan the QR code to visit Frontend Mentor and take Your coding skills to the next level";
	return (
		<main className=' '>
			<QrCode title={title} body={body} img='' />
		</main>
	);
}
