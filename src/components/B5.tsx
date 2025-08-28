import React, { useReducer } from 'react'

interface State{
    text: string;
}
type Action = | {type:"Change"; payload:string};

function inputReducer(state: State,action:Action){
    switch(action.type){
        case "Change":
            return{text: action.payload};
        default:
            return state;
    }
}

export default function B5() {
    const [state, dispatch] = useReducer(inputReducer,{text:""});
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
        dispatch({type:"Change",payload:event.target.value});
    };
  return (
    <div>
        <p>Input change</p>
        <input type="text" value={state.text} onChange={handleChange} />
        <p>{state.text}</p>
    </div>
  )
}
