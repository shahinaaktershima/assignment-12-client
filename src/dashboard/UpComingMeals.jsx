import { useEffect, useState } from "react";
import UpcomingMeal from "./UpcomingMeal";
import useAxios from "../useHooks/useAxios";


const UpComingMeals = () => {
    const [meals,setMeals]=useState([]);
    const axios=useAxios()
    useEffect(()=>{
        axios('/addmeal')
        .then(res=>setMeals(res.data))
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