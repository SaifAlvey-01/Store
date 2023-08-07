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
    <div className="relative bg-white w-full h-[1024px] overflow-hidden text-left text-2xs-5 text-midnightblue font-freesans bg-[url('/Background.png')]">
     
      <div className="absolute top-[calc(50%_-_275px)] left-[calc(50%_-_589.5px)] w-[1179px] h-[551px]">

        <div className="absolute left-[0.41px] w-[605.47px] h-[482.61px]">
          <img 
            className=""
            src="/signupImg.png"/>
        </div>
        <div className="absolute top-[0px] left-[771px] w-[408px] h-[551px] text-[30px] text-neutral-600 ">
          <div className="absolute top-[-0.4px] left-[-0.4px] rounded-3xl bg-white shadow-[2px_4px_6px_rgba(75,_85,_99,_0.06)] overflow-hidden flex flex-row py-8 px-6 items-start justify-start border-[0.8px] border-solid border-gainsboro">
            <div className="flex flex-col items-center justify-start gap-[92px]">
              <div className="flex flex-col items-center justify-start gap-[32px]">
                <b className="relative font-freesans">Start 7 Days Free Trail</b>
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
                              className="self-stretch rounded-lg bg-white flex flex-row py-3.5 px-4 items-center justify-start text-darkgray font-roboto border-[1.5px] border-solid border-gainsboro"
                            />
                        </div>
                        <div
                          className="rounded bg-primary-300-main w-[360px] flex flex-col p-2 box-border items-center justify-center cursor-pointer text-center text-base text-white"
                          onClick={onPrimaryContainerClick}
                        >
                          <div className="relative w-[90px] h-0" />
                          <div className="relative tracking-[0.02em] leading-[24px] font-medium">
                            Get Stated
                          </div>
                        </div>
                      </div>
                      <div className="relative w-[328px] h-[17px] text-[11.25px] text-darkslategray font-poppins">
                        <div className="absolute top-[0px] left-[113.66px] font-medium inline-block w-[100.67px]">
                          Or continue with
                        </div>
                        <img
                          className="absolute top-[8px] left-[0px] w-[106.09px] h-px"
                          alt=""
                          src="/rectangle-3.svg"
                        />
                        <img
                          className="absolute top-[8px] left-[221.91px] w-[106.09px] h-px"
                          alt=""
                          src="/rectangle-4.svg"
                        />
                      </div>
                    </div>
                    <div className="rounded bg-white box-border w-[360px] flex flex-col p-2 items-center justify-center text-center text-base text-neutral-600 border-[1px] border-solid border-neutral-300">
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
              <div
                className="relative text-sm tracking-[0.25px] leading-[20px] text-center cursor-pointer text-darkslategray font-roboto"
                onClick={onAlreadyHaveAnClick}
              >
                <span>
                  <span>Already have an account?</span>
                  <span className="text-mediumslateblue">{` `}</span>
                </span>
                <span className="font-medium text-primary-300-main">
                  Sign In
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>




      <img
        className="absolute top-[calc(50%_-_480px)] left-[calc(50%_-_656px)] w-[167px] h-[35px] object-cover"
        alt=""
        src="/logo-1@2x.png"
      />
    </div>
  );
};

export default SignUp1;
