import React, { useEffect } from "react";
import CustomInput from "../components/CustomInput";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useDispatch,useSelector } from "react-redux";
import { login } from "../features/auth/authSlice";


const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let schema = yup.object().shape({
    email: yup
      .string()
      .email("Email should be valid")
      .required("Email is required"),
    password: yup.string().required("Password is required"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(login(values))
    },
  });
 const {user,isLoading,isError,isSuccess,message} = useSelector((state)=>state.auth);
  
  useEffect(()=>{
    if(isSuccess){
        navigate("admin");
    }else {
      navigate("");
    }
  },[user,isLoading,isError,isSuccess,message])

  return (
    <div className="py-5 background-yellow min-h-100">
      <div className="my-5 w-25 rounded-3 bg-white p-3 mx-auto">
        <h3 className="text-center">Login</h3>
        <p className="text-center">Login to your account to continue.</p>
        <div className="error text-center">
          {message.message == "Rejected" ?"you are not an Admin":""}
        </div>
        <form action="" onSubmit={formik.handleSubmit}>
          <CustomInput
            name="email"
            type="email"
            label="Email Address"
            i_id="email"
            onCh={formik.handleChange("email")}
            val={formik.values.email}
          />
          <div className="error">
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
          </div>
          <CustomInput
            name="password"
            type="password"
            label="Password"
            i_id="pass"
            onCh={formik.handleChange("password")}
            val={formik.values.password}
          />
          <div className="error">
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
          </div>
          <div className="mb-3 text-end">
            <Link to="/forget-password">forget password?</Link>
          </div>
          <button
            // to="/admin"
            className="border-0 px-3 py-2 background-yellow text-white fw-bold w-100"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
