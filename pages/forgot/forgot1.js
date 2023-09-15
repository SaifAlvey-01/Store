import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { users } from "../../utils/userData";
import useAxios from '../../hooks/useAxios';


const Forgot1 = ({ setCurrentStep, inputValue, setInputValue }) => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");
  const { resdata, error, loading, postData: postRequest } = useAxios();


  useEffect(()=>{
    if(resdata.message === "User not found with email."){
      setErrorMessage("User not found with email.");
    }
    if(resdata.message === "OTP for Reset Password has been delivered to your email."){
      setCurrentStep((prevStep) => prevStep + 1);
    } 
  },[resdata])

  const handleSubmit = (event) => {
    event.preventDefault();

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const inputVal = inputValue.trim();

    const isEmail = emailPattern.test(inputVal);
    if (isEmail) {
      postRequest('/user/forget-password', {email:inputValue });
    }else{
       setErrorMessage("Invalid Email");

     }



    // const userExists = users.some(
    //   (user) =>
    //     (isEmail && user.email === inputVal) ||
    //     (isMobile && user.phone === inputVal)
    // );

  };

  const handleSignInClick = () => {
    router.push("/login");
  };

  return (
    <div className=" w-full sm:w-[450px] md:w-[450px] lg:w-[450px] min-h-[calc(100% - 100px)]  text-neutral-600">
      <div className="rounded-3xl bg-white shadow-[2px_4px_6px_rgba(75,_85,_99,_0.06)] overflow-hidden mx-2 py-8 px-3 items-center justify-center border-[0.8px] border-solid border-gainsboro">
        <div className="flex flex-col items-center justify-start gap-[20px]">
          <h1 className="text-neutral-600 font-semibold text-24 font-freesans tracking-normal my-0">
            Forgot Passcode !
            <span className="flex text-neutral-500 font-roboto font-normal text-sm pt-3 justify-center items-center">
              No worries, we'll help you reset it!
            </span>
          </h1>
          <div className=" w-full text-neutral-600">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center justify-start text-sm text-dimgray"
            >
              <div className="w-full flex flex-col items-start justify-start gap-[6px] mb-6">
                <label className="self-stretch flex flex-row items-start justify-start relative leading-[20px] font-medium">
                  Email
                </label>
                <input
                  type="text"
                  value={inputValue}
                  placeholder="Enter your email "
                  onChange={(e) => {
                    setInputValue(e.target.value);
                    setErrorMessage("");
                  }}
                  required
                  className="focus:border-[#b3c0ff] focus:outline-none focus:ring-1 border-slate-300 self-stretch rounded-lg bg-white flex flex-row py-3.5 px-4 items-center justify-start text-[#4B4B4B] font-roboto border-[1.5px] border-solid "
                />
                {errorMessage && (
                  <div className="text-red-500  mx-1 text-[13px]">
                    {errorMessage}
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="rounded bg-primary-300-main w-full flex flex-col p-2 box-border items-center justify-center cursor-pointer text-center text-base text-white"
              >
                <div className="relative w-[90px] h-0" />
                { loading ? <svg aria-hidden="true" role="status" class="inline mr-3 w-6 h-6 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"></path>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"></path>
                            </svg> :
                            <div>
                               Reset Password
                            </div>
                            }
                
              </button>
            </form>
          </div>
          <div
            className="relative w-full text-sm tracking-[0.25px] leading-[20px] text-center text-darkslategray font-roboto mt-6"
            // onClick={onAlreadyHaveAnClick}
          >
            <span>
              <span>Remembered your password?</span>
              <span className="text-mediumslateblue">{` `}</span>
            </span>
            <span
              className="font-medium text-primary-300-main cursor-pointer "
              onClick={handleSignInClick} // Attach the handleGetStartedClick function to the onClick event
            >
              Login 
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forgot1;
