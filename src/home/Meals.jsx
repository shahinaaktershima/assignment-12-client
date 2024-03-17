import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Meal from "./Meal";
import useAxios from "../useHooks/useAxios";
// import useMenu from "../useHooks/useMenu";


const Meals = () => {
    const [meals,setMeals]=useState([]);
    const axios=useAxios();
    useEffect(()=>{
     axios.get('/meals')
     .then(res=>setMeals(res.data))
    },[])
    const breakfast=meals.filter(item=>item.type==='breakfast')
    const lunch=meals.filter(item=>item.category==='lunch')
    const dinner=meals.filter(item=>item.category==='dinner')
    
    return (
        <div className="my-10">
           
            <Tabs>
    <TabList className={'flex w-full justify-around gap-2 my-3'}>
      <Tab className={'bg-purple-400 btn flex-1'}>All meals</Tab>
      <Tab className={'bg-purple-400 btn flex-1'}>Breakfast</Tab>
      <Tab className={'bg-purple-400 btn flex-1'}>Lunch</Tab>
      <Tab className={'bg-purple-400 btn flex-1'}>dinner</Tab>
    </TabList>

    <TabPanel className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'}>
     {
        meals.map(item=><Meal key={item._id} item={item}></Meal>)
     }
    </TabPanel>
    <TabPanel className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'}>
     {
        breakfast.map(item=><Meal key={item._id} item={item}></Meal>)
     }
    </TabPanel>
    <TabPanel  className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'}>
    {
        lunch.map(item=><Meal key={item._id} item={item}></Meal>)
     }
    </TabPanel>
    <TabPanel  className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'}>
    {
        dinner.map(item=><Meal key={item._id} item={item}></Meal>)
     }
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default Meals;