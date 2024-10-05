import React, { useEffect } from 'react'
import { Table } from "antd";
import {MdDelete} from 'react-icons/md';
import {FaEdit} from 'react-icons/fa';
import {useDispatch, useSelector} from 'react-redux';
import { getProducts } from '../features/product/productSlice';
import Link from 'antd/es/typography/Link';

const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Title",
    dataIndex: "title",
    sorter: (a,b)=>a.title - b.title,
  },
  {
    title: "Brand",
    dataIndex: "brand",
  },
  {
    title: "Category",
    dataIndex: "category",
  },
  {
    title: "Price",
    dataIndex: "price",
    sorter: (a,b)=>a.price.split(' ')[1] - b.price.split(' ')[1],

  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    sorter: (a,b)=>a.quantity - b.quantity
  },
  {
    title: "Color",
    dataIndex: "color",
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];
const ProductList = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
     dispatch(getProducts())
  },[])
  const productState = useSelector((state)=>state.product.products);
  const data1 = [];
  for (let i = 0; i < productState.length; i++) {
  data1.push({
    key: i+1,
    title: productState[i].title,
    brand: productState[i].brand,
    price: `$ ${productState[i].price}`,
    quantity: productState[i].quantity,
    color: productState[i].color,
    category: productState[i].category,
    action: (<div><Link style={{fontSize:"20px"}}>
      <FaEdit/>
    </Link>
    <Link  style={{fontSize:"20px"}} className='ms-3 text-danger'>
      <MdDelete/>
    </Link></div>),
  });
}
  return (
    <div>
        <h3 className="mb-4 title">Products List</h3>
        <div>
        <Table
              columns={columns}
              dataSource={data1}
            />
        </div>
    </div>
  )
}

export default ProductList
