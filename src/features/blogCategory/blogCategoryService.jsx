import axios from 'axios'
import {base_url} from '../../utils/base_url';

const getBlogCategory  = async () => {
  const response = await axios.get(`${base_url}/bcategory/`);
   return response.data;
}

const blogCategoryService = {
     getBlogCategory,
};

export default blogCategoryService;