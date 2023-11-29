import React from "react";

import Wrapper from "./Wrapper";
import TaskManager from "../../helpers/TaskManager";

// Global Styles \\
import "../../assets/styles/_variables.scss";

const App = () => {
    return (
        <>
            <Wrapper>
                <TaskManager/>
            </Wrapper>
        </>
    );
};

export default App;
