import Swal from 'sweetalert2';
import ReactDOM from 'react-dom'; // Import ReactDOM
import { taskContent, tasksContainer } from "../hooks/refs";
import TodoCard from '../components/TodoCard';

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

const saveLocalStorage = (tasksList) => {
    localStorage.setItem("tasks", JSON.stringify(tasksList));
}

const createTask = (content) => {
    return <TodoCard taskContent={content} />;
}

const renderTasks = (todoList) => {
    const taskElements = todoList.map((task) => createTask(task.taskContent));

    // Use ReactDOM to render the components into tasksContainer
    ReactDOM.render(taskElements, tasksContainer.current);
}

export async function createNewTask() {
    const { value: taskContent } = await Swal.fire({
        input: 'textarea',
        inputLabel: 'Creating new task',
        inputPlaceholder: 'Type your task here...',
        inputAttributes: {
            'aria-label': 'Type your task here'
        },
        showCancelButton: true,
        confirmButtonText: 'Add',
        background: '#171717',
        color: "#8B97A2"
    })

    if (taskContent) {
        const newTask = {
            taskContent: taskContent,
        };

        tasks = [...tasks, newTask];
        saveLocalStorage(tasks);
        renderTasks(tasks);
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
        background: '#171717',
        color: "#8B97A2"
    }).then((result) => {
        if (result.isConfirmed) {
            localStorage.clear();
            console.log('Tasks cleared');
            renderTasks([]); // Clear the tasksContainer
        }
    })
}
