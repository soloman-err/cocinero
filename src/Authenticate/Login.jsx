import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="hero mt-10">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Please Register!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="Enter email"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
            </div>

            <div className="form-control mt-6">
              <button className="btn bg-amber-700">Submit</button>
            </div>

            <small className="">
              Don't have an account?
              <Link to="/register" className="link link-hover">
                {" "}
                Register
              </Link>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
