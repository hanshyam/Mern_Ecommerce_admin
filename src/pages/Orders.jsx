import React, { useEffect } from 'react'
import { Table } from "antd";
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../features/order/orderSlice';

const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Product",
    dataIndex: "product",
  },
  {
    title: "Status",
    dataIndex: "status",
  },
];
const data1 = [];
for (let i = 1; i <= 40; i++) {
  data1.push({
    key: i,
    name: `Edward King ${i}`,
    product: 32,
    status: `London, Park Lane no. ${i}`,
  });
}
const Orders = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
      dispatch(getOrders());
  },[])
  const orderState =  useSelector((state)=>state.order.orders);
  console.log(orderState);
  return (
    <div>
        <h3 className="mb-4 title">Orders</h3>
        <div>
        <Table
              columns={columns}
              dataSource={data1}
            />
        </div>
    </div>
  )
}

export default Orders
