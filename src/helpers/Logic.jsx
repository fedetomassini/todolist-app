import Swal from 'sweetalert2';
import { taskID, taskDate, taskContent, createTaskButton, deleteTaskButton, deleteAllTaksButton } from "../hooks/refs";


export async function createNewTask() {
    const { value: taskName } = await Swal.fire({
        input: 'text',
        inputLabel: 'Creating new task',
        inputPlaceholder: 'Type your task here...',
        inputAttributes: {
            'aria-label': 'Type your task here'
        },
        showCancelButton: true,
        confirmButtonText: 'Add',
        heightAuto: true,
        width: 425,
        background: '#171717',
        color: "#8B97A2"
    })

    if (taskName) {

    }
}

export async function deleteAllTasks() {
    Swal.fire({
        title: 'Are you sure to delete all of your tasks?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
        heightAuto: true,
        width: 425,
        background: '#171717',
        color: "#8B97A2"
    }
    ).then((result) => {
        if (result.isConfirmed) {
            localStorage.clear();
            console.log('Tasks cleared');
            Swal.fire({
                title: 'Deleted!',
                text: 'Your tasks has been deleted.',
                icon: 'success',
                background: '#171717',
                color: "#8B97A2"
            })
        }
    })
}