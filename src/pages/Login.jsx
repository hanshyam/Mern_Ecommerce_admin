import React from "react";
import CustomInput from "../components/CustomInput";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="py-5 background-yellow min-h-100">
      <div className="my-5 w-25 rounded-3 bg-white p-3 mx-auto">
        <h3 className="text-center">Login</h3>
        <p className="text-center">Login to your account to continue.</p>
        <form action="">
          <CustomInput type="email" label="Email Address" i_id="email" />
          <CustomInput type="password" label="Password" i_id="pass" />
          <div className="mb-3 text-end">
          <Link to="/forget-password">forget password?</Link>
          </div>
          <Link to='/admin'
            className="border-0 px-3 py-2 background-yellow text-white fw-bold w-100"
            type="submit"
          >
            Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
