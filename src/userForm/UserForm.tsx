import { useState } from "react";

export const UserForm = () => {
        const [name, setName] = useState<string>("");
        const [age, setAge] = useState<number|"">("");
        const [submittedData, setSubmittedData] = useState<{name:string, age:number} | null>(null);

        const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            
            if (name === "") {
                alert("Name is required");
                return;
            }

            if (typeof(age) != "number" || age <= 0) {
                alert("Age must be positive number");
                return;
            }
            setSubmittedData({name, age})
        }
        return (
            <div>
                <form onSubmit={handleSubmit}>
                
                <input 
                type="text"
                value={name}
                onChange={(e:React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                placeholder="Imie"
                />

                <input type="number"
                value={age}
                onChange={(e:React.ChangeEvent<HTMLInputElement>) => setAge(Number(e.target.value))}
                placeholder="wiek" />
                <button type="submit">Submit</button>
                </form>

                {submittedData && (
                    <p>
                        Name: {submittedData.name}, Age: {submittedData.age}
                    </p>
                )}
            </div>
        )
}