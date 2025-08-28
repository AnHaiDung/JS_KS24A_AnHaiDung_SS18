import React, { useMemo } from 'react'

interface UserInfor{
    id: number;
    name: string;
    age: number;
}

export default function B2() {
    const user: UserInfor[]=[
        { id: 1, name: 'Alice', age: 25 },
        { id: 2, name: 'Bob', age: 17 },
    ];
    const adults = useMemo(()=>{
        return user.filter(user=> user.age > 18);
    }, [user]);
  return (
    <div>
      <h3>Danh sách người dùng trên 18 tuổi:</h3>
      <ul>
        {adults.map(user => (
          <li key={user.id}>
            {user.name} ({user.age} tuổi)
          </li>
        ))}
      </ul>
    </div>
  )
}
