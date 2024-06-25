import { useContext, useState } from "react";
import { TodoContext } from "../store/todo-list-context";


export default function TodoInput() {
    const [todo, setTodo] = useState("");
    const [chkValue, setChkValue] = useState(false);
    const {items, increment} = useContext(TodoContext);
    const click = ()=>{
        increment({type:'ADD_LIST',description:todo,status:chkValue});
        setTodo("");
    }
    return (
      <div className="places-category">
        <input 
            type="checkbox"
            checked={chkValue}
            onChange={(e)=>{
                setChkValue(e.target.checked)
              }}
            />
        <input type="text" value={todo}
            placeholder="create a new todo"
            onChange={(e)=>{
              setTodo(e.target.value)
            }}/>
       <button type="" onClick={click}>
        Add Todo
       </button>
      </div>
    );
  }
  