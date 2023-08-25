import { useState } from "react";
import { useRouter } from "next/navigation";
import Verify from "../../components/Verify/Verify";

const Forgot2 = ({ setCurrentStep, inputValue }) => {
  const isEmail = /\S+@\S+\.\S+/.test(inputValue);
  const router = useRouter();
  const [OTP, setOTP] = useState("");

  const handleSignInClick = () => {
    router.push("/login");
  };

  const onTextFieldContainer1Click = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  return (
    <div className="w-[408px] h-[346px] text-11xl text-neutral-600 flex items-center justify-center">
      <div className="rounded-3xl bg-white shadow-[2px_4px_6px_rgba(75,_85,_99,_0.06)] overflow-hidden flex flex-col py-10 px-6 items-center border-[0.8px] border-solid border-gainsboro">
        <h1 className="text-neutral-600 font-semibold text-[28px] font-FreeSans tracking-normal my-2">
          Confirmation Code
        </h1>{" "}
        <div className="text-base text-neutral-500 flex flex-col items-center gap-[24px]">
          <div className="text-[14px] text-center leading-[20px]">
            Code sent to your {isEmail ? "email" : "phone no"}{" "}
            <span className="text-sm text-dimgray">
              {isEmail ? (
                <a
                  href={`mailto:${inputValue}`}
                  className="text-primary-300-main leading-[20px] font-medium"
                >
                  ({inputValue})
                </a>
              ) : (
                <span className="text-primary-300-main relative leading-[20px] font-medium">
                  ({inputValue})
                </span>
              )}
            </span>{" "}
            please write it here.
          </div>
          <div className="w-[360px] flex flex-col items-start gap-[4px] text-sm text-dimgray">
            <label className="relative leading-[20px] font-medium">Code</label>
            <Verify OTP={OTP} setOTP={setOTP} />
          </div>
          <button
            onClick={onTextFieldContainer1Click}
            disabled={OTP.length !== 6}
            className={`rounded w-[360px] flex flex-col p-2 cursor-pointer box-border items-center mb-4 justify-center text-center text-white font-poppins ${
              OTP.length === 6
                ? "bg-primary-300-main"
                : "bg-primary-100 cursor-not-allowed"
            }`}
          >
            Continue
          </button>
          <div className=" relative mb-5 text-sm tracking-[0.25px] leading-[20px] text-center text-darkslategray font-roboto flex justify-center items-center">
            <span className="font-medium relative mr-1">
              Remembered your password?
            </span>
            <span
              className="font-medium text-primary-300-main cursor-pointer"
              onClick={handleSignInClick}
            >
              Sign In
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forgot2;
