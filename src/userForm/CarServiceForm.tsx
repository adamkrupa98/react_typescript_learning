import { useState } from "react";

export const CarServiceForm = () =>{
    type CarData = {
        model: string,
        productionDate: string,
        price: number | null
    }
    const [carData, setCarData] = useState<CarData>({
        model: "",
        productionDate : "",
        price: null
    })

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {name, value, type} = e.target;
        setCarData(prev => ({
            ...prev,
            [name] : type === "number" ? Number(value) : value
        }))
    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (carData.model === "") {
            alert("Name is required");
            return;
        } 
        if (carData.productionDate === ""){
            alert("Data is required");
            return;
        }
        if (carData.price != null && carData.price <=0 )
        {
            alert("Price must be positive") ;
            return;
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" 
            name ="model"
            value = {carData.model}
            onChange={handleChange}
            placeholder="Model"/>

            <input type="date" 
            name ="data"
            value = {carData.productionDate}
            onChange={handleChange}
            placeholder="Rok produkcji"/>

            <input type="number" 
            name ="price"
            value = {carData.price ?? ""}
            onChange={handleChange}
            placeholder="Cena"/>

            <button type="submit">Wyślij</button>
        </form>
    )
}