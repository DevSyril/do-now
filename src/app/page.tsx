import TasksList from "@/components/TasksList";
import Image from "next/image";
import { auth, currentUser } from '@clerk/nextjs/server'



export default async function Home() {  

  const { userId } = await auth()

  if (userId) {
    console.log(userId)
  }

  const user = await currentUser()

  return (
    <div className="">
      <h1>Nous y voilà</h1>
    </div>
  );
}
