import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="mx-auto my-10 ">
        <div> <img className="mx-auto" src="https://i.postimg.cc/qqjd9d2j/image.png" alt="" /></div>
         <div className=" ml-56 my-6"><Link to='/' className="btn ml-10">Go back home</Link></div>
     </div>
    );
};

export default Error;