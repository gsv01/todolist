import React from 'react';
import './display.css'

import { useSelector,useDispatch } from 'react-redux';
import { selectData,removeTodo,completed } from './reducer';



export const DISPLAY = () => {
    const dispatch = useDispatch();
    const selectTodos = useSelector(selectData);
     

    const handleRemove = (e) => { 
        dispatch(removeTodo(e.target.value))
    }

    const handleCompleted = (e) => {
        dispatch(completed(e.target.value));
    }

    const x = (selectTodos.todo.length === 0) ? 'Sorry there are no tasks ! ' : 'Here is the list with the tasks.';

    return (
        <div>
            <h2 align="center">Todo List</h2>
            <h2 align="center">{x}</h2>
            {
               
                selectTodos.todo.map(
                    each => {
                        return (
                            <div className="todolistContainer">
                                <div className="todoText">{each}</div>
                                <div>
                                    <button value={each} onClick={handleRemove}> Delete -</button>
                                </div>
                                <div>
                                    <button value={each} onClick={handleCompleted}>Completed </button>
                                </div>
                            </div>

                        );
                    }   
                )
            }
        </div>
    );
}