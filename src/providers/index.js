/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useState, createContext } from 'react';

export const Hooks = createContext(); // createContext
const Index = (props) => {
    // arrow func index
    //   const [todo, setTodo] = useState('');
    //   const [arr, setArr] = useState([]);

    // dari todo
    const [todo, setTodo] = useState(); // local state
    const [todos, setTodos] = useState([]); // local state
    const valx = {
        todo,
        setTodo,
        todos,
        setTodos,
        // todo,
        // setTodo,
        // arr,
        // setArr,
    };
    return <Hooks.Provider value={valx}>{props.children}</Hooks.Provider>;
};

export default Index;
