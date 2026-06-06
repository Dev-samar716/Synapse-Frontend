

// pages/Signup.tsx

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import type { FormData } from "../types/AuthTypes";
import sendOtpAPI from "../services/features/auth/sendOtpAPI";
import usePendingSignup from "../hooks/features/auth/usePendingSignup";

const Signup = () => {

  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    password: "",
  })
  const [errorMessage, setErrorMessage] = useState<string>("");
  const navigate = useNavigate();
  const { setPendingSignup } = usePendingSignup();
 
  const handleSend = async(e: React.FormEvent) => {

     e.preventDefault();

     if(!formData.username || !formData.email || !formData.password) {
         return setErrorMessage("Please fill all the fields!");
     }
     const response = await sendOtpAPI({email: formData.email, setErrorMessage});

       if(response.success) {
         setPendingSignup(formData);
         navigate(`/auth/verify-otp/${formData.email}`);
       }
  }

  return (
    <main className="min-h-screen bg-zinc-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-white text-center">
          Create Account
        </h1>

        <p className="text-zinc-400 text-center mt-2">
          Join the platform
        </p>

        {errorMessage.length > 0 && <p className="text-red-500 text-center mt-4">
         {errorMessage}
        </p>
        }

        <form className="mt-8 space-y-5" onSubmit={handleSend}>
          <div>
            <label className="block text-sm text-zinc-300 mb-2">
              Username
            </label>

            <input
              type="text"
              placeholder="Enter username"
              onChange={(e) => {
                 setFormData({...formData, username: e.target.value});
              }}
              className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 text-white outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm text-zinc-300 mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter email"
              onChange={(e) => {
                setFormData({...formData, email: e.target.value})
              }}
              className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 text-white outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm text-zinc-300 mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter password"
              onChange={(e) => {
                 setFormData({...formData, password: e.target.value})
              }}
              className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 text-white outline-none focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition text-white font-semibold"
          >
            Input
          </button>
        </form>

        <p className="text-zinc-400 text-center mt-6">
          Already have an account?{" "}
          <Link
            to="/auth/login"
            className="text-blue-400 hover:text-blue-300"
          >
            Login
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Signup;