import {createContext,useState, useReducer} from 'react'
import { AVAILABLE_PLACES } from '../data';


 export const TodoContext = createContext({
     items : '',
     increment:()=>{},
 });

 export function todoReducer(state,action) {
    if(action.type === 'ADD_LIST'){
      const updatedItems = [...state.items];
  
      const existingItemIndex = updatedItems.findIndex(
        (cartItem) => cartItem.description === action.payload.description
      );
      const existingItem = updatedItems[existingItemIndex];

      if (existingItem) {
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity + 1,
        };
        updatedItems[existingItemIndex] = updatedItem;
      } else {
        const product = AVAILABLE_PLACES.find((product) => product.description === action.payload.description);
        updatedItems.push({
          id: action.payload.id,
          description: action.payload.description,
          status: action.payload.completed,
          quantity: 1,
        });
      }

      const storeIds = JSON.parse(localStorage.getItem('selectedPlaces'))||[];
    if(storeIds.indexOf(action.payload.id) === -1){
      localStorage.setItem('selectedPlaces',JSON.stringify([action.payload,...storeIds]))
    }
      

      return {
        ...state,
        items: updatedItems,
      };
    }
    return state;
}
 
export default function TodoContextProvider({children}) {
  const[todoState,todoDispatch]= useReducer(todoReducer,{
    items: JSON.parse(localStorage.getItem('selectedPlaces'))||[],
    increment:()=>{},
})

function handleIncrement(todo){
    todoDispatch({
         type:todo.type,
         payload: {
            id: Date.now(),
           description: todo.description,
           completed:todo.status
         }
         
     }) 
 }

const ctxvalue={
 items : todoState.items,
 increment : handleIncrement
}

 return <TodoContext.Provider value = {ctxvalue}>
        {children}
 </TodoContext.Provider>
}
