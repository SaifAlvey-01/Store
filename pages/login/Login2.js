"use client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { simpleHash, users } from "../../utils/userData";
import { useRouter } from "next/router";
import Loading from "../../components/loading";
import cogoToast from "cogo-toast";

const Login2 = ({ inputData }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({});
  const user = useSelector((state) => state.userSlice.items);
  const [passwordError, setPasswordError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault();
    const matchedUser = users.find((u) => u.email === data.email);

    // const data = await response.json();
    // const token = data.token; // Assuming your backend sends a token
    // // Store the token securely, e.g., in localStorage
    // localStorage.setItem('token', token);
    
    // // Redirect to a protected route, e.g., the dashboard
    // router.push('/dashboard');

    // No user found with the given email
    if (!matchedUser) {
      setPasswordError("Invalid Email or password");
      return;
    }

    // Check password hash
    if (matchedUser.passwordHash === simpleHash(data.password)) {
      setPasswordError(null);

      setIsLoading(true);
      setTimeout(() => {
        router.push("/dashboard");
      }, 2000);

      // cogoToast.success("User Successfully logged in");
    } else {
      setPasswordError("Invalid Email or password");
    }
  };

  return (
    <div>
      {isLoading ? (
        <Loading url="/dashboard" message="Logging in..." duration="2000" />
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="rounded-3xl bg-white shadow-[2px_4px_6px_rgba(75,_85,_99,_0.06)] overflow-hidden flex flex-row py-10 px-4 sm:px-2 md:px-3 lg:px-4  items-center justify-center border-[0.8px] border-solid border-gainsboro">
            <div className="flex flex-col items-center gap-[20px]">
              <div className="flex flex-col items-center justify-start gap-[32px]">
                <h2 className="text-neutral-600 my-0 font-semibold text-24 font-freesans  tracking-normal">
                  Welcome Back!
                </h2>
                <div className="flex flex-col items-center justify-start gap-[24px] text-sm text-dimgray">
                  <div className="flex flex-col w-full items-center justify-start gap-[28px]">
                    <div className="flex flex-col w-full items-center justify-start gap-[32px]">
                      <div className="flex flex-col w-full items-start justify-start gap-[10px]">
                        <div className=" flex w-full flex-col items-center gap-[4px]">
                          <div className="self-stretch flex flex-row items-start justify-start">
                            <div className="relative leading-[20px] font-medium">
                              Email
                            </div>
                          </div>
                          <input
                            type="text"
                            {...register("email", {
                              required: "Email is required",
                              pattern:
                                /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            })}
                            placeholder="Enter your email"
                            className={`focus:border-[#b3c0ff] focus:outline-none focus:ring-1 border-slate-300 text-[13px]  self-stretch rounded-lg bg-white flex flex-row py-3.5 px-4 items-center justify-start text-[#4B4B4B] font-roboto border-[1.5px] border-solid md:border-gainsboro ${
                              errors.email ? "border-red-500" : ""
                            }`}
                            value={inputData}
                          />
                          {errors.email && (
                            <p className=" self-start text-[#F64C4C]  text-[13px] my-1 mx-1">
                              Email is required
                            </p>
                          )}
                        </div>
                        <div className="w-[360px] flex flex-col items-start justify-start gap-[4px]">
                          <div className="self-stretch flex flex-row items-start justify-between ">
                            <div className="relative leading-[20px] font-medium">
                              Password
                            </div>
                            <Link legacyBehavior href="/forgot">
                              <a className="relative leading-[20px] font-medium text-[#4162FF] cursor-pointer no-underline">
                                Forgot Password?
                              </a>
                            </Link>
                          </div>
                          <input
                            type="password"
                            placeholder="Enter your password"
                            {...register("password", { required: true })}
                            className="focus:border-[#b3c0ff] focus:outline-none focus:ring-1 border-slate-300  self-stretch rounded-lg bg-white flex flex-row py-3.5 px-4 items-center justify-start text-[#4B4B4B] font-roboto border-[1.5px] border-solid md:border-gainsboro"
                          />
                          {passwordError && (
                            <p className=" self-start text-[#F64C4C] text-[13px] my-1 mx-1">
                              {passwordError}
                            </p>
                          )}
                        </div>

                        <button
                          className="rounded bg-primary-300-main w-full mt-4 flex flex-col p-2 box-border items-center justify-center cursor-pointer text-center text-base text-white"
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
                  <div className="relative text-[12px] leading-[20px] font-roboto">
                    By continuing, you agree to our Terms of Use and Privacy
                    Policy.
                  </div>
                </div>
              </div>
              <div className="relative text-sm tracking-[0.25px] leading-[20px] text-center cursor-pointer text-darkslategray font-roboto">
                <span>
                  <span>Don't have an account?</span>
                  <span className="text-mediumslateblue">{` `}</span>
                </span>
                <span className="font-medium text-primary-300-main">
                  Get Stated
                </span>
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default Login2;
