import React, { useReducer } from 'react'

interface State{
    gender: string
}
type Action = | {type:"Change"; payload:string};

function inputReducer(state: State,action:Action){
    switch(action.type){
        case "Change":
            return{gender: action.payload};
        default:
            return state;
    }
}
export default function B6() {
    const[state,dispatch] = useReducer(inputReducer,{gender:""});
    const handleChange =(event: React.ChangeEvent<HTMLInputElement>)=>{
        dispatch({type:"Change", payload:event.target.value})
    }
  return (
    <div>
        <h3>Chọn giới tính:</h3>
        <label>
        <input 
          type="radio" 
          name="gender" 
          value="Nam" 
          checked={state.gender === 'Nam'} 
          onChange={handleChange}
        />
        Nam
      </label>

      <label>
        <input 
          type="radio" 
          name="gender" 
          value="Nữ" 
          checked={state.gender === 'Nữ'} 
          onChange={handleChange}
        />
        Nữ
      </label>

      <label>
        <input 
          type="radio" 
          name="gender" 
          value="Khác" 
          checked={state.gender === 'Khác'} 
          onChange={handleChange}
        />
        Khác
      </label>
      <p>Giới tính đã chọn: {state.gender || 'Chưa chọn'}</p>
    </div>
  )
}
