import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useStock = () => {
    const { data: stock, isFetched: stockisFetched } = useQuery({
        queryKey: ['allstock'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:3000/stock');
            return res.data;
        }
    })
    return [stock, stockisFetched];
};

export default useStock;