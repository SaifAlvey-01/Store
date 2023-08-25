import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Verify from "../../components/Verify/Verify";

const SignUp3 = ({ setCurrentStep, email }) => {
  const [OTP, setOTP] = useState("");
  const isEmail = /\S+@\S+\.\S+/.test(email);

  const router = useRouter();
  const [active, setactive] = useState(false);
  // Function to update input value in the state array
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
    <div className=" w-[408px] h-[346px] text-11xl text-neutral-600">
      <div className="rounded-3xl bg-white shadow-[2px_4px_6px_rgba(75,_85,_99,_0.06)] overflow-hidden flex flex-row py-8 px-6 items-start justify-start border-[0.8px] border-solid border-gainsboro">
        <div className="flex flex-col items-center justify-start gap-[14px]">
          <b className="relative">Confirmation Code</b>
          <div className="flex flex-col items-center justify-start text-base text-neutral-500">
            <div className="flex flex-col items-end justify-start">
              <div className="flex flex-col items-center justify-start">
                <div className="flex flex-col items-start justify-start gap-[24px]">
                  <div className="w-[360px] flex flex-col items-start justify-start ">
                    <div className="flex items-center justify-center">
                      <div className="text-[14px] text-center leading-[20px]">
                        Code sent to your {isEmail ? "email" : "phone no"}{" "}
                        <span className="text-sm text-dimgray">
                          {isEmail ? (
                            <a
                              href={`mailto:${email}`}
                              style={{
                                cursor: "pointer",
                                color: "#4162ff",
                              }}
                              className="leading-[20px] font-medium"
                            >
                              ({email}){" "}
                            </a>
                          ) : (
                            <span
                              style={{
                                color: "#4162ff",
                              }}
                              className="relative leading-[20px] font-medium"
                            >
                              ({email}){" "}
                            </span>
                          )}
                        </span>{" "}
                        please write it here.
                      </div>
                    </div>
                  </div>
                  <div className="w-[360px] flex flex-col items-start justify-start  gap-[4px] cursor-pointer text-sm text-dimgray">
                    <div className="self-stretch flex flex-row items-start justify-between">
                      <div className="relative leading-[20px] font-medium">
                        Code
                      </div>
                    </div>

                    <Verify OTP={OTP} setOTP={setOTP} />
                  </div>

                  <button
                    onClick={onTextFieldContainer1Click}
                    disabled={OTP.length !== 6}
                    className={`rounded ${
                      OTP.length === 6
                        ? "bg-primary-300-main cursor-pointer"
                        : "bg-primary-100 cursor-not-allowed"
                    } w-[360px] flex flex-col p-2 box-border items-center mb-4 justify-center text-center text-white font-poppins`}
                  >
                    <div className="relative w-[90px] h-0" />
                    Continue
                  </button>

                  <div
                    className="font-bold relative mb-5 text-sm tracking-[0.25px] leading-[20px] text-center text-darkslategray font-roboto"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      margin: "0 auto",
                    }}
                  >
                    <span className="font-bold relative mr-1 text-sm tracking-[0.25px] leading-[20px] text-center  text-darkslategray font-roboto">
                      Remembered your password?
                    </span>
                    {/* Attach the handleSignInClick function here */}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp3;
