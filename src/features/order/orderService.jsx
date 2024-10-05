import { base_url } from "../../utils/base_url";
import axios from "axios";

const getOrders =  async () => {
    const response = await  axios.get(`${base_url}/order/`);
    return response.data;
}

const orderService = {
    getOrders,
} 

export default orderService;