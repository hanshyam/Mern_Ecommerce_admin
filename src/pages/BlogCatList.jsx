import React,{useEffect} from 'react'
import { Table } from "antd";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import {Link} from "react-router-dom"
import { getBlogCategory } from '../features/blogCategory/blogCategorySlice';
import { useDispatch, useSelector } from 'react-redux';

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
const BlogCatList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlogCategory());
  }, []);

  const blogCategoryState = useSelector((state) => state.bCategory.blogCategory);
  const data1 = [];
  blogCategoryState.map((item, index) => {
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
        <h3 className="mb-4 title">Blog Category List</h3>
        <div>
        <Table
              columns={columns}
              dataSource={data1}
            />
        </div>
    </div>
  )
}

export default BlogCatList
