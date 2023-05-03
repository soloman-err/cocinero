import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Form, Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const provider = new GoogleAuthProvider();

const Login = () => {
  const { googleSignIn } = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hero mt-10">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Please Login!</h1>
        </div>
        <Form className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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

            <small className="link no-underline">Forgot password?</small>

            <div className="form-control mt-6">
              <button className="btn bg-amber-700">Submit</button>
            </div>

            <small className="">
              Don't have an account?
              <Link to="/register" className="link no-underline">
                {" "}
                Register
              </Link>
            </small>
          </div>
          <div className="flex justify-center gap-3 mb-5">
            <button onClick={handleGoogleSignIn} className="border p-2 rounded">
              {" "}
              <FaGoogle />
            </button>
            <button className="border p-2 rounded">
              <FaGithub />
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
