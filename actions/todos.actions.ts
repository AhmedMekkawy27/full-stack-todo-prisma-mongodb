"use server"

import { TodoFormValues } from "@/components/TodoForm"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const getTodosAction = async () => {
        return await prisma.todo.findMany()
}

export const createTodosAction = async ({title, body, completed}:TodoFormValues) => {
        await prisma.todo.create({
                data:{
                        title,
                        body,
                        completed
                }
        })
}
const updateTodosAction = () => {}
const deleteTodosAction = () => {}