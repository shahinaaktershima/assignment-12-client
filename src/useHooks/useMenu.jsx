import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";


const useMenu = () => {
    const axiosPublic=useAxios();

    const {data:meals=[],isPending:loading,refetch}=useQuery({
        queryKey:['meals'],
        queryFn:async()=>{
            const res=await axiosPublic.get('/meals');
            return res.data;
        }
    })

    return [meals,loading,refetch]
};

export default useMenu;