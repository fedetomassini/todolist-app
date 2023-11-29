import React from "react";

const Wrapper = ({ children }) => {
    return (
        <div className="flex flex-col items-center justify-center gap-5 overflow-auto space-y-4 h-[575px] w-full bg-[#1a1a1a]">
            {children}
        </div>
    );
};

export default Wrapper;
