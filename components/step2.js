import { useCallback } from "react";

const SignUp2 = ({setCurrentStep}) => {
  const onPrimaryContainerClick = useCallback(() => {
    setCurrentStep(((prevStep) => prevStep + 1))
  }, []);

  return (
    <div className="relative bg-white w-full h-[1024px] overflow-hidden text-left text-2xs-5 text-midnightblue font-freesans">
      <img
        className="absolute h-[77.31%] w-full top-[15.27%] right-[0%] bottom-[7.42%] left-[0%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/group-3.svg"
      />
      <div className="absolute top-[calc(50%_-_231px)] left-[calc(50%_-_589px)] w-[1179px] h-[483px]">
      <div className="absolute left-[0.41px] w-[605.47px] h-[482.61px]">
          <img 
            className=""
            src="/signupImg.png"/>
        </div>
        <div className="absolute top-[94.5px] left-[770.5px] w-[408px] h-[274px] text-11xl text-neutral-600">
          <div className="absolute top-[-0.4px] left-[-0.4px] rounded-3xl bg-white shadow-[2px_4px_6px_rgba(75,_85,_99,_0.06)] overflow-hidden flex flex-row py-8 px-6 items-start justify-start border-[0.8px] border-solid border-gainsboro">
            <div className="flex flex-col items-center justify-start gap-[32px]">
              <b className="relative">Create a password</b>
              <div className="flex flex-col items-center justify-start text-sm text-dimgray">
                <div className="flex flex-col items-end justify-start">
                  <div className="flex flex-col items-center justify-start">
                    <div className="flex flex-col items-start justify-start gap-[28px]">
                      <div className="w-[360px] flex flex-col items-start justify-start gap-[4px]">
                        <div className="self-stretch flex flex-row items-start justify-start">
                          <div className="relative leading-[20px] font-medium">
                            Password
                          </div>
                        </div>
                        <div className="self-stretch rounded-lg bg-white flex flex-row py-2.5 px-4 items-center justify-start text-darkgray font-roboto border-[1.5px] border-solid border-gainsboro">
                          <div className="flex-1 relative h-6">
                            <div className="absolute w-full top-[calc(50%_-_8px)] left-[0%] leading-[16px] inline-block">
                              Enter your password
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="rounded bg-primary-300-main w-[360px] flex flex-col p-2 box-border items-center justify-center cursor-pointer text-center text-base text-white"
                        onClick={onPrimaryContainerClick}
                      >
                        <div className="relative w-[90px] h-0" />
                        <div className="relative tracking-[0.02em] leading-[24px] font-medium">
                          Continue
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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

export default SignUp2;
