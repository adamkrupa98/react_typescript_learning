import React from 'react'
import { useState } from 'react'
type User = {
    id: number,
    name: string,
    age: number
}
const UserList = () => {

const [userList, setUserList] =useState<User[]>(
    [
        {
            id: 1,
            name: 'Adam',
            age: 20
        },
        {
            id: 2,
            name: 'Kacper',
            age: 30
        },
        {
            id: 3,
            name: 'Szymon',
            age: 25
        }
    ]
)
  return (
    <div>
        {userList.length === 0 ? <p>Lista jest pusta</p> :
        <ul>
            {userList.map(user => 
                <li key={user.id}>
                    <p>Mam na imię {user.name} i mam {user.age} lat</p>
                </li>
            )}
        </ul>
        }
    </div>
  )
}

export default UserList
