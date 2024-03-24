import { useEffect, useState } from "react";
import useAxios from "../useHooks/useAxios";
import { MdDelete } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import Swal from "sweetalert2";


const AllUsers = () => {
    const [users,setUsers]=useState([]);
    const axios=useAxios()
   useEffect(()=>{
    axios.get('/users')
    .then(res=>setUsers(res.data))
   },[])

    const handleDeleteUser=user=>{
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
                  
                 axios.delete(`/users/${user._id}`)
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
        const handleMakeAdmin=user=>{
                axios.patch(`/users/admin/${user._id}`)
                .then(res=>{
                    console.log(res.data)
                    if(res.data.modifiedCount>0){
                       
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${user.name} is an admin now!`,
                            showConfirmButton: false,
                            timer: 1500
                          });
                    }
                })
               
               
            }
    return (
        <div>
           <div className="flex justify-evenly my-8">
            <h2 className="text-4xl font-bold">All users</h2>
           <h2 className="text-4xl font-bold">Total users:{users.length}</h2>
           </div>
           <div className="overflow-x-auto w-full mx-auto">
  <table className="table overflow-x-auto">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>email</th>
         <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
     <tbody>
      {/* row 1 */}
      {
        users.map((user,index)=><tr key={user._id}>
            <th>{index+1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td className="text-purple-400 font-bold">
           {user.role==='admin'?'Admin': <button onClick={()=>handleMakeAdmin(user)} className="btn btn-ghost btn-xs  bg-orange-400 text-white text-xl flex items-center">
          <FaRegUser></FaRegUser>
              </button>}
            </td>
            <td> <button  onClick={()=>handleDeleteUser(user)} className="btn bg-orange-400 text-white text-xl flex items-center  btn-ghost btn-xs">
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

export default AllUsers;