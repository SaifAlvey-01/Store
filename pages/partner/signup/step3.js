import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Verify from "../../../components/Verify/Verify";
import Cookie from "js-cookie";
import useAxios from "../../../hooks/useAxios";
import Cookies from "js-cookie";

function step3({ setCurrentStep }) {
  const [OTP, setOTP] = useState("");
  const savedEmail = Cookie.get("email");
  const isEmail = /\S+@\S+\.\S+/.test(savedEmail);
  const { resdata, error, loading, putData: putRequest } = useAxios();

  const router = useRouter();
  const [active, setactive] = useState(false);
  const handleInputChange = (index, value) => {
    setInputValues((prevValues) => {
      const newValues = [...prevValues];
      newValues[index] = value;
      return newValues;
    });
  };

  useEffect(() => {
    if (
      resdata.state === "success" &&
      resdata.message !== "OTP has been Resended on provided email"
    ) {
      Cookies.set("id", resdata.data.id, { expires: 7 });
      setCurrentStep((prevStep) => prevStep + 1);
    }
  }, [resdata]);

  const onTextFieldContainer1Click = async () => {
    const data = { verificationCode: Number(OTP), email: savedEmail };

    putRequest("/auth/verify-email-verification-code", data);
  };

  const handleresend = async () => {
    putRequest("/auth/resend-email-verification-code", { email: savedEmail });
  };

  const handleGetStartedClick = () => {
    router.push("/partner");
  };

  const onAlreadyHaveAnClick = useCallback(() => {}, []);
  return (
    <div className="bg-[url('/partner_assets/bg-gradient.svg')] justify-center items-center w-screen h-screen flex">
      <div className="bg-[#E9F2FF] flex w-[398px] h-[590] lg:w-[1140px] lg:h-[636px] rounded-[32px]">
        <div className="bg-[url('/partner_assets/signup-image.svg')] bg-[length:742px_582px] hidden lg:flex bg-no-repeat mt-14 ml-[32px] h-[686px] w-[840px]"></div>
        <div className="bg-white w-[398px] h-[590px] lg:h-[636px] lg:w-[400px] flex content-center rounded-[32px]">
          <div className="my-[37px] mx-[32px] lg:my-[55px] lg:mx-[32px] ">
            <img
              src={"/partner_assets/launch-logo.svg"}
              alt="launch my store logo"
              className="w-[167px] h-[35px] mb-1"
            />
            <p className="font-chivo text-[#374151] font-bold text-[24px] w-[364px]">
              Verify Code
            </p>
            <p className="font-roboto mt-[-10px] text-[#4B5563] text-[14px] font-normal w-[364px] leading-[20px]">
              We sent a verification code at your email, please see
              <br /> your email to get a code.
            </p>
            <p className="text-[#9CA3AF] text-[14px] pt-5">
              Enter Code send to you at:
            </p>
            <p className="text-[14px] mt-[-10px] mb-4">
              <a
                style={{
                  textDecoration: "none",
                  color: "#4162FF",
                  cursor: "pointer",
                }}
                href={`mailto:${savedEmail}`}
              >
                ({savedEmail})
              </a>
            </p>
            <p className="text-[#374151] pt-3">Code</p>
            <div className="w-[340px] mt-[-12px] ml-[-3px] flex flex-row items-center justify-center  gap-[4px] cursor-pointer text-sm text-dimgray">
              <Verify OTP={OTP} setOTP={setOTP} />
            </div>

            <p className="text-[#F64C4C] text-[13px] my-1 mx-1">{error}</p>
            <div
              onClick={handleresend}
              className=" text-[12px] mb-5 ml-40 font-normal leading-[20px] font-roboto text-[#6B7280]"
            >
              Didn’t get the code?{" "}
              <a className="text-[#4162FF] ml-1">Resend OTP</a>
            </div>
            <button
              onClick={onTextFieldContainer1Click}
              disabled={OTP.length !== 6}
              className={`rounded ${
                OTP.length === 6
                  ? "bg-primary-300-main cursor-pointer"
                  : "bg-primary-100 cursor-not-allowed"
              } h-[44px] text-[16px] cursor-pointer rounded-[8px] font-normal leading-[24px] w-[364px] mt-4 md:w-[334px] flex flex-col p-2 box-border items-center mb-2  ml-[-2px] justify-center text-center text-white font-poppins`}
            >
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
                <div>Verify</div>
              )}
            </button>
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
  );
}

export default step3;
