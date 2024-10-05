import { base_url } from "../../utils/base_url";
import axios from 'axios'

const getColors = async()=>{
    const  response = await axios.get(`${base_url}/color/`);
    return response.data;
}

const  colorService = {
    getColors
};

export default colorService;
