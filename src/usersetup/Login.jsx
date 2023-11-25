
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import Navbar from '../home/Navbar';


const Login = () => {
   
    const handleLogin=e=>{
        e.preventDefault();
    }
   
    return (
       <div>
        <Navbar></Navbar>
         <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex lg:flex-col md:flex-row-reverse">
          <div className="text-center lg:text-left md:w-1/2">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card  md:w-1/2 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              
              <div className="form-control mt-6">
              {/* disabled={disabled} */}
                <input disabled={false} className="btn btn-primary" type="submit" value="Login" />
              </div>
            </form>
            <p className='mx-auto'><small>NEW HERE? <Link className='text-purple-600 font-bold' to='/signup'>Create an account </Link></small></p>
            <div className="divider text-center"></div>
            <div className='btn bg-purple-400'><FaGoogle className='text-black-400'></FaGoogle> GOOGLE SIGN IN</div>
            
          </div>
        </div>
      </div>
       </div>
    );
};

export default Login;