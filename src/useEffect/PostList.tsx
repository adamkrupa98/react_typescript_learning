import { useEffect } from "react";
import { useState } from "react";

type PostData = {
    userId: number;
    id : number;
    title: string;
    body: string;
}

export const PostList = () =>{

    const [postData, setPostData] = useState<PostData[]>([]); 

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const fetchPosts = async () => {
        setLoading(true);
        setError("");
        try{
            const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
            const data = await res.json();
            setPostData(data);
        } catch (error) {
            setError("Błąd podbierania");
        } finally {
            setLoading(false);
        }
    }

    useEffect(()=>{
        fetchPosts();
    },[])

    return(
        <div>
            <button onClick={fetchPosts}>Odśwież</button>
            {loading && <p>Ładowanie...</p>}
            {error && <p>{error}</p>}
            {postData.length > 0 && (
                <ol>
                    {postData.map(post => (
                        <li key={post.id}>
                            <p>{post.title}</p>
                            <p>{post.body}</p>
                        </li>
                    ))}
                </ol>
            )}
        </div>
    )
}