import { base_url } from "../../utils/base_url";
import axios from "axios";

const getEnquiries =  async () => {
   const response = await axios.get(`${base_url}/enquiry/`)
   return response.data;
}

const enquiryService = {
   getEnquiries,
}

export default enquiryService;
