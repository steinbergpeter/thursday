import { z } from 'zod'

export const newTaskSchema = z.object({
  title: z.string(),
})

export type newTaskType = z.infer<typeof newTaskSchema>
