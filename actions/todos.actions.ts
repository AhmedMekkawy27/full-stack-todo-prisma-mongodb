"use server"

import { TodoFormValues } from "@/components/AddTodoForm"
import { ITodo } from "@/interfaces"
import { PrismaClient } from "@prisma/client"
import { revalidatePath } from "next/cache"

const prisma = new PrismaClient()

export const getTodosAction = async () => {
        return await prisma.todo.findMany({
                orderBy:{
                        createdAt: "desc",
                }
        })

}

export const createTodosAction = async ({title, body, completed, user_id}:ITodo) => {
        await prisma.todo.create({
                data:{
                        title,
                        body,
                        completed,
                        user_id
                }
        })
        revalidatePath('/')
}
export const deleteTodosAction = async ({id}: {id: string}) => {
        await prisma.todo.delete({
                where: {
                        id
                }
        })
        revalidatePath('/')
}
export const updateTodosAction = async ({id, title, body, completed}:ITodo) => {
        await prisma.todo.update({
                where:{
                        id
                },
                data:{
                        title,
                        body,
                        completed
                }
        })
        revalidatePath('/')
}