import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate, NavLink } from "react-router-dom";

function Signup() {
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let navigate = useNavigate();

  

  async function registerSubmit(newUser) {
    console.log(newUser);
    try {
      let res = await axios.post("http://127.0.0.1:8000/user/signup", newUser);
    } catch (err) {
      console.log(err);
    }
    navigate("/signin");
  }
  return (
    <div className=" bg-slate-800 w-screen h-screen fixed text-white">

      <div className=" border-black rounded-md my-60 w-full max-w-lg m-auto ">
        <h1 className="text-3xl font-semibold m-3 mx-4">Create Account</h1>
        <form
          className="px-10"
          onSubmit={handleSubmit(registerSubmit, () => {
            console.log("error");
          })}
        >
          <div className="my-4">
            <label htmlFor="name" className=" font-bold text-lg">Name : </label>
            <input
              placeholder="Enter name"
              className="name w-full p-2 outline-none text-black rounded-sm"
              type="text"
              {...register("name", { required: true })}
            ></input>
            {errors.name?.type === "required" && (
              <h3 className="px-1 text-sm  text-red-600">! Enter your name</h3>
            )}
          </div>
          <div className="my-4">
            {/* <h1 className="font-semibold ">Email</h1> */}
            <label htmlFor="email" className="font-bold text-lg">Email : </label>
            <input
              placeholder="Enter email"
              className="email w-full p-2 outline-none text-black  rounded-sm"
              type="email"
              {...register("email", { required: true, minLength: 8 })}
            ></input>
            {errors.email?.type === "required" && (
              <h3 className="px-1 text-sm  text-red-600">! Enter your email</h3>
            )}
          </div>
          <div className="my-4">
            <label htmlFor="password" className="font-bold text-lg">Password</label>
            <input
              placeholder="password"
              className="password w-full outline-none text-gray p-2 rounded-sm"
              type="text"
              {...register("password", { required: true, minLength: 8 })}
            ></input>
            {errors.password?.type === "required" && (
              <h3 className="px-1 text-sm  text-red-600">
                ! Enter your password
              </h3>
            )}
            {errors.password?.type === "minLength" && (
              <h3 className="px-1 text-sm  text-red-600">
                Password must be atleat 8 characters
              </h3>
            )}
          </div>
          {/* <div className='my-4'>
            <h1 className='font-semibold m-2 '> Re-Enter Password</h1>
            <input  id='Pass' className='w-full border-gray-500 border-2  shadow-sky-600 shadow-md text-black p-1 rounded-sm' type='password' {...register('Pass', {required:true, minLength:8})}></input>
            {errors.Pass?.type ==='required' && (<h3 className='px-1 text-sm  text-red-600'>! Enter your password</h3>)}
            {errors.Pass?.type=== 'minLength' && (<h3 className='px-1 text-sm  text-red-600'>Password must be atleat 8 cahracters</h3>)}
            </div>
            <div>*/}

          <div className="text-center">
            <button
              type="submit"
              className=" bg-gray-600 text-lg rounded-xl p-3 text-white hover:bg-sky-600     "
            >
              Sign Up
            </button>
          </div>
        </form>
        <p className="text-center text-lg py-3">
          Already Registered !
          <NavLink
            to="/Signin"
            className="underline px-3 text-blue-700 font-semibold text-lg">
            Login
          </NavLink>
        </p>
      </div>
    </div>
  );
}

export default Signup;
