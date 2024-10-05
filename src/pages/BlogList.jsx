import React, { useEffect } from 'react'
import { Table } from "antd";
import { getBlogs } from '../features/blog/blogSlice';
import {useDispatch,useSelector} from 'react-redux';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';

const columns = [
  {
    title: "SNo",
    dataIndex: "key",
    sorter: (a,b)=> a.key-b.key
  },
  {
    title: "Title",
    dataIndex: "title",
  },
  {
    title: "Category",
    dataIndex: "category",
  },
  {
    title: "Total Views",
    dataIndex: "views",
    sorter: (a,b)=> a.views-b.views
  },
  {
    title: "Likes",
    dataIndex: "likes",
    sorter: (a,b)=> a.likes-b.likes
  },
  {
    title: "Dislikes",
    dataIndex: "dislikes",
    sorter: (a,b)=> a.dislikes-b.dislikes
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const BlogList = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getBlogs());
  },[])
  const blogState = useSelector((state)=>state.blog.blogs);
  // console.log(blogState)
  
  const data1 = [];
  blogState.forEach((item, index) => {
      data1.push({
        key: index + 1,
        title: item.title,
        category: item.category,
        views: item.numViews,
        likes: item.likes.length,
        dislikes: item.dislikes.length,
        action: (<div><Link style={{fontSize:"20px"}}>
          <FaEdit/>
        </Link>
        <Link  style={{fontSize:"20px"}} className='ms-3 text-danger'>
          <MdDelete/>
        </Link></div>)
      })
  })
  return (
    <div>
        <h3 className="mb-4 title">BlogList</h3>
        <div>
        <Table
              columns={columns}
              dataSource={data1}
            />
        </div>
    </div>
  )
}

export default BlogList
