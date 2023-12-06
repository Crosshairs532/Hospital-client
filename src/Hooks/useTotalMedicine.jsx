import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useTotalMedicine = () => {
    const { data, isFetched } = useQuery({
        queryKey: ['allmedicine'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:3000/medicine');
            return res.data;
        }
    })
    return [data, isFetched]

};

export default useTotalMedicine;