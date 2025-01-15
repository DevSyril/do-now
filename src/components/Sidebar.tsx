'use client'

import Link from 'next/link'
import React from 'react'
import { FaTasks, FaDoorClosed } from 'react-icons/fa'
import { SiTicktick, SiCalendly } from 'react-icons/si'
import { FaGauge, FaCalendar } from 'react-icons/fa6'
import { usePathname } from 'next/navigation'



const menuItems = [
    {
        title: 'Dashboard',
        icon: <FaGauge className='text-2xl text-gray-600' />,
        path: '/dashboard'
    },
    {
        title: 'Mes tâches',
        icon: <FaTasks className='text-2xl text-gray-600' />,
        path: '/tasks'
    },
    {
        title: 'Complétées',
        icon: <SiTicktick className='text-2xl text-gray-600' />,
        path: '/completed'
    },
    {
        title: 'Calendrier',
        icon: <FaCalendar className='text-2xl text-gray-600' />,
        path: '/calendar'
    },

]

export const Sidebar = () => {

    const pathname = usePathname()
    const activeLinkClassName = 'bg-blue-500 px-4 py-2 rounded-xl text-white'

    return (
        <div className='w-[20%] max-h-[100vh] border-x-2 flex flex-col py-4 px-6 justify-between overflow-hidden '>

            <div className='flex py-6 gap-2'>
                <img src="assets/logo.png" alt="Logo de donow" className='w-[50px]' />
                <div className="">
                    <h2 className='font-bold'>DoNow</h2>
                    <h4>Passez un cap !</h4>
                </div>
            </div>


            <div className="flex flex-col gap-6 border-2 rounded-xl px-4 py-6 ">
                {menuItems.map((item, index) => (
                    <div key={index} className=''>
                        <Link href={item.path} key={item.title}
                            className={`flex gap-4 items-center ${item.path === pathname ? activeLinkClassName : ''}
                            hover:bg-blue-500 hover:px-4 hover:py-2 hover:rounded-xl hover:text-white transition-all`}>
                            {item.icon}
                            <span>{item.title}</span>
                        </Link>
                        <hr className='mt-2' />
                    </div>
                ))}
            </div>


            <div className="flex items-center gap-6 border-2 rounded-xl px-4 py-2 cursor-pointer justify-center
                hover:bg-red-500 hover:px-4 hover:py-2 hover:rounded-xl hover:text-white transition-all">
                <FaDoorClosed className='text-2xl text-gray-600 hover:text-white' />
                <span className="">Se déconnecter</span>
            </div>
        </div>
    )
}
