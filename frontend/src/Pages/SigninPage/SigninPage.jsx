import { set, useForm } from "react-hook-form";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../../Contexts/UserContext/UserContext";


function Signin() {
    let {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    let navigate = useNavigate();

    let [user,setUser]= useContext(UserContext)
    let [flag,setFlag] = useState(0)

    async function handleFormSubmit(User) {
        console.log(User)
        let res = await axios.post("http://127.0.0.1:8000/user/signin",User)
        console.log(res.data)
        if(res.data.length === 0 ){
            setFlag(1)
        }
        else{
            setFlag(0)
            setUser(res.data)
            navigate('/')
        }
    }
  return (
    <div className="h-screen w-screen bg-slate-800 fixed">
      <div className="flex h-screen">
      <div className="rounded-md m-auto text-white ">
        <div className="text-center"> <h1 className=" mx-6 my-3 font-semibold text-2xl">Sign In</h1></div>
        
        <form className="px-10 m-1 w-screen max-w-lg" onSubmit={handleSubmit(handleFormSubmit)}>
          {
            flag=== 1 && <h1 className="text-red-700 font-semibold">Invalid Details</h1>
          }
          <div className="w-full">
            {" "}
            <h1 className="text-xl  font-semibold">E-mail</h1>
            <input
              className=" w-full p-2 rounded-md border-2 border-black"
              type="text"
              {...register("email", { required: true })}
            ></input>
          </div>
          {errors.email?.type === "required" && (
            <h3 className=" text-red-700">*required</h3>
          )}
          <div className="py-3">
            <h1 className="text-xl font-semibold">Password</h1>
            <input
              placeholder="password"
              id="Pass"
              className="text-black w-full p-2 rounded-md border-2 border-gray-500"
              type="text"
              {...register("password", { required: true, minLength: 8 })}
            ></input>
            {errors.Pass?.type === "required" && (
              <h3 className=" text-red-700">*required</h3>
            )}
            {errors.Pass?.type === "minLength" && (
              <h3 className=" text-red-700">
                Password must be atleat 8 cahracters
              </h3>
            )}
          </div>
          <div className="text-center p-4">
           <button
              type="submit"
              className=" bg-blue-600 w-[50%] text-lg rounded-xl p-3 text-white hover:bg-blue-700 "
            >
              Sign In
            </button>
          </div>
        </form>
        <p className="text-center text-lg py-3">
          Don't have an account ?
          <NavLink
            to="/Signup"
            className="underline px-3 text-blue-500 font-semibold text-lg"
          >
            Sign up
          </NavLink>
        </p>
      </div>
      </div>
    </div>
  );
}

export default Signin;