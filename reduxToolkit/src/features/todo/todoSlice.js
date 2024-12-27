import{createSlice, nanoid} from '@reduxjs/toolkit';
 
// reducer is just a functionality - contains props and fx 

//  store mai initial state
const initialState ={
    todos:[{id:1, text:"Hello world"}]
}

export const todoSlice = createSlice({
     name: 'todo', 
     initialState,
     reducers: {
        addTodo: (state, action) =>{
            const todo={
                id:nanoid(), 
                // payload is an obj isme id jaa skta text jaa sakta hai anything
                text: action.payload.text
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo)=>todo.id != action.payload)
        },

     }

})

export const {addTodo,removeTodo} = todoSlice.actions 

export default todoSlice.reducer