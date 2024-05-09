'use server'

import prisma from '@/lib/db'
import { newTaskSchema } from '@/lib/validators'
import { revalidatePath } from 'next/cache'

async function addTask(data: FormData) {
    try {
        const rawData = Object.fromEntries(data)
        const { title } = newTaskSchema.parse(rawData)
        const response = await prisma.task.create({
            data: {
            title,
            },
        })
        console.log({ response})
    } catch (error) {
        console.log((error as Error).message)
    } finally {
        revalidatePath('/')
    }
}

export { addTask }
