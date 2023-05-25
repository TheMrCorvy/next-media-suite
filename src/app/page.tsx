'use client';

import { useEffect } from 'react'
import { createFFmpeg } from '@ffmpeg/ffmpeg';

export default function Home() {

	const ffmpeg = createFFmpeg({ log: true });

	const loadFfmpeg = async () => {
		await ffmpeg.load();

		console.log(ffmpeg)
	}

	useEffect(() => { loadFfmpeg() }, [])

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<h1>Hello world!</h1>
		</main>
	)
}
