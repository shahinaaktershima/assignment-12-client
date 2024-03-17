import { useState } from "react";
import { useEffect } from "react";
import Meal from "../home/Meal";
import useAxios from "../useHooks/useAxios";


const Meals = () => {
    const axios=useAxios();
    const [meals,setMeals]=useState([]);
    // const [newMeal,setNewMeal]=useState('');
    useEffect(()=>{
     axios.get('/meals')
     .then(res=>setMeals(res.data))
    },[])
    const breakfast=meals.filter(item=>item.category==='breakfast')
    const lunch=meals.filter(item=>item.category==='lunch')
    const dinner=meals.filter(item=>item.category==='dinner')
    const handleSubmit=(e)=>{
        e.preventDefault();
        const name=e.target.text.value.toLowerCase();
        if(name==='breakfast'){
            setMeals(breakfast);
        }
        if(name==='lunch'){
            setMeals(lunch);
        }
        if(name==='dinner'){
            setMeals(dinner)
        }
           
    }

    return (
        <div className="my-10">
            <form onSubmit={handleSubmit}>
      <input name="text" type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
      <button  className="btn btn-primary -ml-4">Search</button>
      </form>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
        {
            meals.map(item=><Meal key={item._id} item={item}></Meal>)
        }
        </div>
        </div>
    );
};

export default Meals;