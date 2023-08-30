"use client";
import { useCallback, useState } from "react";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { users } from "../../utils/userData";

const Login1 = ({ setCurrentStep }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({});
  const [customError, setCustomError] = useState("");

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data, e) => {
    e.preventDefault();

    const userWithEmailOrPhone = users.find(
      (user) => data.email === user.email || data.email === user.phone
    );

    if (userWithEmailOrPhone) {
      setCustomError("");
      setCurrentStep((prevStep) => prevStep + 1);
    } else {
      setCustomError("Invalid Email");
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    const userWithEmailOrPhone = users.find(
      (user) => value === user.email || value === user.phone
    );

    if (userWithEmailOrPhone) {
      setCustomError(""); // Clear the error message if a valid email or phone number is found
    }

    // Let react-hook-form handle its internal onChange
    register("email").onChange(e);
  };

  const handleGetStartedClick = () => {
    router.push("/signup");
  };

  const onAlreadyHaveAnClick = useCallback(() => {}, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="rounded-3xl bg-white shadow-[2px_4px_6px_rgba(75,_85,_99,_0.06)] overflow-hidden flex flex-row py-12 px-2 sm:px-2 md:px-3 lg:px-4 mx-2 items-center justify-center border-[0.8px] border-solid border-gainsboro">
        <div className="flex flex-col items-center gap-[30px]">
          <div className="flex flex-col items-center justify-start gap-[32px]">
            <h2 className="text-neutral-600 my-0 font-semibold text-24 font-FreeSans  tracking-normal">
              Welcome Back!
            </h2>
            <div className="flex flex-col items-center justify-start gap-[24px] text-sm text-dimgray">
              <div className="flex flex-col w-full items-center justify-start gap-[36px]">
                <div className="flex flex-col w-full items-center justify-start gap-[32px]">
                  <div className="flex flex-col w-full items-start justify-start gap-[28px]">
                    <div className="flex w-full flex-col items-center">
                      <div className="self-stretch flex flex-row items-start justify-start">
                        <div className="relative leading-[20px] font-medium">
                          Email
                        </div>
                      </div>
                      <input
                        type="text"
                        placeholder="Enter your email "
                        {...register("email", {
                          required: "This field is required.",
                          pattern: {
                            value:
                              /^(?:[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}|^\+[0-9]{10,15}$)/i,
                            message: "Invalid email ",
                          },
                        })}
                        onChange={handleInputChange}
                        className={`focus:border-[#b3c0ff] focus:outline-none focus:ring-1 border-slate-300 self-stretch rounded-lg bg-white flex flex-row py-3.5 px-4 items-center justify-start text-[#4B4B4B] font-roboto border-[1.5px] border-solid md:border-gainsboro ${
                          errors.email ? "border-red-500" : ""
                        }`}
                      />
                      {errors.email && (
                        <p className="self-start text-[#F64C4C] text-[13px] my-1 mx-1">
                          {errors.email.message}
                        </p>
                      )}

                      {!errors.email && customError && (
                        <p className="self-start text-[#F64C4C] text-[13px] my-1 mx-1">
                          {customError}
                        </p>
                      )}
                    </div>

                    <button
                      className="rounded bg-primary-300-main w-full flex flex-col p-2 box-border items-center justify-center cursor-pointer text-center text-base text-white"
                      type="submit"
                    >
                      <div className="relative w-[90px] h-0" />
                      <div className="relative tracking-[0.02em] leading-[24px] font-medium">
                        Log in
                      </div>
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-center w-full">
                  <hr className="h-px w-[90px] bg-gradient-line-270 mx-3" />
                  <span className="font-semibold text-sm">
                    Or continue with
                  </span>
                  <hr className="h-px w-[90px] bg-gradient-line mx-3" />
                </div>

                <div className="rounded bg-white box-border w-full flex flex-col p-2 items-center justify-center text-center text-base text-neutral-600 border-[1px] border-solid border-neutral-300">
                  <div className="relative w-[90px] h-0" />
                  <div className="flex flex-row items-center justify-center gap-[6px]">
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/google.svg"
                    />
                    <div className="relative leading-[24px] font-medium">
                      Google
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative text-[12px] leading-[20px] mx-3 text-center  font-roboto">
                By continuing, you agree to our Terms of Use and Privacy Policy.
              </div>
            </div>
          </div>
          <div
            className="relative text-sm tracking-[0.25px] leading-[20px] text-center cursor-pointer text-darkslategray font-roboto"
            onClick={onAlreadyHaveAnClick}
          >
            <span>
              <span>Don't have an account?</span>
              <span className="text-mediumslateblue">{` `}</span>
            </span>
            <span
              className="font-medium text-primary-300-main"
              onClick={handleGetStartedClick} // Attach the handleGetStartedClick function to the onClick event
            >
              Get Started
            </span>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login1;
