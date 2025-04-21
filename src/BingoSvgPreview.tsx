import { BingoGeneratorData } from './BingoGeneratorSchema'

export default function BingoSvgPreview({
	data,
	id
}: {
	data: BingoGeneratorData
	id: string
}) {
	console.debug(new Array(data.columns).fill(0))

	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			id={id}
			viewBox='0 0 210 297'
			height={'297px'}
		>
			{new Array(data.columns).fill(0).map(() => {
				console.debug('column')
				return (
					<g>
						{new Array(data.rows).fill(0).map(() => {
							console.debug('row')
							return (
								<g>
									<text
										x='10'
										y='10'
									>
										Destilação fracionada
									</text>
								</g>
							)
						})}
					</g>
				)
			})}
		</svg>
	)
}
