import React, { useContext, useState } from "react";
import Header from "../Header/Header";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

import { ToastContainer, toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Authentication/AuthProvider";
const ContactUs = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const router = useNavigate();
  const { handleEmailPasswordSignUp, handleGoogleLogin } =
    useContext(AuthContext);
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const GoogleLogin = async () => {
    handleGoogleLogin().then((result) => {
      toast.success("User Login Successfully");
      router("/");
    });
  };
  const onSubmit = async (data, e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    handleEmailPasswordSignUp(email, password)
      .then((data) => {
        router("/login");
      })
      .catch((err) => {
        toast.error(err.message);
      });
    if (password !== confirmPassword) {
      setErrorMessage("Password Did Not Match");
      return;
    }
  };
  const handleToLocalDB = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
    const data = { name, email, message };
    localStorage.setItem("Data", JSON.stringify(data));
    form.reset();
  };
  return (
    <div>
      <ToastContainer />
      <Header />
      <div className="flex justify-center items-center gap-6">
        <div>
          {" "}
          <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
              <img
                src="/Asset/newsletter.jpg"
                className="max-w-sm rounded-lg shadow-2xl"
              />
              <div>
                <h1 className="text-5xl font-bold">Leave Your Message!</h1>
                <form onSubmit={handleToLocalDB}>
                  <div className="my-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      name="name"
                      className="input input-bordered input-primary w-full max-w-xs"
                    />
                  </div>
                  <div className="my-4">
                    <input
                      type="email"
                      placeholder="Your Email"
                      name="email"
                      className="input input-bordered input-primary w-full max-w-xs"
                    />
                  </div>
                  <div className="my-4">
                    <textarea
                      className="textarea textarea-accent text-[20px] font-bold"
                      placeholder="Your Message"
                      name="message"
                      cols={36}
                    ></textarea>
                  </div>
                  <button className="btn btn-outline btn-primary w-full">
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-center text-blue-900 mt-8">
            Register
          </h2>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">Name</span>
                  </label>
                  {errors.name && (
                    <span className="text-red-600">Name is required</span>
                  )}
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="input input-bordered font-bold"
                    required
                    {...register("name", { required: true })}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">Email</span>
                  </label>
                  {errors.email && (
                    <span className="text-red-600">Email is required</span>
                  )}
                  <input
                    type="text"
                    placeholder="Your Email"
                    className="input input-bordered font-bold"
                    required
                    {...register("email", { required: true })}
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">Password</span>
                  </label>
                  {errors.password && (
                    <span className="text-red-600 font-bold">
                      1.Password Must Have 8 Characters long & Not exceed 20
                      Character
                      <br /> 2.One Uppercase & One Lowercase letter Required{" "}
                      <br /> 3.Must Have One Special Character <br /> 4.Must be
                      Includes Number{" "}
                    </span>
                  )}
                  <input
                    type="password"
                    placeholder="Password"
                    className="input input-bordered font-bold"
                    name="password"
                    required
                    {...register("password", {
                      required: true,
                      maxLength: 20,
                      minLength: 8,
                      pattern:
                        /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z].)/i,
                    })}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">
                      Confirm Password
                    </span>
                  </label>

                  <span className="text-red-600 font-bold">{errorMessage}</span>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="input input-bordered font-bold"
                    name="confirmPassword"
                    required
                    {...register("confirmPassword", {
                      required: true,
                    })}
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Sign Up</button>
                </div>
                <div className="divider text-slate-900">OR</div>
              </div>

              {errors.exampleRequired && <span>This field is required</span>}
            </form>
            <div className="form-control">
              <div
                onClick={GoogleLogin}
                className=" my-4 bg-gradient-to-r from-purple-500 to-orange-500 rounded p-4 font-bold"
              >
                {" "}
                Continue With{" "}
                <button className="font-bold">
                  <FaGoogle className="text-[26px] text-[#F4B400] mt-2" />
                </button>
              </div>
              <Link to={"/login"} className="text-slate-900 font-bold">
                Already Have An Account Please{" "}
                <button className="btn btn-primary"> Login</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
