import React, { useState } from "react";
import CustomInput from "../components/CustomInput";
import RichTextEditor from "react-rte";
import { InboxOutlined } from "@ant-design/icons";
import { Upload } from "antd";
const { Dragger } = Upload;

const AddProduct = () => {
  const [desc, setDesc] = useState(RichTextEditor.createEmptyValue());

  const handleDesc = (value) => {
    setDesc(value);
  };
  return (
    <div>
      <h3 className="mb-4 title">Add Product</h3>
      <div>
        <form action="">
          <div className="mt-3">
            <CustomInput type="text" label="Enter Product Title" />
          </div>

          <select name="" className="form-control py-3 mb-3" id="">
            <option value="">Select  Brand</option>
          </select>
          <select name="" className="form-control py-3 mb-3" id="">
            <option value="">Select  Category</option>
          </select>
          <select name="" className="form-control py-3 mb-3" id="">
            <option value="">Select Colors</option>
          </select>
          
          <div className="mt-3">
            <CustomInput type="number" label="Enter Product Price in Rupee" />
          </div>
          <div className="mt-3">
            <CustomInput type="number" label="Enter Product Quantity" />
          </div>
          <div className="mb-3">
            <RichTextEditor
              value={desc}
              onChange={handleDesc}
              placeholder="Product Description"
            />
          </div>
          <Dragger>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload. Strictly prohibited from
              uploading company data or other banned files.
            </p>
          </Dragger>
          <button className="btn btn-success border-0 rounded-3 my-5">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
