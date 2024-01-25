"use client";
import { useCallback, useEffect, useState } from "react";
import useAxios from '../../hooks/useAxios';
import { signIn, useSession } from "next-auth/react";
import axios from "axios"; 
import Loading from "../loading";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const Login1 = ({ setCurrentStep, setInputData }) => {
  const router = useRouter();
  const [customError, setCustomError] = useState("");
  const [loading, setLoading] = useState(false);
  const { resdata, error, loading: resLoading, postData: postRequest } = useAxios();
  const { data: session, status } = useSession();

  useEffect(()=>{
    console.log(status, "<----status")
    if(status === "authenticated"){
      setLoading(true)
      // router.push("/dashboard");
    }
  },[status]);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  
  const onSubmit = async (data, e) => {
    e.preventDefault();
    setInputData(data.email);
    setCurrentStep((prevStep) => prevStep + 1);

  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    // Let react-hook-form handle its internal onChange
    register("email").onChange(e);
  };

  const handleGetStartedClick = () => {
    router.push("/signup");
  };
  
  useEffect(()=>{
    if(Object.keys(resdata).length > 0 ){
      if(resdata?.data?.isProfileComplete ===  true){
        router.push("/dashboard");
      }else{
        router.push("/signup");
        localStorage.setItem("signupCurrentStep", 4);
      }

    }

  },[resdata])

  useEffect(()=>{
    if(session?.user) {
      postRequest("/auth/google-login", {access_token:session.accessToken});
      // setTimeout(() => {
        router.push("/dashboard");
      // }, 2000);
    }
   
  },[session])

  const handleGoogle = async () => {
    setLoading(true)
    await signIn("google");
   
  } 

  const onAlreadyHaveAnClick = useCallback(() => {}, []);

  if(status === "loading") return (<Loading url="/dashboard" message="Loading..." duration="2000" />)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="rounded-3xl bg-white shadow-[2px_4px_6px_rgba(75,_85,_99,_0.06)] overflow-hidden flex flex-row py-12 px-2 sm:px-2 md:px-3 lg:px-4 mx-2 items-center justify-center border-[0.8px] border-solid border-gainsboro">
        <div className="flex flex-col items-center gap-[30px]">
          <div className="flex flex-col items-center justify-start gap-[32px]">
            <h2 className="text-neutral-600 my-0 font-semibold text-24 font-freesans  tracking-normal">
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
                          required: "Enter A Valid Email Address !",
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
                      
                            <div>
                               Log in
                            </div>
                            
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

                <div className="rounded cursor-pointer bg-white box-border w-full flex flex-col p-2 items-center justify-center text-center text-base text-neutral-600 border-[1px] border-solid border-neutral-300"
                onClick={handleGoogle}
                >
                  <div className="relative w-[90px] h-0" 
                    
                  />

                  {loading ? <svg aria-hidden="true" role="status" class="inline mr-3 w-6 h-6 text-blue-500 animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"></path>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"></path>
                            </svg> :
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
                    }

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
