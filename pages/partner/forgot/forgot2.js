import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Verify from "../../../components/Verify/Verify";
import useAxios from "../../../hooks/useAxios";
import Cookies from "js-cookie";

const Forgot2 = ({ setCurrentStep, inputValue, OTP, setOTP }) => {
  const isEmail = /\S+@\S+\.\S+/.test(inputValue);

  const router = useRouter();
  const [active, setactive] = useState(false);
  const { resdata, error, loading, postData: postRequest } = useAxios();
  const [errorMessage, setErrorMessage] = useState("");

  const onTextFieldContainer1Click = () => {
    const data = {
      step: 2,
      verificationCode: Number(OTP),
      email: inputValue,
    };
    setCurrentStep(3);
  };

  const handleSignInClick = () => {
    router.push("/partner");
  };

  useEffect(() => {
    if (resdata.status === 200) {
      setCurrentStep(3);
    }

    if (resdata.error) {
      setErrorMessage("Invalid Verification Code !");
    }
  }, [resdata]);
  const handleresend = async () => {
    const savedEmail = Cookies.get("email");
    putRequest("/auth/resend-email-verification-code", { email: savedEmail });
  };
  return (
    <div className="bg-[url('/partner_assets/bg-gradient.svg')] text-11xl justify-center items-center w-screen h-screen flex text-neutral-600">
      <div className="rounded-3xl w-[386px] h-[436px] bg-white p-[32px]">
        <img
          src={"/partner_assets/launch-logo.svg"}
          alt="launch my store logo"
          className="w-[167px] h-[35px] mb-1"
        />
        <p className="font-chivo text-[#374151] font-bold text-[24px] w-[364px]">
          Forgot Password
        </p>
        <p className="font-roboto mt-[-10px] text-[#4B5563] text-[15px] font-normal w-[364px] leading-[20px]">
          We sent a verification code at your email, please see
          <br />
          your email to get a code.
        </p>
        <p className="text-[#374151] text-[14px] pt-5 pl-4">Email</p>
        <div className="flex w-full flex-col items-center justify-start text-base text-neutral-500">
          <div className="flex w-full flex-col items-center justify-center gap-[24px]">
            <div className="w-full flex flex-col items-center justify-start cursor-pointer text-sm text-dimgray">
              <div className="w-full flex flex-row items-center justify-start mt-[-10px] mb-[-10px] cursor-pointer text-sm text-dimgray">
                <Verify OTP={OTP} setOTP={setOTP} />
              </div>
              <p className="text-[#F64C4C] text-[13px] my-1 mx-1">
                {errorMessage}
              </p>
              <div
                onClick={handleresend}
                className=" text-[12px] mb-[-10px] ml-40 font-normal leading-[20px] font-roboto text-[#6B7280]"
              >
                Didn’t get the code?{" "}
                <a className="text-[#4162FF] ml-1">Resend OTP</a>
              </div>
            </div>

            <button
              type="submit"
              onClick={onTextFieldContainer1Click}
                disabled={OTP?.length !== 6}
              className="rounded bg-primary-300-main w-[371px] h-[44px] flex flex-col p-2 box-border items-center justify-center cursor-pointer text-center text-base text-white"
            >
              <div className="relative w-[90px] h-0" />
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
          </div>
          <p className="text-[11.5px] ml-4 font-normal leading-[18px] font-chivo text-[#6B7280]">
            By continuing, you agree to our Terms of Use and Privacy Policy.
          </p>
          <p className="text-[14px] ml-[20px] font-normal mt-8 leading-[20px] font-roboto text-[#6B7280]">
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
  );
};

export default Forgot2;
