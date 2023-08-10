'use client'
import { useCallback } from "react";
 
import { useRouter } from 'next/navigation'

const SignUp1 = ({setCurrentStep}) => {
  const router = useRouter()


  const onPrimaryContainerClick = useCallback(() => {
    // Please sync "Sign Up 2" to the project
    setCurrentStep(((prevStep) => prevStep + 1))
  }, []);

  const onAlreadyHaveAnClick = useCallback(() => {
    // Please sync "LogIn 1" to the project
  }, []);

  return (
    <div className=" bg-[url('/public/Background.png')]">
          <div className="rounded-3xl bg-white shadow-[2px_4px_6px_rgba(75,_85,_99,_0.06)] overflow-hidden flex flex-row py-8 px-6 items-start justify-start md:border-[0.8px] border-solid border-gainsboro">
            <div className="flex flex-col items-center justify-start gap-[92px]">
              <div className="flex flex-col items-center justify-start gap-[32px]">
                <h2 className="text-neutral-600 font-semibold text-24 font-FreeSans  tracking-normal">Start 7 Days Free Trail</h2>
                <div className="flex flex-col items-center justify-start gap-[24px] text-sm text-dimgray">
                  <div className="flex flex-col items-end justify-start gap-[32px]">
                    <div className="flex flex-col items-center justify-start gap-[32px]">
                      <div className="flex flex-col items-start justify-start gap-[28px]">
                        <div className="w-[360px] flex flex-col items-start justify-start gap-[4px]">
                          <div className="self-stretch flex flex-row items-start justify-start">
                            <div className="relative leading-[20px] font-medium">
                              Email or Mobile Number
                            </div>
                          </div>
                          <input
                              type="text"
                              placeholder="Enter Email or Mobile Number"
                              className="self-stretch rounded-lg bg-white flex flex-row py-3.5 px-4 items-center justify-start text-darkgray font-roboto border-[1.5px] md:border-solid md:border-gainsboro"
                            />
                        </div>
                        <div
                          className="rounded bg-primary-300-main w-[360px] flex flex-col p-2 box-border items-center justify-center cursor-pointer text-center text-base text-white"
                          onClick={onPrimaryContainerClick}
                        >
                          <div className="relative w-[90px] h-0" />
                          <div className="relative tracking-[0.02em] leading-[24px] font-medium">
                            Reset Password
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="relative text-sm tracking-[0.25px] leading-[20px] text-center cursor-pointer text-darkslategray font-roboto"
                onClick={onAlreadyHaveAnClick}
              >
                <span>
                  <span>Remembered your password?</span>
                  <span className="text-mediumslateblue">{` `}</span>
                </span>
                <span className="font-medium text-primary-300-main">
                  Sign In
                </span>
              </div>
            </div>
          </div>


         </div>

  );
};

export default SignUp1;
