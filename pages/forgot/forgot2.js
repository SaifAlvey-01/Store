import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Verify from "../../components/Verify/Verify";

const Forgot2 = ({ setCurrentStep }) => {
  const router = useRouter();
  const [OTP, setOTP] = useState("");
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

  return (
    <div className=" w-[408px] h-[346px] text-11xl text-neutral-600">
      <div className="rounded-3xl md:bg-white shadow-[2px_4px_6px_rgba(75,_85,_99,_0.06)] overflow-hidden flex flex-row py-8 px-6 items-start justify-start md:border-[0.8px] border-solid border-gainsboro">
        <div className="flex flex-col items-center justify-start gap-[22px]">
          <b className="relative">Confirmation Code</b>
          <div className="flex flex-col items-center justify-start text-base text-neutral-500">
            <div className="flex flex-col items-end justify-start">
              <div className="flex flex-col items-center justify-start">
                <div className="flex flex-col items-start justify-start gap-[30px]">
                  <div className="w-[360px] flex flex-col items-start justify-start gap-[10px]">
                    <div className="self-stretch flex flex-row items-start justify-start">
                      <div className="relative leading-[20px] font-medium">
                        Code sent to your email{" "}
                        <span className="self-stretch  text-sm text-dimgray">
                          <a
                            href=""
                            style={{
                              textDecoration: "underline",
                              cursor: "pointer",
                              color: "#4162ff",
                            }}
                            className="relative leading-[20px] font-medium"
                          >
                            ahmedakram018@gmail.com
                          </a>
                        </span>{" "}
                        please write it here.
                      </div>
                    </div>
                  </div>
                  <div className="w-[360px] flex flex-col items-start justify-start mb-10 gap-[4px] cursor-pointer text-sm text-dimgray">
                    <div className="self-stretch flex flex-row items-start justify-between">
                      <div className="relative leading-[20px] font-medium">
                        Code
                      </div>
                    </div>

                    <Verify OTP={OTP} setOTP={setOTP} />

                    <div className="w-[360px] flex flex-col  items-end justify-end cursor-pointer text-sm text-dimgray ">
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "flex-end",
                          justifyContent: "space-between",
                        }}
                        className=" leading-[20px] font-medium "
                      >
                        <span>{`Didn’t get the code? `}</span>
                        <span className="text-primary-300-main mx-2">
                          Resend OPT
                        </span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={onTextFieldContainer1Click}
                    className={`rounded ${
                      OTP.length === 6
                        ? "bg-primary-300-main"
                        : "bg-primary-100"
                    } w-[360px] flex flex-col p-2 box-border items-center mb-4 justify-center text-center text-white font-poppins`}
                  >
                    <div className="relative w-[90px] h-0" />
                    Verify
                    {/* <div className="relative leading-[24px] font-medium"  >
                    Verify
                  </div> */}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forgot2;
