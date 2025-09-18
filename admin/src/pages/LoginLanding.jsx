import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useNavigate } from "react-router-dom";

const LoginLanding = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-900 h-screen overflow-hidden">
      <div className="min-h-screen flex items-center justify-center motion-preset-pop motion-duration-300">
        <div className="flex flex-col gap-8 m-auto items-center p-8 min-w-[340px] sm:min-w-96 rounded-xl border border-gray-700 text-zinc-600 text-sm shadow-lg relative overflow-hidden bg-gray-800">
          {/* lottie loop animation graphic at top */}
          <DotLottieReact
            className="absolute -top-6 scale-110 left-0 w-full -z-1 pointer-events-none"
            src="https://lottie.host/7d2ab86a-2cad-4c61-86c3-c492665171ad/nk1Wcvt05h.lottie"
            loop
            autoplay
          />

          {/* title */}
          <div className="w-full text-center text-neutral-300 select-none mt-10">
            <p className="text-3xl font-bold">Welcome Back</p>
            <p className="text-sm text-gray-400 mt-2">Choose your login type</p>
          </div>

          {/* login options */}
          <div className="flex flex-col gap-4 w-full items-stretch">
            <button
              onClick={() => navigate("/admin-login")}
              className="bg-blue-600 hover:bg-blue-700 text-white w-full h-14 rounded-md text-lg font-medium transition-colors duration-200 ease-linear flex items-center justify-center gap-3"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              Admin Login
            </button>

            <button
              onClick={() => navigate("/doctor-login")}
              className="bg-green-600 hover:bg-green-700 text-white w-full h-14 rounded-md text-lg font-medium transition-colors duration-200 ease-linear flex items-center justify-center gap-3"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              Doctor Login
            </button>
          </div>

          {/* additional info */}
          <div className="text-center text-neutral-400 text-sm">
            <p>Select the appropriate login option based on your role</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginLanding;
