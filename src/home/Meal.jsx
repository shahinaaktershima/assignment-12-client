import { Link } from "react-router-dom";


const Meal = ({item}) => {
    const{_id,price,type,image,description}=item;
    return (
        <div className="card  bg-base-100 shadow-xl">
        <figure><img className="h-[300px] w-full" src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">Title:{type}</h2> 
          <p>price:{price}</p>
          <p>{description}</p>
         
          <div className="card-actions justify-end">
            <Link to={`/details/${_id}`}><button className="btn btn-primary">Details</button></Link>
          </div>
        </div>
      </div>
    );
};

export default Meal;