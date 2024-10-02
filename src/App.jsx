import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Login from './pages/Login'
import ForgetPassword from './pages/ForgetPassword'
import ResetPassword from './pages/ResetPassword'
import MainLayout from './components/MainLayout'
import Dashboard from './pages/Dashboard'
import Enquiries from './pages/Enquiries'
import BlogList from './pages/BlogList'
import BlogCatList from './pages/BlogCatList'
import Orders from './pages/Orders'
import Customers from './pages/Customers'
import ProductList from './pages/ProductList'
import ColorList from './pages/ColorList'
import CategoryList from './pages/CategoryList'
import BrandList from './pages/BrandList'
import AddBlog from './pages/AddBlog'
import AddBlogCat from './pages/AddBlogCat'
import AddColor from './pages/AddColor'
import AddCategory from './pages/AddCategory'
import AddBrand from './pages/AddBrand'
import AddProduct from './pages/AddProduct'

const App = () => {
  return (
    <>
      <Routes>
         <Route path='/' element={<Login/>}/>
         <Route path='/forget-password' element={<ForgetPassword/>}/>
         <Route path='/reset-password' element={<ResetPassword/>}/>
         <Route  path='/admin' element={<MainLayout/>}>
           <Route index element={<Dashboard/>}/>
           <Route path='enquiries' element={<Enquiries/>}/>
           <Route path='blog-list' element={<BlogList/>}/>
           <Route path='blog-category-list' element={<BlogCatList/>}/>
           <Route path='orders' element={<Orders/>}/>
           <Route path='customers' element={<Customers/>}/>
           <Route path='product-list' element={<ProductList/>}/>
           <Route path='color-list' element={<ColorList/>}/>
           <Route path='category-list' element={<CategoryList/>}/>
           <Route path='color-list' element={<ColorList/>}/>
           <Route path='brand-list' element={<BrandList/>}/>
           <Route path='blog' element={<AddBlog/>}/>
           <Route path='color' element={<AddColor/>}/>
           <Route path='blog-category' element={<AddBlogCat/>}/>
           <Route path='brand' element={<AddBrand/>}/>
           <Route path='category' element={<AddCategory/>}/>
           <Route path='product' element={<AddProduct/>}/>
         </Route>  
      </Routes>
    </>
  )
}

export default App
