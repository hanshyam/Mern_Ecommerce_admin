import React from "react";
import { BsArrowDownRight } from "react-icons/bs";
import { Column } from "@ant-design/plots";
import { Table } from "antd";
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
for (let i = 1; i < 45; i++) {
  data1.push({
    key: i,
    name: `Edward King ${i}`,
    product: 32,
    status: `London, Park Lane no. ${i}`,
  });
}
const Dashboard = () => {
  const config = {
    data: [
      { type: "Jan", Sales: 0.08167 },
      { type: "Feb", Sales: 0.01492 },
      { type: "Mar", Sales: 0.02782 },
      { type: "Apr", Sales: 0.04253 },
      { type: "May", Sales: 0.12702 },
      { type: "Jun", Sales: 0.02288 },
      { type: "Jul", Sales: 0.02015 },
      { type: "Aug", Sales: 0.06094 },
      { type: "Sep", Sales: 0.06966 },
      { type: "Oct", Sales: 0.00153 },
      { type: "Nov", Sales: 0.00772 },
      { type: "Dec", Sales: 0.04025 },
    ],
    xField: "type",
    yField: "Sales",
    label: {
      text: (d) => `${(d.Sales * 100).toFixed(1)}%`,
      textBaseline: "bottom",
    },
    axis: {
      x: {
        label: {
          autoHide: true,
          autoRotate: false,
        },
      },
      y: {
        labelFormatter: ".0%",
      },
    },
    style: {
      radiusTopLeft: 5,
      radiusTopRight: 5,
      fill: "#ffd333",
    },
    meta: {
      type: {
        alias: "Month",
      },
      Sales: {
        alias: "Income",
      },
    },
  };
  return (
    <>
      <div>
        <h3 className="title">Dashboard</h3>
        <div className="d-flex justify-content-between align-items-center gap-3 mb-4">
          <div className="d-flex flex-grow-1 justify-content-between align-items-end bg-white p-3 rounded-3 ">
            <div>
              <p className="title-p">Total sells</p>
              <h2 className="mb-0 sub-title">$1100</h2>
            </div>
            <div className="d-flex flex-column align-items-end">
              <h6 className="green">
                {" "}
                <BsArrowDownRight /> 32%
              </h6>
              <p className="mb-0 title-p">Compared to August 2024</p>
            </div>
          </div>
          <div className="d-flex flex-grow-1 justify-content-between align-items-end bg-white p-3 rounded-3">
            <div>
              <p className="title-p">Average order value</p>
              <h2 className="mb-0 sub-title">$1100</h2>
            </div>
            <div className="d-flex flex-column align-items-end">
              <h6 className="green">
                {" "}
                <BsArrowDownRight /> 32%
              </h6>
              <p className="mb-0 title-p">Compared to August 2024</p>
            </div>
          </div>
          <div className="d-flex flex-grow-1 justify-content-between align-items-end bg-white p-3 rounded-3">
            <div>
              <p className="title-p">Total orders</p>
              <h2 className="mb-0 sub-title">$1100</h2>
            </div>
            <div className="d-flex flex-column align-items-end">
              <h6 className="green">
                {" "}
                <BsArrowDownRight /> 32%
              </h6>
              <p className="mb-0 title-p">Compared to August 2024</p>
            </div>
          </div>
        </div>

        <div className="mt-5">
            <h3 className="mb-3 title">Income Statics</h3>
            <div className="bg-white rounded-3 p-3">
              <Column {...config} />
            </div>
          </div>

          <div className="mt-5">
            <h3 className="mb-3 title">Recent Orders</h3>
            <div>
              <Table columns={columns} dataSource={data1} />
            </div>
          </div>
      </div>
    </>
  );
};

export default Dashboard;
