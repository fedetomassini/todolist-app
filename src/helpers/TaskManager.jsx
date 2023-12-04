import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import {
    PiFilePlusFill,
    PiFileXFill,
    PiBracketsCurlyBold,
} from "react-icons/pi";

import TodoCard from "../components/TodoCard";

function TaskManager() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        // Cargar tareas desde el localStorage al montar el componente
        const storedTasks = JSON.parse(localStorage.getItem("userTasks")) || [];
        setTasks(storedTasks);
    }, []);

    function handleDeleteTask(taskId) {
        // Filtrar las tareas y excluir la tarea con el id proporcionado
        const updatedTasks = tasks.filter((task) => task.id !== taskId);

        setTasks(updatedTasks);
        // Guardar las tareas actualizadas en el localStorage
        saveLocalStorage(updatedTasks);
    }

    function renderTasks() {
        return (
            <>
                <div className="space-y-5">
                    {tasks.length === 0 ? (
                        <div className="flex flex-col items-center">
                            <PiBracketsCurlyBold className="h-[34px] w-[34px]" />
                            <span className="italic font-medium">
                                Nothing here...
                            </span>
                        </div>
                    ) : (
                        tasks.map((task) => (
                            <TodoCard
                                key={task.id}
                                id={task.id}
                                name={task.name}
                                date={task.date}
                                onDelete={handleDeleteTask}
                            />
                        ))
                    )}
                </div>
            </>
        );
    }

    function saveLocalStorage(updatedTasks) {
        // Guardar las tareas actualizadas en el localStorage
        localStorage.setItem("userTasks", JSON.stringify(updatedTasks));
    }

    async function createNewTask() {
        const { value: taskName } = await Swal.fire({
            // Configuración de SweetAlert para la creación de una nueva tarea
            input: "text",
            html: "<h1><b>Creating new task</b></h1>",
            inputPlaceholder: "Type your task here...",
            inputAttributes: {
                maxlength: 36,
                autocomplete: "off",
                autocapitalize: "off",
                autocorrect: "off",
            },
            inputValidator: (value) => {
                if (!value) {
                    return "You need to write something!";
                }
            },
            showCancelButton: true,
            confirmButtonText: "Add",
            confirmButtonColor: '#637E76',
            cancelButtonColor: '#B06161',
            heightAuto: true,
            width: 425,
            background: "#171717",
            color: "#8B97A2",
        });

        if (taskName) {
            const currentDate =
                new Date().toLocaleString("es-AR", {
                    day: "numeric",
                    month: "numeric",
                    year: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                }) + "hs";
            // Crear nueva tarea con datos proporcionados y agregarla a la lista de tareas
            const newTask = {
                name: taskName,
                date: currentDate,
                id: "#" + Math.floor(Math.random() * 100),
            };
            const updatedTasks = [...tasks, newTask];
            setTasks(updatedTasks);
            // Guardar las tareas actualizadas en el localStorage
            saveLocalStorage(updatedTasks);
        }
    }

    async function deleteAllTasks() {
        Swal.fire({
            // Confirmación para eliminar todas las tareas
            title: "Are you sure to delete all of your tasks?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            confirmButtonColor: '#637E76',
            cancelButtonColor: '#B06161',
            heightAuto: true,
            width: 425,
            background: "#171717",
            color: "#8B97A2",
        }).then((result) => {
            if (result.isConfirmed && localStorage.length !== 0) {
                // Limpiar el localStorage y actualizar el estado de las tareas
                localStorage.clear();
                setTasks([]);
                // Informar al usuario que las tareas han sido eliminadas
                Swal.fire({
                    text: "Your tasks have been deleted.",
                    icon: "success",
                    confirmButtonColor: '#31304D',
                    heightAuto: true,
                    width: 425,
                    background: "#171717",
                    color: "#8B97A2",
                });
            } else{
                Swal.fire({
                    text: "The list is already clear.",
                    confirmButtonColor: '#31304D',
                    heightAuto: true,
                    width: 425,
                    background: "#171717",
                    color: "#8B97A2",
                })
            }
        });
    }

    return (
        <div className="flex items-center justify-center h-full w-full">
            <div className="overflow-y-auto max-h-[520px] py-2">
                {renderTasks()}
            </div>
            {/* Botones para añadir y eliminar tareas */}
            <div className="flex flex-col items-center justify-center my-auto mx-auto gap-2 p-4 w-full h-fit absolute right-0 left-0 bottom-0 space-x-4 bg-[#1e1e1e]">
                <div className="flex items-center justify-center my-auto mx-auto  w-full h-fit">
                    <button
                        onClick={createNewTask}
                        className="pl-2 pr-2 hover:scale-[105%] hover:text-green-400 transition-all delay-75">
                        <PiFilePlusFill className="h-[34px] w-[34px]" />
                    </button>
                    <button
                        onClick={deleteAllTasks}
                        className="pl-2 pr-2 hover:scale-[105%] hover:text-red-400 transition-all delay-75">
                        <PiFileXFill className="h-[34px] w-[34px]" />
                    </button>
                </div>
                <div className="flex items-center">
                    <span className="text-[12px] text-[#787878] mr-6 italic font-medium">
                        Made by:{" "}
                        <a href="https://github.com/fedetomassini" target="_blank" className="text-[#B06161] underline underline-offset-4 decoration-dashed hover:underline-offset-[7px] transition-all delay-75">
                            @fedetomassini
                        </a>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default TaskManager;
