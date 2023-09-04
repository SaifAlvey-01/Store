"use client";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";

const Forgot3 = ({ setCurrentStep }) => {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");

    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$.!%*?&#]+$/i;

    if (!password || !confirmPassword) {
      setErrorMessage("Please fill out both password fields.");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    if (!passwordPattern.test(password) || password.length < 8) {
      setErrorMessage(
        "Password must be at least 8 characters, 1 uppercase, 1 lowercase & 1 number"
      );
      return;
    }

    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handleSignInClick = () => {
    router.push("/login");
  };

  return (
    <div className="rounded-3xl bg-white shadow-[2px_4px_6px_rgba(75,_85,_99,_0.06)]  overflow-hidden flex flex-row py-10 px-4 mx-2 items-start justify-start border-[0.8px] border-solid border-gainsboro">
      <div className="flex flex-col items-center justify-start ">
        <div className="flex flex-col items-center justify-start gap-[18px]">
          <h1 className="text-neutral-600 font-semibold text-[28px] font-freesans tracking-normal my-2">
            Create New Password
          </h1>

          <form onSubmit={handleFormSubmit}>
            <div className="w-[360px] flex flex-col items-start justify-start  gap-[4px] mb-12">
              <div className="self-stretch flex flex-row items-start justify-start">
                <div className="relative leading-[20px] font-medium text-neutral-600">
                  New Password
                </div>
              </div>
              <input
                type="password"
                placeholder="Enter new password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="focus:border-[#b3c0ff] focus:outline-none focus:ring-1 border-slate-300  self-stretch rounded-lg bg-white flex flex-row py-3.5 px-4 items-center justify-start text-[#4B4B4B] font-roboto border-[1.5px] border-solid md:border-gainsboro"
              />

              <div className="self-stretch flex flex-row items-start justify-start pt-5">
                <div className="relative leading-[20px] font-medium text-neutral-600">
                  Confirm Password
                </div>
              </div>
              <input
                type="password"
                placeholder="Enter new password to confirm"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="focus:border-[#b3c0ff] focus:outline-none  focus:ring-1 border-slate-300  self-stretch rounded-lg bg-white flex flex-row py-3.5 px-4 items-center justify-start text-[#4B4B4B] font-roboto border-[1.5px] border-solid md:border-gainsboro"
              />
              {errorMessage && (
                <span className="text-red-500 text-[12px] mt-1 ">
                  {errorMessage}
                </span>
              )}
            </div>
            <button
              type="submit"
              className="rounded bg-primary-300-main w-[360px] mb-6 flex flex-col p-2 box-border items-center justify-center cursor-pointer text-center text-base text-white"
            >
              <div className="relative w-[90px] h-0" />
              <div className="relative tracking-[0.02em] leading-[24px] font-medium">
                Reset Password
              </div>
            </button>
          </form>

          <div className="relative text-sm tracking-[0.25px] leading-[20px] text-center text-darkslategray font-roboto  mt-12">
            <span>
              <span>Remembered your password?</span>
              <span className="text-mediumslateblue">{` `}</span>
            </span>
            <span
              className="font-medium text-primary-300-main cursor-pointer "
              onClick={handleSignInClick}
            >
              Log In
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forgot3;
