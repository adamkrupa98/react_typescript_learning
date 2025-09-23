type UserCard = {
    name: string,
    age: number,
    city: string
}

export const UserCard = ({ user }: { user: UserCard}) => {
    return(
        <div>
            <h2>Your name is {user.name}</h2>
            <p>You are {user.age} years old</p>
            <p>You live in {user.city}</p>
        </div>
    )
}