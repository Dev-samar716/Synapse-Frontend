import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import verifyOtp from "../functions/features/auth/VerifyOtp";
import usePendingSignup from "../hooks/features/auth/usePendingSignup";
import useAuth from "../hooks/features/auth/useAuth";
import sendOtpAPI from "../services/features/auth/sendOtpAPI";

const VerifyOTP = () => {

  const [otpCode, setOtpCode] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const email : string = useParams().email || "";
  const { pendingSignup, setPendingSignup } = usePendingSignup();
  const { setUserInfo } = useAuth();

  const handleSubmit = async(e: React.FormEvent) => {
     e.preventDefault();

     if(otpCode.length !== 6) {
       return alert("Please enter a valid 6-digit OTP code!");
     }
            
    await verifyOtp({
     email, otpCode, pendingSignup, setPendingSignup, setErrorMessage,
    setUserInfo
    })
  } 

  const handleResend = async() => {
      try {
        const response = await sendOtpAPI({email, setErrorMessage});

        if(response.success) {
          alert("OTP resent successfully! Please check your email.");
        }
      } catch(error) {
        console.log(error)
      }
  }

  return (
    <main className="min-h-screen bg-zinc-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-white text-center">
          Verify OTP
        </h1>

        <p className="text-zinc-400 text-center mt-2">
          Enter the verification code sent to your email
        </p>

        {errorMessage.length > 0 && <p className="text-red-500 text-center mt-4">
         {errorMessage}
        </p>
        }

        <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm text-zinc-300 mb-2">
              Verification Code
            </label>

            <input
              type="text"
              placeholder="Enter 6-digit OTP"
              maxLength={6}
              onChange={(e) => {
                setOtpCode(e.target.value);
              }}
              className="
                w-full
                px-4
                py-3
                rounded-lg
                bg-zinc-800
                border
                border-zinc-700
                text-white
                outline-none
                focus:border-blue-500
                tracking-widest
                text-center
                text-lg
              "
            />
          </div>

          <button
            type="submit"
            className="
              w-full
              py-3
              rounded-lg
              bg-blue-600
              hover:bg-blue-700
              transition
              text-white
              font-semibold
            "
          >
            Verify
          </button>
        </form>

        <div className="mt-6 flex justify-center">
          <button
            className="
              text-sm
              text-zinc-400
              hover:text-zinc-300
              transition
            "
            onClick={() => {
              setErrorMessage("");
              handleResend();
            }}
          >
            Resend OTP
          </button>
        </div>

        <p className="text-zinc-400 text-center mt-6">
          Wrong email?{" "}
          <Link
            to="/auth/signup"
            className="text-blue-400 hover:text-blue-300"
          >
            Go Back
          </Link>
        </p>
      </div>
    </main>
  );
};

export default VerifyOTP;