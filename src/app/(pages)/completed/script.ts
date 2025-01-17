import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function getcompleted() {

  const commpletedTasks = await prisma.task.findMany()

  return commpletedTasks
}

getcompleted()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })