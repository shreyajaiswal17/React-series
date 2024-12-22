import React, { useState } from 'react'
import { useTodo } from '../contexts';

export default function TodoForm() {

    const[todo, setTodos] = useState("")
    const {addTodo} = useTodo()
 // yaha sei values wapas lei li after injecting it in app.jsx(in provider)
    const add =(e) => {
        e.preventDefault()

        if(!todo) return 

        addTodo({todo: todo, completed:false})
        
        setTodos("")
        // for no todo input field ko gayab krne ke liey
    }
   
  return (
    <form  onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                // wiring with state
                onChange={(e) => setTodos(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
  );
}
