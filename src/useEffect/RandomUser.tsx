import { useState } from "react";
import { useEffect } from "react";

type User = {
    name: {
        first: string,
        second: string,
    },
    email: string
}
export const RandomUser = () =>{

    const [userData, setUserData] = useState<User | null>(null);
    const [loading, setLoading] = useState(false);

    const fetchUser = () => {
        setLoading(true);
        fetch("https://randomuser.me/api/")
        .then(res => res.json())
        .then(data => {
            setUserData(data.results[0]);
            setLoading(false);
        })
        .catch(()=> setLoading(false));
    };


    useEffect(() => {
        fetchUser();
    },[])

    return(
        <div>
            <button onClick={fetchUser}>Pobierz uzytkownika</button>
            {loading && <p>Ładowanie...</p>}
            {!loading && userData && (
                <div>
                    <p>
                        <strong>{userData.name.first}</strong>
                    </p>
                    <p>{userData.email}</p>
                </div>
            )}

        </div>
    )
}