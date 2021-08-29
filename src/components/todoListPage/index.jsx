/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React, { useState, useCallback } from 'react';

export function TodoList({ title, todos }) {
    return (
        <div>
            <h2>{title}</h2>
            {todos && todos.length < 1 ? (
                <span>No Todo Found</span>
            ) : (
                <ol>
                    {todos.map((todo) => (
                        <li>{todo}</li>
                    ))}
                </ol>
            )}
        </div>
    );
}
function TodoListPage() {
    // const [todo, setTodo] = useState(); // local state
    // const [todos, setTodos] = useState([]); // local state
    const addTodo = useCallback(() => {
        if (!todo || (typeof todo === 'string' && todo.length < 1)) return;
        setTodos([...todos, todo]);
    }, [todo, todos]);

    return (
        <>
            {/* <div className={this.context.theme === 'light' ? 'light' : 'dark'}> */}
            <div>
                <h1>Todo List Page</h1>
                <>
                    <input value={todo} onChange={(e) => setTodo(e.target.value)} />
                    <button onClick={addTodo}>Add Todo</button>
                </>

                <TodoList title="Todo Component" todos={todos} />
            </div>
        </>
    );
}

export default TodoListPage;

// export default class TodoListPage extends React.Component {
//   state = {
//     todo: '',
//     title: 'test',
//     todos: [],
//   };

//   onChange = (event) => {
//     this.setState({todo: event.target.value});
//   };

//   addTodo = () => {
//     const todo = this.state.todo;
//     if (!todo || (typeof todo === 'string' && todo.length < 1)) return;
//     const temp = [...this.state.todos, todo];
//     this.setState({todo: '', todos: temp});
//   };

//   render() {
//     return (
//   <div className={this.context.theme === 'light' ? 'light' : 'dark'}>
//     <h1>Todo List Page</h1>
//     <React.Fragment>
//       <input value={this.state.todo} onChange={this.onChange} />
//       <button onClick={this.addTodo}>Add Todo</button>
//     </React.Fragment>

//     <TodoList title="Todo Component" todos={this.state.todos} />
//   </div>
//     );
//   }
// }
