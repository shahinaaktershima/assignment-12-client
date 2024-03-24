import { useEffect, useState } from "react";
import useAxios from "../useHooks/useAxios";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";


const ManageItems = () => {
    const [allMeals,setAll]=useState([]);
    const [newMeal,setNew]=useState([])
    const axios=useAxios();
    useEffect(()=>{
        axios.get('/meals')
        .then(res=>setAll(res.data));
    },[])
    useEffect(()=>{
        axios.get('/addmeal')
        .then(res=>setNew(res.data))
    },[])

    const handleDeleteItems=meals=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              
             axios.delete(`/meals/${meals._id}`)
             .then(res=>{
              console.log(res);
              if(res.data.deletedCount>0){
               
               Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
              }
             })
            }
          });
        

    }
    const handleDeleteItem=meals=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              
             axios.delete(`/addmeal/${meals._id}`)
             .then(res=>{
              console.log(res);
              if(res.data.deletedCount>0){
               
               Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
              }
             })
            }
          });
        

    }
    return (
        <div>
        <div className="flex justify-evenly my-8">
         <h2 className="text-4xl font-bold text-orange-400">All Items</h2>
         <h2 className="text-4xl font-bold text-orange-400">Total Meals:{allMeals.length+newMeal.length}</h2>
        </div>
        <div className="overflow-x-auto w-full mx-auto my-10">
<table className="table overflow-x-auto">
 {/* head */}
 <thead>
   <tr >
     <th></th>
     <th>Type</th>
     <th>price</th>
     <th>description</th>
     <th>Action</th>
   </tr>
 </thead>
 <tbody>
   {/* row 1 */}
   {
     allMeals.map((meals)=><tr key={meals._id}>
         <th><input type="checkbox"  className="checkbox checkbox-primary" /></th>
         <td className="font-bold">{meals.type}</td>
         <td>{meals.price}</td>
         <td>{meals.description}</td>
         <td> <button  onClick={()=>handleDeleteItems(meals)} className="btn bg-orange-400 text-white text-xl flex items-center  btn-ghost btn-xs">
       <MdDelete></MdDelete>
           </button></td>
       </tr>)
   }
   {
     newMeal.map((meals)=><tr key={meals._id}>
         <th><input type="checkbox" className="checkbox checkbox-primary" /></th>
         <td className="font-bold">{meals.category}</td>
         <td>{meals.price}</td>
         <td>{meals.recipe}</td>
         <td> <button  onClick={()=>handleDeleteItem(meals)} className="btn bg-orange-400 text-white text-xl flex items-center  btn-ghost btn-xs">
       <MdDelete></MdDelete>
           </button></td>
       </tr>)
   }
 </tbody>
</table>
</div>
     </div>
    );
};

export default ManageItems;