import { useEffect, useState } from "react";
import UpcomingMeal from "./UpcomingMeal";


const UpComingMeals = () => {
    const [meals,setMeals]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/addmeal')
        .then(res=>res.json())
        .then(data=>setMeals(data))
    },[])
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 my-10 gap-10">
            {
                meals.map(meal=><UpcomingMeal key={meal._id} meal={meal}></UpcomingMeal>)
            }
        </div>
    );
};

export default UpComingMeals;