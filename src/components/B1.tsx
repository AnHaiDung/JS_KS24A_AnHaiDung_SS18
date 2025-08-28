import React, { useReducer } from 'react'

type Action ={ type: "increase"};
function counter(state:number, action: Action){
    switch(action.type){
        case "increase":
            return state+1;
        default:
            return state;
    }
}
export default function B1() {
    const[count, dispatch] = useReducer(counter,0);
  return (
    <div>
        <p>Count: {count}</p>
        <button onClick={()=> dispatch({type:"increase"})}>increase</button>
    </div>
  )
}
