import { Link } from "react-router-dom";


const UpcomingMeal = ({meal}) => {
  
    const {image,price,description,category,_id}=meal;
    return (
        <div className="card  bg-base-100 shadow-xl">
        <figure><img className="h-[300px] w-full" src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">Title:{category}</h2> 
          <p>price:{price}</p>
          <p>{description}</p>
         
          <div className="card-actions justify-end">
            <Link to={`/detail/${_id}`}><button className="btn btn-primary">Details</button></Link>
          </div>
        </div>
      </div>
    );
};

export default UpcomingMeal;