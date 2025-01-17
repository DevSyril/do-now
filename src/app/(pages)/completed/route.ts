import { auth, currentUser } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

export async function GET(req: Request, res: Response) {

    const { userId } = await auth()

    if (userId) {
        console.log(userId)
    }

    const user = await currentUser()

    console.log(user)

    return  NextResponse.json(user)

    // res.status(200).json({ message: 'Hello, Next.js!' })
}