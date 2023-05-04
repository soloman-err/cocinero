import React, { useContext, useState } from "react";
import { Form, Link, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const [error, setError] = useState("");
  const { createUser } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);

  const handleRegister = (event) => {
    setError("");
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;

    // input validation:
    // if (name.length < 3) {
    //   setNameErr("Your name must be at least 3 characters long!");
    //   return;
    // } else if (
    //   /^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/.test(email)
    // ) {
    //   setEmErr("Please enter a valid email address!");
    //   return;
    // } else if (/^(https?):\/\/[^\s]/.test(photoURL)) {
    //   photoErr("Enter a valid url:" + photoURL);
    //   return;
    // } else if (/(?=.*[a-z])/.test(password)) {
    //   setPassErr("Enter at least one lowercase letter!");
    //   return;
    // } else if (/(?=.*[A-Z])/.test(password)) {
    //   setPassErr("Enter at least one uppercase letter!");
    //   return;
    // } else if (/(?=.*[0-9])/.test(password)) {
    //   setPassErr("Enter at least one number letter!");
    //   return;
    // } else if (/(?=.*\w)/.test(password)) {
    //   setPassErr("Enter at least one special character!");
    //   return;
    // }

    // Call for creating new user:
    function validateInput(name, email, password, photoURL) {
      if (name.length < 3) {
        return "Username must be at least 3 characters long!";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return "Please enter a valid email address!";
      } else if (!/^(https?):\/\/[^\s]+$/i.test(photoURL)) {
        return "Please enter a valid photo URL!";
      } else if (password.length < 8) {
        return "Password must be at least 8 characters long!";
      } else if (!/(?=.*[a-z])/.test(password)) {
        return "Password must contain at least one lowercase letter!";
      } else if (!/(?=.*[A-Z])/.test(password)) {
        return "Password must contain at least one uppercase letter!";
      } else if (!/(?=.*[0-9])/.test(password)) {
        return "Password must contain at least one number!";
      } else if (!/(?=.*\W)/.test(password)) {
        return "Password must contain at least one special character!";
      } else {
        return "";
      }
    }

    const err = validateInput(name, email, password, photoURL);
    if (err) {
      setError(err);
    } else {
      createUser(email, password)
        .then((result) => {
          const createdUser = result.user;
          console.log(createdUser);
          Swal.fire({
            title: "Welcome to cocinero!",
            text: "User Registered Successfully",
            icon: "success",
            confirmButtonText: "OK",
          });
          n;
        })
        .catch((error) => {
          console.log(error);
        });
      form.reset();
    }
  };

  return (
    <div className="hero my-5">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Please Register!</h1>
        </div>
        <div className="card rounded-xl flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <Form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter name"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="Enter email"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo url</span>
              </label>
              <input
                type="text"
                name="photoURL"
                placeholder="Enter photo url"
                className="input input-bordered"
                required
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
                required
              />
            </div>

            <small className="text-red-700 w-[90%] mx-auto text-center">
              {error}
            </small>
            <div className="form-control mt-6">
              <button
                onClick={createUser}
                className="bg-amber-800 hover:bg-amber-700 py-2 font-bold"
              >
                Register
              </button>
            </div>

            <small className="">
              Already have an account?
              <Link to="/login" className="link link-hover">
                {" "}
                Login
              </Link>
            </small>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;
