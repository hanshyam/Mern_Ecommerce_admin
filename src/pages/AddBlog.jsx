import React, { useState } from "react";
import CustomInput from "../components/CustomInput";
import RichTextEditor from "react-rte";
import { InboxOutlined } from "@ant-design/icons";
import {  Upload } from "antd";
const { Dragger } = Upload;
// import { Stepper,Step } from "react-form-stepper";

const AddBlog = () => {
  const [desc, setDesc] = useState(RichTextEditor.createEmptyValue());

  const handleDesc = (value) => {
    setDesc(value);
  };
  return (
    <div>
      <h3 className="mb-4 title">Add Blog</h3>
      <div>
        <form action="">
          <Dragger className="bg-white">
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
          <div className="mt-3">
            <CustomInput type="text" label="Enter Blog Title" />
          </div>
          <select name="" className="form-control py-3 mb-3" id="">
            <option value="">Select Blog Category</option>
          </select>
          <RichTextEditor value={desc} onChange={handleDesc} />
          <button
            className="btn btn-success border-0 rounded-1 my-5"
            type="submit"
          >
            Add Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
