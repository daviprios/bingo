import { z } from 'zod'

export const BingoGenerator = z
	.object({
		columns: z.number().min(1),
		rows: z.number().min(1),
		title: z.string(),
		options: z.string().array()
	})
	.refine(({ options, columns, rows }) => options.length >= columns * rows, {
		message: 'Não pode ter menos opções que espaços de bingo'
	})
export type BingoGeneratorSchema = z.input<typeof BingoGenerator>
export type BingoGeneratorData = z.infer<typeof BingoGenerator>
