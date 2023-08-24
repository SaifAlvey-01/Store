"use client";
import { useCallback, useState } from "react";

import { useRouter } from "next/navigation";

const Forgot1 = ({ setCurrentStep, inputValue, setInputValue }) => {
  const router = useRouter();

  // const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const mobilePattern = /^\+[0-9]{12}$/;

    const inputVal = inputValue.trim();
    if (emailPattern.test(inputVal) || mobilePattern.test(inputVal)) {
      setCurrentStep((prevStep) => prevStep + 1);
    } else {
      setErrorMessage("Please enter a valid email or mobile number");
    }
  };

  const onAlreadyHaveAnClick = useCallback(() => {
    // Please sync "LogIn 1" to the project
    router.push("/login");
  }, [router]);

  return (
    <div>
      <div className="rounded-3xl bg-white shadow-[2px_4px_6px_rgba(75,_85,_99,_0.06)] overflow-hidden flex flex-row py-4 px-6 items-start justify-start border-[0.8px] border-solid border-gainsboro">
        <div
          style={{ minHeight: "calc(66vh - 180px)" }}
          className="flex flex-col items-center justify-start gap-[50px]"
        >
          <div className="flex flex-col items-center justify-start gap-[10px]">
            <h1 className="text-neutral-600 font-semibold text-24 font-FreeSans tracking-normal">
              Forgot Passcode !
              <span className="flex text-neutral-500 font-roboto font-normal text-sm pt-3 justify-center items-center">
                No worries, we'll help you reset it!
              </span>
            </h1>

            <div className="flex flex-col items-center justify-start gap-[24px] text-sm text-dimgray">
              <div className="flex flex-col items-end justify-start gap-[32px]">
                <div className="flex flex-col items-center justify-start gap-[32px]">
                  <div className="flex flex-col items-start justify-start gap-[28px]">
                    <form onSubmit={handleSubmit}>
                      <div className="w-[360px] flex flex-col items-start justify-start gap-[6px] mb-8">
                        <div className="self-stretch flex flex-row items-start justify-start">
                          <div className="relative leading-[20px] font-medium">
                            Email or Mobile Number
                          </div>
                        </div>
                        <input
                          type="text"
                          value={inputValue}
                          onChange={(e) => {
                            setInputValue(e.target.value);
                            setErrorMessage(""); // Resetting error message on each change
                          }}
                          required
                          className="focus:border-[#b3c0ff] focus:outline-none focus:ring-1 border-slate-300  self-stretch rounded-lg bg-white flex flex-row py-3.5 px-4 items-center justify-start text-[#4B4B4B] font-roboto border-[1.5px] border-solid border-gainsboro"
                        />
                        {errorMessage && (
                          <div className="text-red-500 text-[12px] ">
                            {errorMessage}
                          </div>
                        )}
                      </div>

                      <div
                        className="rounded bg-primary-300-main w-[360px] flex flex-col p-2 box-border items-center justify-center cursor-pointer text-center text-base text-white"
                        onClick={handleSubmit} // Updated to handleSubmit
                      >
                        <div className="relative w-[90px] h-0" />
                        <div className="relative tracking-[0.02em] leading-[24px] font-medium">
                          Reset Password
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className=" font-bold relative mb-5 text-sm tracking-[0.25px] leading-[20px] text-center cursor-pointer text-darkslategray font-roboto"
            onClick={onAlreadyHaveAnClick}
          >
            <span>
              <span>Remembered your password?</span>
              <span className="text-mediumslateblue">{` `}</span>
            </span>
            <span className="font-medium text-primary-300-main">Sign In</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forgot1;
