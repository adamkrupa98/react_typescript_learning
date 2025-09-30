import { useEffect, useState } from "react";

type Joke = {
    id: string,
    value: string
}
export const RandomJoke = () => {
    const [joke, setJoke] = useState<Joke | null>(null)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [count, setCount] = useState<number>(1);
    const fetchJoke = async () => {
        setLoading(true);
        setError("");

        try {
            const res = await fetch("https://api.chucknorris.io/jokes/random");
            const data = await res.json()
            setJoke(data);
        } catch (error) {
            setError("Błąd pobierania");
        } finally {
            setLoading(false);
        }
    }

    useEffect(()=>{
        setJoke({id: "", value: ""});
        fetchJoke()
    },[count])

    const changeCounter = () =>{
        setCount(prev => prev + 1
        )
    }
    return(
        <div>
            <button onClick={changeCounter}>Nowy żart</button>
            <p>Licznik żartów: {count}</p>
            {loading && <p>Ładowanie ...</p>}
            {error && <p>{error}</p>}
            {joke && (
                <div>
                    <h1>żart:</h1>
                    <p>{joke.value}</p>
                </div>
                )}
        </div>
    )
}