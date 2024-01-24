"use client";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";
import useAxios from "../../../hooks/useAxios";
import { signIn, useSession } from "next-auth/react";

function step1({ setCurrentStep, setFormData, setEmail }) {
  const router = useRouter();
  const [customError, setCustomError] = useState("");
  const [Loading, setLoading] = useState(false);
  const { resdata, error, loading, postData: postRequest } = useAxios();
  const { status, data: session } = useSession();

  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (Object.keys(resdata).length > 0) {
      if (resdata?.data?.isProfileComplete === true) {
        router.push("/partner/dashboard");
      } else {
        setCurrentStep(5);
      }
    }
  }, [resdata]);

  useEffect(() => {
    //google login
    const email = getValues();
    if (session && session?.user) {
      postRequest("/auth/google-login", { access_token: session.accessToken, role: "1" });
      Cookies.set("email", session.user.email, { expires: 7 });
    }
    //menual login
    if (resdata.state === "success" && email.email) {
      Cookies.set("email", email.email, { expires: 7 });
      setCurrentStep(2);
    }
    if (error) {
      setCustomError(error);
    }
  }, [resdata, session]);

  const onSubmit = async (data) => {
    const email = getValues();
    setEmail(email.email);
    setFormData((prevData) => ({ ...prevData, ...data }));
    postRequest("/auth/register-email", {email: email, role: "1"});
  };

  const handleGetStartedClick = () => {
    router.push("/partner");
  };

  const handleGoogle = async () => {
    setLoading(true);
    await signIn("google");
  };

  const onAlreadyHaveAnClick = useCallback(() => {}, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="bg-[url('/partner_assets/bg-gradient.svg')] justify-center items-center w-screen h-screen flex">
        <div className="bg-[#E9F2FF] flex w-[398px] h-[590] lg:w-[1140px] lg:h-[636px] rounded-[32px]">
          <div className="bg-[url('/partner_assets/signup-image.svg')] bg-[length:742px_582px] hidden lg:flex bg-no-repeat mt-14 ml-[32px] h-[686px] w-[840px]"></div>
          <div className="bg-white w-[398px] h-[590px] lg:h-[636px] lg:w-[400px] flex content-center rounded-[32px]">
            <div className="my-[24px] mx-[32px] lg:my-[60px] lg:mx-[32px] ">
              <img
                src={"/partner_assets/launch-logo.svg"}
                alt="launch my store logo"
                className="w-[167px] h-[35px] mb-1"
              />
              <p className="font-chivo text-[#374151] font-bold text-[24px] w-[364px]">
                Start Making Extra Money
              </p>
              <p className="font-roboto mt-[-10px] text-[#4B5563] text-[14px] font-normal w-[364px] leading-[20px]">
                Hi there,
                <br />
                Welcome to our platform please create your partner program
                account in few clicks!
              </p>
              <p className="text-[#374151] pt-5">Email</p>
              <input
                type="text"
                style={{
                  fontSize: "16px",
                  color: "#9CA3AF",
                  "::placeholder": { color: "#9CA3AF" },
                }}
                placeholder="Enter your email "
                {...register("email", {
                  required: "Enter A Valid Email Address !",
                  pattern: {
                    value:
                      /^(?:[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}|^\+[0-9]{10,15}$)/i,
                    message: "Invalid email ",
                  },
                })}
                className={`h-[20px] w-[296px] pl-5 ring-1 ring-inset ring-gray-300 focus:ring-[#4162FF] focus:border-[#b3c0ff] focus:outline-none focus:ring-1 border-slate-300 self-stretch rounded-lg bg-white flex flex-row py-3.5 px-4 items-center justify-start mt-[-8px] text-[#4B4B4B] font-roboto border-[1.5px] border-solid md:border-gainsboro ${
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

              {!errors.email && error && (
                <div className="flex flex-col w-full items-start">
                  <p className="text-[#F64C4C] text-[13px] my-1 mx-1">
                    {error}
                  </p>
                </div>
              )}
              <button
                className="rounded bg-primary-300-main mt-5 w-[334px] flex flex-col p-2 box-border items-center justify-center cursor-pointer text-center text-base text-white"
                type="submit"
              >
                <div className="relative w-[90px] h-0" />
                <div className="relative tracking-[0.02em] leading-[24px] font-medium">
                  {loading ? (
                    <svg
                      aria-hidden="true"
                      role="status"
                      class="inline mr-3 w-6 h-6 text-white animate-spin"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="#E5E7EB"
                      ></path>
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  ) : (
                    <div>Get Started</div>
                  )}
                </div>
              </button>
              <img
                src={"/partner_assets/continue.svg"}
                alt=""
                className="mx-2 mt-3 mb-2"
              />
              <div
                onClick={handleGoogle}
                className="cursor-pointer rounded bg-white box-border w-[334px] flex flex-col p-2 items-center justify-center text-center text-base text-neutral-600 border-[1px] border-solid border-neutral-300"
              >
                <div className="relative w-[90px] h-0" />
                {Loading ? (
                  <svg
                    aria-hidden="true"
                    role="status"
                    class="inline mr-3 w-6 h-6 text-blue-500 animate-spin"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="#E5E7EB"
                    ></path>
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                ) : (
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
                )}
              </div>
              <p className="text-[11.5px] ml-2 font-normal w-[334px] leading-[18px] font-chivo text-[#6B7280]">
                By continuing, you agree to our Terms of Use and Privacy Policy.
              </p>
              <p
                onClick={onAlreadyHaveAnClick}
                className="text-[14px] ml-[15px] font-normal mt-8 leading-[20px] font-roboto text-[#6B7280]"
              >
                Already have an partner program account?{" "}
                <span
                  onClick={handleGetStartedClick}
                  className="cursor-pointer text-[#4162FF]"
                >
                  Sign In
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default step1;
