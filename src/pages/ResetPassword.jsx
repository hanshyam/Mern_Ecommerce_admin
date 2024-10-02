import React from 'react'
import CustomInput from '../components/CustomInput'
const ResetPassword = () => {
  return (
    <div className="py-5 background-yellow min-h-100">
      <div className="my-5 w-25 rounded-3 bg-white p-3 mx-auto">
        <h3 className="text-center">Reset Password</h3>
        <p className="text-center">Enter the new password</p>
        <form action="">
          <CustomInput type="password" label="New Password" i_id="pass" />
          <CustomInput type="password" label="Confirm Password" i_id="confirmpass" />
          <button
            className="border-0 px-3 py-2 background-yellow text-white fw-bold w-100"
            type="submit"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  )
}

export default ResetPassword
