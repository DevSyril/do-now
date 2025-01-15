import React from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'

export const TaskUpdate = ({ launcher, name, description, date }) => {
    return (
        <div>
            <AlertDialog>
                <AlertDialogTrigger> {launcher} </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle className="text-2xl font-bold">Modifier la tâche "{name}" </AlertDialogTitle>
                        <AlertDialogDescription>
                            Remplissez le formulaire suivant pour modifier la tâche !
                        </AlertDialogDescription>
                    </AlertDialogHeader>

                    <form action="">
                        <div className="">
                            <label htmlFor="title" className='font-medium text-xl'>Titre de la tâche</label>
                            <Input type="text" placeholder={name} />
                        </div>
                        <div className="">
                            <label htmlFor="description" className='font-medium text-xl'>Description</label>
                            <Textarea placeholder={description} />
                        </div>

                        <div className="">
                            <label htmlFor="dueDate" className='font-medium text-xl'>Date de fin</label>
                            <Input type="date" placeholder={date} />
                        </div>
                    </form>

                    <AlertDialogFooter>
                        <AlertDialogCancel>Annuler</AlertDialogCancel>
                        <AlertDialogAction>Créer</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    )
}
