import React, { useCallback, useState, type ChangeEvent } from 'react'

export default function B4() {
    const [color, setColor] = useState<string>("")
    const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>)=>{
        setColor(event.target.value)
    },[]);
  return (
    <div>
        <p>Mau nguoi dung chon</p>
        <input type="color" onChange={handleChange} />
        <div style={{width:"100px", height:"100px",backgroundColor: color||"white"}}></div>
    </div>
  )
}
