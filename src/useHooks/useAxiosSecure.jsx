import axios from "axios";

const axiosSecure= axios.create({
    baseURL:'https://final-project-new.vercel.app'
})
const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;