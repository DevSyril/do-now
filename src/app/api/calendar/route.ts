"use client"

import { PrismaClient } from '@prisma/client'
import { useParams } from 'next/navigation'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

const params = useParams()

async function main() {
    const tasks = await prisma.task.findMany({
        where: {
            isCompleted: false,
            user: {
                id: 1, 
            },
            dueDate: new Date()
        }
    })

    return tasks;
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })


export async function GET() {
    return NextResponse.json(await main());
}

