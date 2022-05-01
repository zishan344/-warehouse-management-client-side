import React from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../../firebase.init";
import Social from "../Social/Social";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUserWithEmailAndPassword(email, password);
    e.target.reset();
  };
  return (
    <div>
      <div className="bg-white p-5 max-w-md mx-auto rounded shadow-sm">
        <h2 className="text-4xl px-4 ">Register</h2>
        <form onSubmit={handleRegister} className="mt-10 space-y-8">
          <input
            required
            name="name"
            className="w-full border rounded h-12 px-4 focus:outline-none"
            placeholder="Name"
            type="text"
          />

          <input
            required
            className="w-full border rounded h-12 px-4 focus:outline-none"
            placeholder="Email adress "
            type="email"
            name="email"
          />

          <div className="flex items-center ">
            <input
              required
              name="password"
              className="w-full border rounded h-12 px-4 focus:outline-none -mr-7"
              placeholder="Password"
              type="password"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17.607"
              height="17.076"
              viewBox="0 0 17.607 17.076"
            >
              <path
                id="eye-off"
                d="M12.392,16.769a8.718,8.718,0,0,1-9.935-5.938A8.675,8.675,0,0,1,3.817,8.2m5.1.79a2.611,2.611,0,1,1,3.692,3.692M8.914,8.985,12.6,12.675M8.916,8.986,6.053,6.124m6.554,6.554,2.863,2.863M2.929,3,6.053,6.124m0,0a8.7,8.7,0,0,1,13.011,4.707,8.723,8.723,0,0,1-3.6,4.708m0,0,3.123,3.123"
                transform="translate(-1.957 -2.293)"
                fill="none"
                stroke="#949090"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeidth="1"
              />
            </svg>
          </div>
          <div>
            <div className="flex flex-col md:flex-row md:items-center justify-center ">
              <input
                className="cursor-pointer flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                type="submit"
                value="Register"
              />
            </div>
            <Link to="/login" className=" text-blue-600 underline">
              <p className="my-4">Already have an account</p>
            </Link>
          </div>
          <Social></Social>
        </form>
      </div>
    </div>
  );
};

export default Register;
