import { useContext } from "react";
import { TodoContext } from "../store/todo-list-context";

export default function TodoList() {
  const {items} = useContext(TodoContext);

  return (
    <div id="cart">
      {items.length === 0 && <p>No items in cart!</p>}
      {items.length > 0 && (
        <ul id="cart-items">
          {items.map((item) => {
            return (
              <li key={item.id}>
                <div>
                  <span style={item.completed ?{'textDecoration':'line-through'}:null}>{item.description}</span>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
