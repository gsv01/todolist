import './form.css';
import React,{useState} from 'react';

 
import {useDispatch} from 'react-redux';
 

import {addTodo} from './reducer';


export const FORM = () => {
    const dispatch = useDispatch();
    
    const [input,setInput] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(input.trim('') === ''){
            alert('Sorry , no todo task was typed. Please type a task and then click the  Add + button ! ');
        }else{
            dispatch(addTodo(input));
            setInput('');
        }
    }

    return (
        <div className="myForm">
            <div>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text"
                        placeholder="Add todo task"
                        value={input}
                        onChange={handleChange}
                        className="input1"
                    />
                    <input 
                        type="submit"
                        className="input2"
                        value="Add +"
                    />
                </form>
            </div>
        </div>
    );
}



