import { useEffect, useState } from "react";
import { Tab, TabList,  Tabs } from "react-tabs";
import Meal from "./Meal";
import useAxios from "../useHooks/useAxios";
// import useMenu from "../useHooks/useMenu";


const Meals = () => {
    const [meals,setMeals]=useState([]);
    const [dispaly,setDisplay]=useState([])
    const axios=useAxios();
    useEffect(()=>{
     axios.get('/meals')
     .then(res=>{setMeals(res.data)
    setDisplay(res.data)
    })
    },[])
    // const breakfast=meals.filter(item=>item.type==='breakfast')
    // const lunch=meals.filter(item=>item.category==='lunch')
    // const dinner=meals.filter(item=>item.category==='dinner')
    // const [displayJobs,setDisplay]=useState([])
    // useEffect(()=>{
    //      fetch('https://job-project-server.vercel.app/jobs')
    //      .then(res=>res.json())
    //      .then(data=>{
    //         setJobs(data);
    //         setDisplay(data)
    //      })
    // },[])
    const handleJobs=(meal)=>{
       if(!meal){
        setDisplay([...meals])
        return 
       }
            const filteredMeal=meals.filter(item=>item.type===meal)
            setDisplay(filteredMeal)
        }
    return (
        <div className="my-6">
            
            <Tabs className='space-y-3'>
        <TabList className='grid grid-cols-4   gap-5'>
          <Tab className='btn' onClick={()=>handleJobs()}>All meals</Tab>
          <Tab className='btn' onClick={() => handleJobs("breakfast")}>Breakfast</Tab>
          <Tab className='btn' onClick={() => handleJobs("lunch")}>Lunch</Tab>
          <Tab className='btn' onClick={() => handleJobs("dinner")}>Dinner</Tab>
         
          </TabList>
          {/* <TabPanel > */}
       
       <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5'>
        
       {
           dispaly.map(item=><Meal key={item._id} item={item}></Meal>)
       }

        </div> 
    </Tabs>
    </div>
    );
};

export default Meals;