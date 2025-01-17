"use client"

import TasksList from '@/components/TasksList'
import React, { useEffect, useState } from 'react'

export default function Tasks() {

  const [tasks, setTasks] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchTask = async () => {
    try {
      const response = await fetch('/api/tasks/')

      const data = await response.json()
      setTasks(() => data)
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
    <div className='mt-8'>
      {isLoading && <TasksList tasks={tasks} />}
    </div>
  )
}
