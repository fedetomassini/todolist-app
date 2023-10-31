import React from 'react';

import { tasksContainer } from '../../hooks/refs';

const Wrapper = ( {children} ) => {
    return (
        <div className='flex flex-col items-center justify-center gap-5 overflow-auto mt-5 h-[525px] w-full' ref={tasksContainer}>
            {children}
        </div>
    )
}

export default Wrapper;