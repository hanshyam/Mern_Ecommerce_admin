import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getBrands } from "../features/brand/brandSlice";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import {Link} from "react-router-dom"

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
    title: "Action",
    dataIndex: "action",
  },
];

const BrandList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBrands());
  }, []);

  const brandState = useSelector((state) => state.brand.brands);
  const data1 = [];
  brandState.map((item, index) => {
    data1.push({
      key: index + 1,
      name: item.title,
      action: (<div><Link style={{fontSize:"20px"}}>
      <FaEdit/>
    </Link>
    <Link  style={{fontSize:"20px"}} className='ms-3 text-danger'>
      <MdDelete/>
    </Link></div>),
      });
  })

  return (
    <div>
      <h3 className="mb-4 title">Brand List</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default BrandList;
