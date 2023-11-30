import Swal from "sweetalert2";
import useAxios from "../useHooks/useAxios";
import useAxiosSecure from "../useHooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";


const AddItems = () => {
   
    
    const axiosPublic= useAxios();
    const axiosSecure=useAxiosSecure()
      const { register, handleSubmit ,reset } = useForm();
      const onSubmit =async (data) => {console.log(data)
      // image upload to image bb and then get an url
   
     
        // now send the menu item to the server with the image url
        const menuItem={
          name:data.name,
          category:data.category,
          price:parseFloat(data.price),
          recipe:data.recipe,
          image:data.display_url,
        }
        const menuRes=await axiosSecure.post('/addmeal',menuItem )
        console.log(menuRes.data);
        if(menuRes.data.insertedId){
          // show success with pop up
          reset()
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${data.name} data added to the menu`,
            showConfirmButton: false,
            timer: 1500
          });
        }
      }
     
     
  
      
      
    return (
        <div className="mx-10 my-10">
          <h2 className="text-3xl font-bold">Add meals</h2>
           <form onSubmit={handleSubmit(onSubmit)}>
      
      <div className="form-control w-full my-6">
  <label className="label">
    <span className="label-text">Recipe name</span>
   
  </label>
  <input
   {...register("name")}
  type="text" placeholder="Recipe name" className="input input-bordered w-full " />
  
</div>
     <div className="flex gap-10">
        {/* category */}
        <div className="form-control w-full my-6">
  <label className="label">
    <span className="label-text">category</span>
   
  </label>
  <select defaultValue={'default'}  {...register("category",{required:true})} className="select select-bordered w-full ">
  <option  value={'default'}>Select a category</option>
  <option value="breakfast">breakfast</option>
        <option value="dinner">dinner</option>
        <option value="lunch">lunch</option>
       
        
</select>
  
</div>
{/* price */}
<div className="form-control w-full my-6">
  <label className="label">
    <span className="label-text">price</span>
   
  </label>
  <input
   {...register("price",{required:true})}
  type="number" placeholder="price" className="input input-bordered w-full " />
  
</div>
     </div>
     <div className="form-control">
  <label className="label">
    <span className="label-text">description</span>
   
  </label>
  <textarea   {...register("recipe",{required:true})} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
 
</div>
<div>
<input 
  {...register("image")}
type="file" className="file-input file-input-bordered w-full max-w-xs my-4" />
</div>
    
      
     <button className="btn ml-4">Add meals <FaUtensils></FaUtensils></button>
    </form> 
        </div>
    );
};

export default AddItems;