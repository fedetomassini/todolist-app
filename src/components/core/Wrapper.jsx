import React from 'react';

import { tasksContainer } from '../../hooks/refs';

const Wrapper = ( {children} ) => {
    return (
        <div className='flex flex-col items-center justify-center gap-5 overflow-auto space-y-4 h-[525px] w-full bg-[#1a1a1a]' ref={tasksContainer}>
            {children}
        </div>
    )
}

export default Wrapper;