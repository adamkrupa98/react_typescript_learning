import { useState } from "react"

export const ResgisterForm = () => {
type FormData = {
    name: string,
    age: number | null,
    email: string,
    password: string
}

const [formData, setFormData] = useState<FormData>({
    name: "",
    age : null,
    email: "",
    password: ""
})

const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const {name, value, type} = e.target;
    setFormData(prev => ({
    ...prev,
    [name]: type === "number" ? Number(value) : value
    }))
}

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name.trim()) return alert("name is required");
    if (!formData.age || formData.age <= 0) return alert("Age must be positive");
    if (!formData.email.includes("@")) return alert("Email is invalid");
    if (formData.password.length<5) return alert("Password must be longer");

    console.log("form submitted");
}
return(
    <form onSubmit={handleSubmit}>
        <input type="text" 
        name="name"
        value={formData.name}
        placeholder="Nazwa"
        onChange={handleChange}/>

        <input type="number"
        name = "age" 
        value={formData.age ?? ""}
        placeholder="Wiek"
        onChange={handleChange}/>

        <input type="email"
        name = "email" 
        value={formData.email}
        placeholder="Email"
        onChange={handleChange}/>

        <input type="password"
        name = "password" 
        value={formData.password}
        placeholder="Hasło"
        onChange={handleChange}/>
        <button type="submit">Wyślij</button>
    </form>
)
}
