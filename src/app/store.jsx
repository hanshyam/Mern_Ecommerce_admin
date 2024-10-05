import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../features/auth/authSlice'
import customerReducer from '../features/customers/customerSlice'
import productReducer from '../features/product/productSlice'
import brandReducer from '../features/brand/brandSlice'
import blogCategoryReducer from '../features/blogCategory/blogCategorySlice'
import productCategoryReducer from '../features/productCategory/productCategorySlice'
import colorReducer from '../features/color/colorSlice'
import blogReducer from '../features/blog/blogSlice'
import orderReducer from '../features/order/orderSlice'
import enquiryReducer from '../features/enquiry/enquirySlice'

export const store = configureStore({ 
    reducer: {
        auth: authReducer,
        customer: customerReducer,
        product: productReducer,
        brand: brandReducer,
        bCategory: blogCategoryReducer,
        pCategory: productCategoryReducer,
        color: colorReducer,
        blog: blogReducer,
        order: orderReducer,
        enquiry: enquiryReducer,
    },
 });
