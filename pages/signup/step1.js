"use client";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { users } from "../../utils/userData";
import Cookie from "js-cookie";
import useAxios from '../../hooks/useAxios';


const SignUp1 = ({ setCurrentStep, setFormData, setEmail }) => {
  const router = useRouter();
  const [customError, setCustomError] = useState("");
  const { resdata, error, loading, postData: postRequest } = useAxios();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setCustomError("Enter A Valid Email Address !"); 
    
    const emailExists = users.some((user) => data.email === user.email);

    postRequest('/user/register-email', { email: data.email });
   
    setFormData((prevData) => ({ ...prevData, ...data }));
    setEmail(data.email);

    if (emailExists) {
      setCustomError("Email already exists.");
    } else {
     
      setCurrentStep(2);

      Cookie.set("email", data.email);
    }
  };


  const handleGetStartedClick = () => {
    router.push("/login"); // Redirect to /signup
  };

  const onAlreadyHaveAnClick = useCallback(() => {
    // Please sync "LogIn 1" to the project
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="rounded-3xl bg-white shadow-[2px_4px_6px_rgba(75,_85,_99,_0.06)] overflow-hidden flex flex-row py-12 px-3 sm:px-2 md:px-3 lg:px-4 mx-2 items-center justify-center border-[0.8px] border-solid border-gainsboro">
        <div className="flex flex-col items-center gap-[30px]">
          <div className="flex flex-col items-center justify-start gap-[32px]">
            <h2 className="text-neutral-600 my-0 font-semibold text-24 font-freesans  tracking-normal">
              Start 7 Days Free Trial
            </h2>
            <div className="flex flex-col items-center justify-start gap-[24px] text-sm text-dimgray">
              <div className="flex flex-col w-full items-center justify-start gap-[36px]">
                <div className="flex flex-col w-full items-center justify-start gap-[32px]">
                  <div className="flex flex-col w-full items-start justify-start gap-[28px]">
                    <div className="flex w-full flex-col items-center justify-center gap-[4px]">
                      <div className="self-stretch flex flex-row items-start justify-start">
                        <div className="relative leading-[20px] font-medium">
                          Email
                        </div>
                      </div>
                      <input
                        type="text"
                        placeholder="Enter your email "
                        {...register("email", {
                          required: "Enter A Valid Email Address !",
                          pattern: {
                            value:
                              /^(?:[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}|^\+[0-9]{10,15}$)/i,
                            message: "Invalid email ",
                          },
                        })}
                        onChange={(e) => {}}
                        className={`focus:border-[#b3c0ff] focus:outline-none focus:ring-1 border-slate-300  self-stretch rounded-lg bg-white flex flex-row py-3.5 px-4 items-center justify-start text-[#4B4B4B] font-roboto border-[1.5px] border-solid md:border-gainsboro ${
                          errors.email ? "border-red-500" : ""
                        }`}
                      />
                      {errors.email && (
                        <div className="flex flex-col w-full items-start">
                          <p className="text-[#F64C4C] text-[13px] my-1 mx-1">
                            {errors.email.message}
                          </p>
                        </div>
                      )}

                      {!errors.email && customError && (
                        <div className="flex flex-col w-full items-start">
                          <p className="text-[#F64C4C] text-[13px] my-1 mx-1">
                            {customError}
                          </p>
                        </div>
                      )}
                    </div>

                    <button
                      className="rounded bg-primary-300-main w-full flex flex-col p-2 box-border items-center justify-center cursor-pointer text-center text-base text-white"
                      type="submit"
                    >
                      <div className="relative w-[90px] h-0" />
                      <div className="relative tracking-[0.02em] leading-[24px] font-medium">
                        Get Started
                      </div>
                    </button>
                  </div>
                  <div className="flex items-center justify-center w-full">
                    <hr className="h-px w-[90px] bg-gradient-line-270 mx-3" />
                    <span className="font-semibold text-sm">
                      Or continue with
                    </span>
                    <hr className="h-px w-[90px] bg-gradient-line mx-3" />
                  </div>
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
              <span>Already have an account?</span>
              <span className="text-mediumslateblue">{` `}</span>
            </span>
            <span
              className="font-medium text-primary-300-main"
              onClick={handleGetStartedClick} // Attach the handleGetStartedClick function to the onClick event
            >
              Log In
            </span>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SignUp1;
