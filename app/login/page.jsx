"use client";
import "@/styles/globals.css";
import "@/styles/components/Login.scss";
import Image from "next/image";
import { MdOutlineWavingHand } from "react-icons/md";
import { useForm } from "react-hook-form";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onFormLogin = (data) => {
    console.log(data);
  };

  return (
    <>
      <Header />
      <section className="boxLogin p-3 my-16 sm:m-auto">
        <div>
          <div className="headerText mb-2">
            <h1>welcome</h1>
            <span>
              <MdOutlineWavingHand />
            </span>
          </div>
          <p>please login here</p>
        </div>
        <form onSubmit={handleSubmit(onFormLogin)} className="formInLogin">
          <lable>email address</lable>
          <input
            className="inputLogin border-2 border-[#737373] outline-none mb-5 p-2"
            type="email"
            placeholder="enter email"
            {...register("email", {
              required: "email is required",
              pattern: {
                value: /[A-Za-z0-9_]+/,
                message: "Invalid email",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-600 mb-8">{errors.email?.message}</p>
          )}
          <lable>password</lable>
          <input
            className="inputLogin border-2 border-[#737373] outline-none mb-5 p-2"
            type="password"
            placeholder="enter password"
            {...register("password", {
              required: "password is required",
              pattern: {
                value:
                  /^(?=^.{6,}$)((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.*$/,
                message: "Invalid password",
              },
            })}
          />
          {errors.password && (
            <p className="text-red-600 mb-8">{errors.password?.message}</p>
          )}
          <div className="boxInfo">
            <div>
              <input className="w-auto mr-1" type="checkbox" />
              <lable>remember me</lable>
            </div>
            <p>forget password ?</p>
          </div>

          <button
            className="bg-black text-white py-3 px-5 my-5 rounded-md"
            type="submit"
          >
            Login
          </button>
        </form>
      </section>
      <Footer />
    </>
  );
};

export default Login;
