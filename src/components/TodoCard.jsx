import React from 'react';

import { deleteTaskButton, taskContent, taskDate, taskID } from '../hooks/refs';
import { BsTrashFill } from 'react-icons/bs';

const TodoCard = () => {
    return (
        <>
            <div className='flex justify-between bg-[#171717] w-[450px] h-[85px] p-4 shadow-lg rounded-md hover:scale-[101%] transition-all delay-75'>
                <div>
                    <p className='text-[14px] text-[#787878] font-medium italic -mt-2' ref={taskID}>#01</p>
                </div>
                <div className='flex items-center gap-4'>
                    <p className='text-[18px] overflow-hidden text-ellipsis w-[300px] font-medium' ref={taskContent}>Ir a comprar X cosa al supermercado</p>
                </div>
                <div className='flex flex-col items-center gap-3'>
                    <div className='-mt-2'>
                        <p className='text-[14px] text-[#787878] font-medium italic' ref={taskDate}>00/00/00</p>
                    </div>
                    <div>
                        <button type='button' className='pl-2 pr-2 text-[#787878] hover:text-red-400 transition-all delay-75' ref={deleteTaskButton}>
                            <BsTrashFill className='h-[26px] w-[22px]'/>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TodoCard;