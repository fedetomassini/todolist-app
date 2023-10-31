import React from 'react';

const Wrapper = ( {children} ) => {
    return (
        <div className='flex flex-col items-center justify-center gap-5 overflow-auto mt-5 h-[525px] w-full'>
            {children}
        </div>
    )
}

export default Wrapper;