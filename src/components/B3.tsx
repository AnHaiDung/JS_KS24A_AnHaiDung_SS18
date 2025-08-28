import React, {useCallback, useState, type FormEvent } from 'react'

export default function B3() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleSubmit = useCallback((event: FormEvent)=>{
        event.preventDefault();
        console.log({email, password});
    },[email,password])
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="">Email</label>
                <input type="text" value={email} onChange={event=>setEmail(event.target.value)} />
            </div>
            <div>
                <label htmlFor="">Password</label>
                <input type="text" value={password} onChange={event=>setPassword(event.target.value)} />
            </div>
            <button type='submit'>submit</button>
        </form>
    </div>
  )
}
