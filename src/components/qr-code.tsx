import qrcode from "../../images/image-qr-code.png";
export default function QrCode(props: any) {
	return (
		<div
			className='
      bg-white p-3 rounded-xl shadow-sm w-[18rem]
      transition-all duration-200 hover:scale-105'>
			<img
				src={props.image ?? qrcode.src}
				alt='qr-code'
				className='w-max h-full rounded-lg mx-auto'
			/>
			<div className='text-center p-4 grid gap-4'>
				<p className='text-[#11192f] font-bold text-lg leading-tight'>
					{props.title}
				</p>
				<p className='text-xs text-gray-500'>{props.body}</p>
			</div>
		</div>
	);
}
