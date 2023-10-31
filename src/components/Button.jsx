import React from 'react';

import { createNewTask, deleteAllTasks } from '../helpers/Logic';
import { BiMessageSquareAdd } from 'react-icons/bi';
import { FiDelete } from 'react-icons/fi';

const Button = () => {
    return (
        <>
        <div className='flex w-full justify-center absolute bottom-0 mb-8 space-x-4'>
            <button onClick={createNewTask} className='pl-2 pr-2 hover:scale-[105%] hover:text-green-400 transition-all delay-75'>
                <BiMessageSquareAdd className='h-[34px] w-[34px]'/>
            </button>
            <button onClick={deleteAllTasks} className='pl-2 pr-2 hover:scale-[105%] hover:text-red-400 transition-all delay-75'>
                <FiDelete className='h-[34px] w-[34px]'/>
            </button>
        </div>
        </>
    )
}

export default Button;