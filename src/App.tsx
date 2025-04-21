import { useState } from 'react'

function shuffle(arr: string[]) {
	const copy = []
	let n = arr.length
	let i

	while (n) {
		i = Math.floor(Math.random() * arr.length)

		if (i in arr) {
			copy.push(arr[i])
			delete arr[i]
			n--
		}
	}

	return copy
}

export default function App() {
	const [textarea, setTextarea] = useState('')
	const [randomSelection, setRandomSelection] = useState<string[]>([])

	function randomize() {
		setRandomSelection(shuffle(textarea.split('\n')))
	}

	return (
		<main>
			<section className='flex gap-4'>
				<div className='h-[1280px] w-[720px] bg-[url(/imgs/full-image.jpg)] relative'>
					<div className='top-[202px] left-[63px] h-[181px] w-[181px] bg-white text-[#A49E86] absolute flex justify-center items-center text-3xl text-center'>
						{randomSelection[0] ?? '-'}
					</div>
					<div className='top-[407px] left-[63px] h-[181px] w-[181px] bg-white text-[#A49E86] absolute flex justify-center items-center text-3xl text-center'>
						{randomSelection[1] ?? '-'}
					</div>
					<div className='top-[606px] left-[63px] h-[181px] w-[181px] bg-white text-[#A49E86] absolute flex justify-center items-center text-3xl text-center'>
						{randomSelection[2] ?? '-'}
					</div>
					<div className='top-[811px] left-[63px] h-[181px] w-[181px] bg-white text-[#A49E86] absolute flex justify-center items-center text-3xl text-center'>
						{randomSelection[3] ?? '-'}
					</div>
					<div className='top-[1027px] left-[63px] h-[181px] w-[181px] bg-white text-[#A49E86] absolute flex justify-center items-center text-3xl text-center'>
						{randomSelection[4] ?? '-'}
					</div>

					<div className='top-[208px] left-[265px] h-[181px] w-[181px] bg-white text-[#A49E86] absolute flex justify-center items-center text-3xl text-center'>
						{randomSelection[5] ?? '-'}
					</div>
					<div className='top-[407px] left-[265px] h-[181px] w-[181px] bg-white text-[#A49E86] absolute flex justify-center items-center text-3xl text-center'>
						{randomSelection[6] ?? '-'}
					</div>
					<div className='top-[606px] left-[265px] h-[181px] w-[181px] bg-white text-[#A49E86] absolute flex justify-center items-center text-3xl text-center'>
						{randomSelection[7] ?? '-'}
					</div>
					<div className='top-[811px] left-[265px] h-[181px] w-[181px] bg-white text-[#A49E86] absolute flex justify-center items-center text-3xl text-center'>
						{randomSelection[8] ?? '-'}
					</div>
					<div className='top-[1027px] left-[261px] h-[181px] w-[181px] bg-white text-[#A49E86] absolute flex justify-center items-center text-3xl text-center'>
						{randomSelection[9] ?? '-'}
					</div>

					<div className='top-[208px] left-[462px] h-[181px] w-[181px] bg-white text-[#A49E86] absolute flex justify-center items-center text-3xl text-center'>
						{randomSelection[10] ?? '-'}
					</div>
					<div className='top-[407px] left-[467px] h-[181px] w-[181px] bg-white text-[#A49E86] absolute flex justify-center items-center text-3xl text-center'>
						{randomSelection[11] ?? '-'}
					</div>
					<div className='top-[606px] left-[467px] h-[181px] w-[181px] bg-white text-[#A49E86] absolute flex justify-center items-center text-3xl text-center'>
						{randomSelection[12] ?? '-'}
					</div>
					<div className='top-[811px] left-[467px] h-[181px] w-[181px] bg-white text-[#A49E86] absolute flex justify-center items-center text-3xl text-center'>
						{randomSelection[13] ?? '-'}
					</div>
					<div className='top-[1027px] left-[462px] h-[181px] w-[181px] bg-white text-[#A49E86] absolute flex justify-center items-center text-3xl text-center'>
						{randomSelection[14] ?? '-'}
					</div>
				</div>
				<div className='flex flex-col gap-4 m-2'>
					<button
						className='border-2 border-purple-950 cursor-pointer'
						onClick={() => randomize()}
					>
						Aleatorizar
					</button>
					<textarea
						className='border-2 border-purple-950 h-80 w-80'
						value={textarea}
						onChange={(e) => setTextarea(e.currentTarget.value)}
					/>
				</div>
			</section>
		</main>
	)
}
