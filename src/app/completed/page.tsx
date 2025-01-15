'use client'

import { TasksCompleted } from '@/components/TasksCompleted'
import React, { useEffect, useState } from 'react'


export default function Completed() {

  const [tasksCompleted, setTasksCompleted] = useState()
  const [isLoading, setIsLoading] = useState(false)

  const fetchTask = async () => {
    try {
      const response = await fetch('/api/completed/')

      const data = await response.json()
      setTasksCompleted( () => data)
      setIsLoading(() => true)
      
      console.log(await data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchTask()
  }, [])


  return (
    <div className='mt-6'>
      {isLoading && <TasksCompleted tasks={tasksCompleted } />}
    </div>
  )
}
