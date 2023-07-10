import Image from 'next/image';

export default function QrCode({ ...props }) {
	return (
		<div
			className='
      bg-white p-3 rounded-xl shadow-sm w-[18rem]
      transition-all duration-200 hover:scale-105'>
			<Image
				src={props.image ?? '/assets/images/image-qr-code.png'}
				alt='qr-code'
				className='w-max h-full rounded-lg mx-auto'
				width='0'
				height='0'
			/>
			<div className='text-center p-4 grid gap-4'>
				<h1 className='text-[#11192f] font-bold text-lg leading-tight'>
					{props.title}
				</h1>
				<span className='text-xs text-gray-500'>{props.body}</span>
			</div>
		</div>
	);
}
