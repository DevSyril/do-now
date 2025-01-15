import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const user = await prisma.task.create({
    data: {
      title: 'Mardi Matin',
      description: 'Une petite description de la tâche',
      dueDate: new Date(),
      isCompleted: false,
      userId: 1
    },
  })

  const users = await prisma.user.findMany()
  
  console.log(users)
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