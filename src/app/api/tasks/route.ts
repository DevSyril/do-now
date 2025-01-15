import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

async function main() {
    const tasks = await prisma.task.findMany({
        where: {
            isCompleted: false,
            user: {
                id: 1, 
            },
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

