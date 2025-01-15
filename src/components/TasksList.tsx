import React from 'react'
import { Button } from './ui/button'
import { FaCirclePlus, FaPenToSquare, FaArrowUpRightFromSquare, FaTrash } from 'react-icons/fa6'
import { Checkbox } from './ui/checkbox';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Confirmation } from './Confirmation';
import { AddTasksForm } from './AddTasksForm';
import { TaskUpdate } from './TaskUpdate';

export default function TasksList({ tasks }) {

    return (
        <div className='flex flex-col gap-8'>

            <div className="flex justify-between items-center">
                <h2 className="font-bold text-3xl">Liste des tâches</h2>

                <AddTasksForm launcher={
                    <div className='flex items-center justify-between px-2 py-2 bg-blue-600 text-white gap-2 rounded-xl hover:opacity-80 transition-all'>
                        <FaCirclePlus className='text-2xl' /> Nouveau
                    </div>
                } />

            </div>

            <div className="" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '20px',
                width: '100%',
            }}>
                {tasks.map((task, index) => (
                    <div className="bg-white rounded-xl px-6 py-4 shadow-xl flex flex-col gap-2" key={index}>
                        <div className="border-l-4 border-green-600 px-2">
                            <div className="w-full flex justify-between">
                                <h4 className='font-bold text-xl'> {task.title} </h4>

                                <div className="flex items-center gap-3">

                                    <TaskUpdate
                                        launcher={
                                            <div className="hover:bg-blue-400 hover:px-2 hover:py-2 hover:rounded-full transition-all cursor-pointer">
                                                <FaPenToSquare className='text-xl hover:text-white' />
                                            </div>
                                        }
                                        name={task.title}
                                        description={task.description}
                                        date={task.dueDate.toLocaleString('fr-FR', {
                                            day: '2-digit',
                                            month: 'long',
                                            year: 'numeric',
                                            hour: '2-digit',
                                            minute: '2-digit',
                                            second: '2-digit',
                                        })}
                                    />

                                    <Sheet>
                                        <SheetTrigger>
                                            <div className="hover:bg-blue-400 hover:px-2 hover:py-2 hover:rounded-full transition-all cursor-pointer">
                                                <FaArrowUpRightFromSquare className='text-xl hover:text-white' />
                                            </div>
                                        </SheetTrigger>
                                        <SheetContent>
                                            <SheetHeader>
                                                <SheetTitle className="text-2xl font-bold"> {task.title} </SheetTitle>
                                                <SheetDescription className="flex flex-col gap-2">
                                                    <span> {task.dueDate.toLocaleString('fr-FR', {
                                                        day: '2-digit',
                                                        month: 'long',
                                                        year: 'numeric',
                                                        hour: '2-digit',
                                                        minute: '2-digit',
                                                        second: '2-digit',
                                                    })} </span>
                                                    <span> {task.description} </span>
                                                </SheetDescription>
                                            </SheetHeader>
                                        </SheetContent>
                                    </Sheet>


                                </div>
                            </div>
                            <p> {task.dueDate.toLocaleString('fr-FR', {
                                day: '2-digit',
                                month: 'long',
                                year: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit',
                                second: '2-digit',
                            })} </p>
                            <p> {task.description} </p>
                        </div>

                        <div className="w-full flex justify-between">
                            <div className="flex items-center gap-2">
                                <Checkbox />
                                Terminer la tâche
                            </div>

                            <Confirmation
                                action={'delete'}
                                title={<div className='bg-red-500 rounded-full px-3 py-3 hover:opacity-80 transition-all'>
                                    <FaTrash className='text-white' />
                                </div>}
                                question={"Etes-vous sûr de vouloir supprimer cette tâche ?"}
                                advertise={`Cette action ne peut pas être annulée. Cela supprimera définitivement la tâche "${task.title}"`}
                            />

                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}
