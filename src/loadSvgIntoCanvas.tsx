export async function loadSvgIntoCanvas(
	canvasRef: React.RefObject<HTMLCanvasElement | null>,
	svgId: string
) {
	return await new Promise<unknown>((resolve) => {
		const el = document.querySelector<SVGSVGElement>(`svg#${svgId}`)
		if (!el || !canvasRef.current) return
		const ctx = canvasRef.current.getContext('2d')
		if (!ctx) return

		ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)

		const elAsString = el.outerHTML
		const dataUrl = `data:image/svg+xml;base64,${window.btoa(elAsString)}` //`data:image/svg+xml;utf8,${elAsString}`

		console.debug(dataUrl)

		const img = new Image()
		img.onload = () => resolve(ctx.drawImage(img, 0, 0))
		img.src = dataUrl

		console.debug('load complete')
	})
}
