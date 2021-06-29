import React from 'react';
import './completed.css'

import { useSelector,useDispatch } from 'react-redux';
import { selectData,removeCompleted} from './reducer';



export const COMPLETED = () => {
    const dispatch = useDispatch();
    const selectTodos = useSelector(selectData);
     

    const handleCompletedRemoval = (e) => { 
        dispatch(removeCompleted(e.target.value))
    }


    const x = (selectTodos.completed.length === 0) ? 'Sorry there are no completed tasks ! ' : 'Here is the list with the history of completed tasks.';
  

    return (
        <div>
            <h2 align="center">Completed</h2>
            <h2 align="center">{x}</h2>
            {
                
                selectTodos.completed.map(
                    each => {
                        return (
                            <div className="completedlistContainer">
                                <div className="completedText">{each}</div>
                                <div>
                                    <button value={each} onClick={handleCompletedRemoval}> Delete -</button>
                                </div>
                               
                            </div>

                        );
                    }   
                )
            }
        </div>
    );
}