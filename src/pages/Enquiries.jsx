import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getEnquiries } from "../features/enquiry/enquirySlice";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
    sorter:  (a, b) => a.name.localeCompare(b.name),
  },
  {
    title: "Email",
    dataIndex: "email",
    sorter:  (a, b) => a.email.localeCompare(b.email),
  },
  {
    title: "Mobile",
    dataIndex: "mobile",
    sorter: (a,b) => a.mobile - b.mobile
  },
  {
    title: "Comment",
    dataIndex: "comment",
  },
  {
    title: "Status",
    dataIndex: "status",
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const Enquiries = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEnquiries());
  }, []);
  const EnquiryState = useSelector((state) => state.enquiry.enquiries);
  const data1 = [];
  for (let i = 0; i < EnquiryState.length; i++) {
    data1.push({
      key: i+1,
      name:EnquiryState[i].name,
      email:EnquiryState[i].email,
      mobile:EnquiryState[i].phone,
      comment:EnquiryState[i].comment,
      status:EnquiryState[i].status,
      action:(<div><Link style={{fontSize:"20px"}}>
      <FaEdit/>
    </Link>
    <Link  style={{fontSize:"20px"}} className='ms-3 text-danger'>
      <MdDelete/>
    </Link></div>),
    });
  }
  return (
    <div>
      <h3 className="mb-4 title">Enquiries</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default Enquiries;
