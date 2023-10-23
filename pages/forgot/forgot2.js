import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Verify from "../../components/Verify/Verify";
import useAxios from '../../hooks/useAxios';


const Forgot2 = ({ setCurrentStep, inputValue, OTP,  setOTP}) => {

  const isEmail = /\S+@\S+\.\S+/.test(inputValue);

  const router = useRouter();
  const [active, setactive] = useState(false);
  const { resdata, error, loading, postData: postRequest } = useAxios();
  const [errorMessage, setErrorMessage] = useState("");


  const onTextFieldContainer1Click = () => {
    const data ={
      step:2, 
      verificationCode: Number(OTP),
      email: inputValue
    }
    postRequest('/auth/forget-password', data);
  }

  const handleSignInClick = () => {
    router.push("/");
  };

  useEffect(()=>{
    if(resdata.status === 200){
      setCurrentStep(3);
    }

    if(resdata.error){
      setErrorMessage("Invalid Verification Code !");
    }
  },[resdata])

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
                  A Code Has Been To Your Mail Please Write It Here
                                    </div>
                </div>
              </div>
              <div className="w-full flex flex-col items-center justify-start  gap-[4px] cursor-pointer text-sm text-dimgray">
                <div className="w-full flex flex-row items-center justify-start  gap-[4px] cursor-pointer text-sm text-dimgray">
                  <Verify OTP={OTP} setOTP={setOTP} />
                </div>
                <p className="text-[#F64C4C] text-[13px] my-1 mx-1">
                          {errorMessage}
                          </p>
              </div>

              <button
                onClick={onTextFieldContainer1Click}
                disabled={OTP?.length !== 6}
                className={`rounded ${
                  OTP?.length === 6
                    ? "bg-primary-300-main cursor-pointer"
                    : "bg-primary-100 cursor-not-allowed"
                } w-[340px] md:w-[370px] flex flex-col p-2 box-border items-center mb-2 justify-center text-center text-white font-poppins`}
              >
                <div className="relative w-[90px] h-0" />
                { loading ? <svg aria-hidden="true" role="status" class="inline mr-3 w-6 h-6 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"></path>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"></path>
                            </svg> :
                            <div>
                               Continue
                            </div>
                            }
                
              </button>
            </div>
            <div className="relative w-full text-sm tracking-[0.25px] leading-[20px] text-center text-darkslategray font-roboto mt-6">
              <span>
                <span>Remembered your password?</span>
                <span className="text-mediumslateblue">{` `}</span>
              </span>
              <span
                className="font-medium text-primary-300-main cursor-pointer "
                onClick={handleSignInClick} // Attach the handleGetStartedClick function to the onClick event
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
