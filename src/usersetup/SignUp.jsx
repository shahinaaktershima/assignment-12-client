import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import useAxios from "../useHooks/useAxios";
import Swal from "sweetalert2";


const SignUp = () => {
    const navigate=useNavigate();
    const {signUp,updateUserProfile}=useContext(AuthContext);
    const axiosPublic=useAxios();
    const {
        register,
        handleSubmit,
        reset,
       
        formState: { errors },
      } = useForm();
      
      const onSubmit = (data) => {console.log(data)
     signUp(data.email,data.password)
     .then(res=>{
        console.log(res.user);
        updateUserProfile(data.name,data.photoUrl)
        .then(()=>{
          // create user entry in the database
          const userInfo={
            name:data.name,
            email:data.email,
            photoUrl:data.photoUrl
          } 
      
          axiosPublic.post('/users',userInfo)
          .then(res=>{
            if(res.data.insertedId){
              reset();
              Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "user created successfully",
                  showConfirmButton: false,
                  timer: 1500
                });
                navigate('/')
            }
          })
            console.log('users profile info updated');
           
        })
        .catch(err=>{
            console.log(err);
        })
     
    
     .catch(err=>{
        console.log(err);
     })
    
    }
    
      )}
    
    return (
       <div>
       
         <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex flex-col md:flex-row-reverse">
          <div className="text-center lg:text-left md:w-full">
            <h1 className="text-5xl font-bold">Sign Up NOW!</h1>
           
          </div>
          <div className="card  md:w-1/2 w-full  shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">name</span>
                </label>
                <input type="text" name="name" {...register("name",{ required: true })} placeholder="name" className="input input-bordered"  />
                {errors.name && <span className="text-red-400">This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">name</span>
                </label>
                <input type="text" name="photoUrl" {...register("photoUrl",{ required: true })} placeholder="photoUrl" className="input input-bordered"  />
                {errors.photoUrl && <span className="text-red-400">This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" {...register("email",{ required: true })} name="email" placeholder="email" className="input input-bordered"  />
                {errors.email && <span className="text-red-600">This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" {...register("password",{ required: true ,maxLength: 20,minLength:6 })} name="password" placeholder="password" className="input input-bordered"  />
                { errors.password?.type === "required" && 
        <p className="text-red-400">password must be 6 characters</p>
                }
                {/* { errors.password?.type === "pattern" && 
        <p className="text-red-400">password must be uppercase lowercase and one spacial character </p>
                } */}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
             
              <div className="form-control mt-6">
                
                <input  className="btn btn-primary" type="submit" value="SignUp" />
              </div>
            </form>
            <p className="text-center"><small>Already have an account? <Link className='text-purple-600 font-bold' to='/login'>Go to Login page</Link></small></p>
            <div className="divider text-center"></div>
    
          </div>
        </div>
      </div>
       </div>

    );
};

export default SignUp;