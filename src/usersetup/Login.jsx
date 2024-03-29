
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import Swal from 'sweetalert2';
import useAxios from '../useHooks/useAxios';


const Login = () => {
  const {signIn,googleSignIn}=useContext(AuthContext);
    const navigate=useNavigate();
    const location=useLocation();
    const from=location.state?.from?.pathname || '/';
    console.log('state in the location',location.state);
    
    const axios=useAxios();
    
    const handleGoogle=()=>{
        googleSignIn()
        .then(result=>{
            console.log(result.user);
            navigate('/')
            const userInfo={
                email:result.user?.email,
                name:result.user?.displayName
            }
            axios.post('/users',userInfo)
            .then(res=>{
                console.log(res.data);
              navigate('/')
            })
        })
        .catch(error=>{
            console.log(error);
        })
    }
   
    const handleLogin=e=>{
      e.preventDefault();
      const form=e.target;
      const email=form.email.value;
      const password=form.password.value;
      console.log(email,password);
      signIn(email,password)
      .then(res=>{
          console.log(res.user);
          Swal.fire({
            title: "user login successfully",
            showClass: {
              popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
            },
            hideClass: {
              popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
            }
          });
          navigate(from,{replace:true})
      })
      .catch(err=>{
          console.log(err);
      })

  }
   
    return (
       <div>
       
         <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex flex-col ">
          <div className="text-center lg:text-left w-full md:max-w-md">
            <h1 className="text-5xl font-bold">Login now!</h1>
            
          </div>
          <div className="card   shadow-2xl bg-base-100">
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
            <div onClick={handleGoogle} className='btn bg-purple-400'><FaGoogle className='text-black-400'></FaGoogle> GOOGLE SIGN IN</div>
            
          </div>
        </div>
      </div>
       </div>
    );
};

export default Login;