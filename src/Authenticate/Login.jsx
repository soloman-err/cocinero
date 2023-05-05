import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Form, Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {
  // const [email, setEmail] = useState();
  const { googleSignIn, githubSignIn, emailPassLogIn, resetPassword } =
    useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  console.log(location, from);

  // Login with Email & Password:
  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    if (email && password) {
      emailPassLogIn(email, password)
        .then((result) => {
          form.reset();
          navigate(from);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  // Forgot Password:
  // const handleForgotPass = (event) => {
  //   console.log(event.form);
  //   const form = event.target;
  //   const email = form.email.value;
  //   resetPassword(email)
  //     .then((result) => {
  //       console.log(result);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // Google sign in:
  const handleGoogleSignIn = () => {
    googleSignIn(googleProvider)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Github sing in:
  const handleGithubSignIn = () => {
    githubSignIn(githubProvider)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="hero mt-10">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Please Login!</h1>
        </div>
        <Form
          onSubmit={handleLogIn}
          className="card rounded-xl flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
        >
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

            <button
              // onClick={() => handleForgotPass()}
              className="text-start"
              type="submit"
            >
              <small className="link no-underline">Forgot password?</small>
            </button>
            <div className="form-control mt-6">
              <button className="btn bg-amber-700">Login</button>
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
            <button onClick={handleGithubSignIn} className="border p-2 rounded">
              <FaGithub />
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
