type Person = {
    name: string,
    age?: number;
    isStudent?: boolean;
}

export const Hello = ({name,age,isStudent}: Person) => {
    return (
        <div>
            { <h2>
                Hello {name}!
            </h2>}
            {age && <p>You are {age} old.</p>}
            {isStudent && <p>You ares student.</p>}
        </div>
    )
}