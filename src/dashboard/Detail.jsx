import { FcLike } from "react-icons/fc";
import { Link, useLoaderData } from "react-router-dom";


const Detail = () => {
    const data=useLoaderData();
    
    const {image,price,recipe,category}=data;
    return (
        <div className="card card-compact  bg-base-100 shadow-xl my-10">
  <figure><img className="md:w-1/3 w-full mx-auto h-[400px] rounded-lg" src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Title:{category}</h2>
    <p className="font-bold">Price:{price}</p>
    <p className="font-bold">Description:{recipe}</p>
    <p className="font-bold">Rating</p>
    <button><FcLike></FcLike></button>
   
    <div className="card-actions justify-end">
    <button className="btn bg-purple-400">Meal request</button>
     <Link to='/meals'> <button className="btn btn-primary">see all</button></Link>
    </div>
  </div>
</div>
)
};

export default Detail;