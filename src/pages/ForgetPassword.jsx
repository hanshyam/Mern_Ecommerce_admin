import React from 'react'
import CustomInput from '../components/CustomInput';

const ForgetPassword = () => {
  return (
    <div className='py-5 background-yellow min-h-100'>
       <div className='my-5 w-25 rounded-3 bg-white p-3 mx-auto'>
          <h3 className='text-center'>Forget password</h3>
          <p className='text-center'>Enter your registered mail to get the otp</p>
          <form action="">
          <CustomInput type='email' label='Email Address' i_id='email'/>
          <button className="border-0 px-3 py-2 background-yellow text-white fw-bold w-100" type='submit'>
             Send
          </button>
          </form>
       </div>
    </div>
  )
}

export default ForgetPassword
