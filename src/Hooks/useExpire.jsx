import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const useExpire = () => {
    const { data: expire, isFetched: ExpireisFetched } = useQuery({
        queryKey: ['allexpired'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:3000/expired');
            console.log(res.data);
            return res.data;
        }
    })
    return [expire, ExpireisFetched]
};

export default useExpire;