import React from 'react';

import Wrapper from './Wrapper';

// Global Styles \\
import '../../assets/styles/_variables.scss';
import TodoCard from '../TodoCard';
import Button from '../Button';

const App = () => {
    return (
        <>
        <Wrapper>
            <TodoCard/>
            <Button/>
        </Wrapper>
        </>
  )
}

export default App;