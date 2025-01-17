"use client"

import { DayTasks } from '@/components/DayTasks'
import { TaskCalendar } from '@/components/TaskCalendar'
import React, { useEffect, useState } from 'react'

export default function Calendar() {

    const [tasks, setTasks] = useState([])
      const [isLoading, setIsLoading] = useState(false)
    
      const fetchTask = async () => {
        try {
          const response = await fetch('/api/calendar/')
    
          const data = await response.json()
          setTasks( () => data)
          setIsLoading(() => true)
          
        } catch (error) {
          console.log(error);
        }
      }
    
      useEffect(() => {
        fetchTask()
      }, [])
  
  return (
    <div className='mt-10 w-full justify-center items-center flex'>

      {tasks && <TaskCalendar tasks={tasks}/>}

    </div>
  )
}
