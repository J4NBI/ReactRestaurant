import { useState, useEffect } from "react/cjs/react.production.min"

export default function Meals(){
    const [loadedMeals, setLoadedMeals] = useState([]);
    useEffect(() => {
        async function fetchMeals(){
            const response = await fetch('https://localhost:3000/meals',{method: 'GET'})
            if (!response === 'OK'){
                //...
            }
            const meals = await response.json();
            setLoadedMeals(meals)
        }
    },[])
    
    return (
        <ul>
            {loadedMeals.map((meal)=> {
                return (<li key={meal.id}>
                    {meal.title}
                </li>)
            })}
        </ul>
    )
}