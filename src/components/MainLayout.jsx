import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { Link, useNavigate } from "react-router-dom";
import {
  AiOutlineDashboard,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import { SiBrandfolder } from "react-icons/si";
import { MdCategory } from "react-icons/md";
import { IoIosColorPalette, IoIosNotifications } from "react-icons/io";
import { FaBlog, FaBloggerB, FaBoxOpen } from "react-icons/fa";
import { GoCommentDiscussion } from "react-icons/go";
import { Outlet } from "react-router-dom";
// import images from "../assets/image.js";
import profile_image from '../assets/image'

const { Header, Sider, Content } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical">
          <h3 className="text-white text-center mb-0 fs-7">
            <span className="logo">SwiftShop.</span>
            <span className="lg-logo">SS.</span>
          </h3>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[""]}
          onClick={({ key }) => {
            if (key == "signout") {
            } else {
              navigate(key);
            }
          }}
          items={[
            {
              key: "",
              icon: <AiOutlineDashboard className="fs-4" />,
              label: "Dashboard",
            },
            {
              key: "customers",
              icon: <AiOutlineUser className="fs-4" />,
              label: "Customer",
            },
            {
              key: "catalog",
              icon: <AiOutlineShoppingCart className="fs-4" />,
              label: "Catalog",
              children: [
                {
                  key: "product",
                  icon: <AiOutlineShoppingCart className="fs-4" />,
                  label: "Add Product",
                },
                {
                  key: "product-list",
                  icon: <AiOutlineShoppingCart className="fs-4" />,
                  label: "Product list",
                },
                {
                  key: "brand",
                  icon: <SiBrandfolder className="fs-4" />,
                  label: "Add Brand",
                },
                {
                  key: "brand-list",
                  icon: <SiBrandfolder className="fs-4" />,
                  label: "Brand list",
                },
                {
                  key: "category",
                  icon: <MdCategory className="fs-4" />,
                  label: "Add Category",
                },
                {
                  key: "category-list",
                  icon: <MdCategory className="fs-4" />,
                  label: "Category list",
                },
                {
                  key: "color",
                  icon: <IoIosColorPalette className="fs-4" />,
                  label: "Add Color",
                },
                {
                  key: "color-list",
                  icon: <IoIosColorPalette className="fs-4" />,
                  label: "Color list",
                },
              ],
            },
            {
              key: "orders",
              icon: <FaBoxOpen className="fs-4" />,
              label: "Order",
            },
            {
              key: "blogs",
              icon: <FaBloggerB className="fs-4" />,
              label: "Blogs",
              children: [
                {
                  key: "blog",
                  icon: <FaBloggerB className="fs-4" />,
                  label: "Add Blog",
                },
                {
                  key: "blog-list",
                  icon: <FaBloggerB className="fs-4" />,
                  label: "Blog List",
                },
                {
                  key: "blog-category",
                  icon: <FaBloggerB className="fs-4" />,
                  label: "Add Blog Category",
                },
                {
                  key: "blog-category-list",
                  icon: <FaBloggerB className="fs-4" />,
                  label: "Blog Category List",
                },
              ],
            },
            {
              key: "enquiries",
              icon: <GoCommentDiscussion className="fs-4" />,
              label: "Enquiry",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          className="d-flex justify-content-between ps-3 pe-5"
          style={{ padding: 0, background: colorBgContainer }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <div className="d-flex gap-4 align-items-center">
            <div className="position-relative">
              <IoIosNotifications className="fs-4" />
              <span className="badge bg-warning rounded-circle p-1 position-absolute">
                3
              </span>
            </div>
            <div className="d-flex gap-3 align-items-center dropdown">
              <div>
                <img
                  width={38}
                  height={38}
                  src={profile_image}
                  alt="Ghanshyam Patidar"
                />
              </div>
              <div
                className="d-flex flex-column justify-content-center align-items-start gap-2"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <h5 className="mb-0">Ghanshyam Patidar</h5>
                <p className="mb-0">ghanshyampatidar3011@gmail.com</p>
              </div>
              <div className="dropdown-menu">
                <li>
                  <Link
                    className="dropdown-item"
                    style={{ height: "auto", lineHeight: "20px" }}
                    to='/'
                  >
                    View Profile
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    style={{ height: "auto", lineHeight: "20px" }}
                    to='/'
                  >
                    Sign Out
                  </Link>
                </li>
              </div>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
