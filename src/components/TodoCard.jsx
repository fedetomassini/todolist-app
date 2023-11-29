import React from 'react';

import { BsTrashFill } from 'react-icons/bs';

const TodoCard = ({id, name, date, onDelete}) => {

    const handleDelete = () => {
        onDelete(id);
    };

    return (
        <>
            <div className='flex justify-between bg-[#171717] w-[450px] h-[85px] max-sm:w-[300px] p-2.5 shadow-lg rounded-md hover:scale-[101%] transition-all delay-75'>
                <div className='w-fit h-fit'>
                    <p className='text-[12px] text-[#787878] font-medium italic -mt-2'>{id}</p>
                </div>
                <div className='flex items-center m-auto h-fit w-full'>
                    <p className='text-[16px] overflow-hidden text-ellipsis w-fit mx-auto font-medium'>{name}</p>
                </div>
                <div className='flex flex-col items-center gap-3'>
                    <div className='-mt-2 w-max'>
                        <p className='text-[12px] text-[#787878] font-medium italic'>{date}</p>
                    </div>
                    <div>
                        <button type='button' onClick={handleDelete} className='pl-2 pr-2 mt-1.5 text-[#787878] hover:text-red-400 transition-all delay-75'>
                            <BsTrashFill className='h-[26px] w-[20px]'/>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TodoCard;