import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Verify from "../../components/Verify/Verify";

const Forgot2 = ({ setCurrentStep, inputValue }) => {
  const [OTP, setOTP] = useState("");
  const isEmail = /\S+@\S+\.\S+/.test(inputValue);

  const router = useRouter();
  const [active, setactive] = useState(false);
  const handleInputChange = (index, value) => {
    setInputValues((prevValues) => {
      const newValues = [...prevValues];
      newValues[index] = value;
      return newValues;
    });
  };

  const onTextFieldContainer1Click = useCallback(() => {
    console.log(active);

    setCurrentStep((prevStep) => prevStep + 1);
  }, []);

  const handleSignInClick = () => {
    router.push("/login");
  };

  return (
    <div className=" w-full sm:w-[400px] md:w-[400px] lg:w-[450px]  text-11xl text-neutral-600">
      <div className="rounded-3xl bg-white shadow-[2px_4px_6px_rgba(75,_85,_99,_0.06)] overflow-hidden mx-2 py-8 px-2 items-center justify-center border-[0.8px] border-solid border-gainsboro">
        <div className="flex flex-col items-center justify-start gap-[14px]">
          <b className="relative">Confirmation Code</b>
          <div className="flex w-full flex-col items-center justify-start text-base text-neutral-500">
            <div className="flex w-full flex-col items-center justify-center gap-[24px]">
              <div className="flex flex-col items-center justify-center text-center w-full gap-[4px] cursor-pointer text-neutral text-dimgray ml-3 mt-2">
                <div className="self-stretch flex flex-row items-center justify-center">
                  <div className="relative leading-[20px] md:text-text-[16px] lg:text-[16px] text-[15px] font-medium text-neutral-500 text-center">
                    Code sent to your please write it here.
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col items-center justify-start  gap-[4px] cursor-pointer text-sm text-dimgray">
                <div className="w-full flex flex-row items-center justify-start  gap-[4px] cursor-pointer text-sm text-dimgray">
                  <Verify OTP={OTP} setOTP={setOTP} />
                </div>
              </div>

              <button
                onClick={onTextFieldContainer1Click}
                disabled={OTP.length !== 6}
                className={`rounded ${
                  OTP.length === 6
                    ? "bg-primary-300-main cursor-pointer"
                    : "bg-primary-100 cursor-not-allowed"
                } w-full flex flex-col p-2 box-border items-center mb-2 justify-center text-center text-white font-poppins`}
              >
                <div className="relative w-[90px] h-0" />
                Continue
              </button>
            </div>
            <div className="relative w-full text-sm tracking-[0.25px] leading-[20px] text-center text-darkslategray font-roboto mt-6">
              <span>
                <span>Remembered your password?</span>
                <span className="text-mediumslateblue">{` `}</span>
              </span>
              <span
                className="font-medium text-primary-300-main cursor-pointer "
                // onClick={handleGetStartedClick} // Attach the handleGetStartedClick function to the onClick event
              >
                Log In
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forgot2;
