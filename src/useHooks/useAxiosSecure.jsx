import axios from "axios";

const axiosSecure= axios.create({
    baseURL:'https://final-project-xi-eight.vercel.app'
})
const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;