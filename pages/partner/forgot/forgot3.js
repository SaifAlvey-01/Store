"use client";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import Loading from "../../../components/loading";
import cogoToast from "cogo-toast";
import useAxios from "../../../hooks/useAxios";
import { Inter, Outfit } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
const outfit = Outfit({ subsets: ["latin"] });

const Forgot3 = ({ setCurrentStep, inputValue, OTP }) => {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { resdata, error, loading, postData: postRequest } = useAxios();

  useEffect(() => {
    if (resdata.status === 200) {
      setIsLoading(true);
      cogoToast.success("Password has been reset! Login Now");
      setTimeout(() => {
        router.push("/");
      }, 2000);
    } else {
      setErrorMessage(resdata.message);
    }
  }, [resdata]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");
    const data = {
      step: 3,
      verificationCode: Number(OTP),
      password: confirmPassword,
      email: inputValue,
    };
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

    postRequest("/auth/forget-password", data);
    setCurrentStep(4);
  };

  const handleSignInClick = () => {
    router.push("/partner");
  };
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }

  const [isPasswordVisible1, setIsPasswordVisible1] = useState(false);

  function togglePasswordVisibility1() {
    setIsPasswordVisible1((prevState) => !prevState);
  }
  return (
    <div className={`bg-[url('/partner_assets/bg-gradient.svg')] text-11xl justify-center items-center w-screen h-screen flex text-neutral-600 ${inter.className}`}>
      <div className="rounded-3xl w-[386px] h-[542px] bg-white p-[32px]">
        <img
          src={"/partner_assets/launch-logo.svg"}
          alt="launch my store logo"
          className="w-[167px] h-[35px] mb-1"
        />
        <p className={`${outfit.className} text-[#374151] font-bold text-[24px] w-[364px]`}>
          Create New Password
        </p>
        <p className=" mt-[-10px] mb-6 text-[#4B5563] text-[15px] font-normal w-[364px] leading-[20px]">
          Start creating new password, make sure you set a
          <br />
          strong password!
        </p>
        <div className="flex flex-col items-center justify-start mx-5">
          <div className="flex flex-col items-center justify-start gap-[18px]">
            <form onSubmit={handleFormSubmit}>
              <div className="w-[360px] flex flex-col items-start justify-start  gap-[4px] mb-12">
                <div className="self-stretch flex flex-row items-start justify-start">
                  <div className="relative leading-[20px] text-[14px] font-medium text-neutral-600">
                    New Password
                  </div>
                </div>
                <div className="relative mx-auto">
                  <input
                    type={isPasswordVisible ? "text" : "password"}
                    placeholder="Enter new password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="focus:border-[#b3c0ff] w-[324px] focus:outline-none focus:ring-1 border-slate-300  self-stretch rounded-lg bg-white flex flex-row py-3.5 px-4 items-center justify-start text-[#374151] font-roboto border-[1.5px] border-solid md:border-gainsboro"
                  />
                  <button
                    className="absolute inset-y-0 right-0 flex items-center bg-transparent pr-4 text-gray-600"
                    onClick={togglePasswordVisibility}
                  >
                    {isPasswordVisible ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    )}
                  </button>
                </div>

                <div className="self-stretch flex flex-row items-start justify-start pt-5">
                  <div className="relative leading-[20px] text-[14px] font-medium text-neutral-600">
                    Confirm New Password
                  </div>
                </div>
                <div className="relative mx-auto">
                  <input
                    type={isPasswordVisible1 ? "text" : "password"}
                    placeholder="Enter new password to confirm"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className="focus:border-[#b3c0ff] w-[324px] focus:outline-none  focus:ring-1 border-slate-300  self-stretch rounded-lg bg-white flex flex-row py-3.5 px-4 items-center justify-start text-[#374151] font-roboto border-[1.5px] border-solid md:border-gainsboro"
                  />
                  <button
                    className="absolute inset-y-0 right-0 flex items-center bg-transparent pr-4 text-gray-600"
                    onClick={togglePasswordVisibility1}
                  >
                    {isPasswordVisible1 ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    )}
                  </button>
                </div>
                {errorMessage && (
                  <span className="text-red-500 text-[12px] mt-1 ">
                    {errorMessage}
                  </span>
                )}
              </div>
              <button
                type="submit"
                className="rounded bg-[#4162FF] w-[371px] h-[44px] mt-[-20px] flex flex-col p-2 box-border items-center justify-center cursor-pointer text-center text-base text-white"
              >
                <div className=" font-freesans relative w-[90px] h-0" />
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
                  <div>Continue</div>
                )}
              </button>
            </form>

            <p className={`text-[11.5px] ml-4 font-normal leading-[18px] ${outfit.className} text-[#6B7280]`}>
              By continuing, you agree to our Terms of Use and Privacy Policy.
            </p>
            <p className={`text-[14px] ml-[20px] font-normal mt-6 leading-[20px] ${outfit.className} text-[#6B7280]`}>
              Remember your password?{" "}
              <span
                className="cursor-pointer text-[#4162FF]"
                onClick={handleSignInClick}
              >
                Sign In
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forgot3;
