import axios from "axios";

const axiosPublic=axios.create({
    baseURL:'https://final-project-xi-eight.vercel.app'
})

const useAxios = () => {
    return axiosPublic
};

export default useAxios;