import { createSlice } from "@reduxjs/toolkit";


export const myList = {
    todo: ['Put the cloths to the laundry ','Take TSAKI for a walk and then a good bath in the garden ','Cook ravioli for John'],
    completed: []
};

export const myReducer = createSlice({
    name: 'todolist',
    initialState: myList,
    reducers:{
        addTodo: (state,action) => {
            state.todo.push(action.payload);
        },
        removeTodo: (state,action) => {  
            return {
                todo: state.todo.filter(  x => x !== action.payload  ) ,
                completed: state.completed
            }
        },
        completed: (state,action) => { 
            return {
                todo: state.todo.filter(  x => x !== action.payload ),
                completed: [...state.completed, action.payload]
            }
        },
        removeCompleted: (state,action) => { 
            return {
                todo: state.todo,
                completed: state.completed.filter(  x => x !== action.payload  ) 
            }
        }
    }
});




export const selectData = (state) => state.reducer;
export const {addTodo,removeTodo,completed,removeCompleted} = myReducer.actions;

 
