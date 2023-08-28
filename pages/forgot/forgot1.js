import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { users } from "../../utils/userData";

const Forgot1 = ({ setCurrentStep, inputValue, setInputValue }) => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const mobilePattern = /^\+[0-9]{12}$/;
    const inputVal = inputValue.trim();

    const isEmail = emailPattern.test(inputVal);
    const isMobile = mobilePattern.test(inputVal);

    const userExists = users.some(
      (user) =>
        (isEmail && user.email === inputVal) ||
        (isMobile && user.phone === inputVal)
    );

    if (userExists) {
      setCurrentStep((prevStep) => prevStep + 1);
    } else if (isEmail || isMobile) {
      setErrorMessage(
        isEmail ? "Email does not exist" : "Mobile no does not exist"
      );
    } else {
      setErrorMessage("Please enter a valid email or mobile number");
    }
  };

  const handleSignInClick = () => {
    router.push("/login");
  };

  return (
    <div className="rounded-3xl bg-white shadow-[2px_4px_6px_rgba(75,_85,_99,_0.06)] overflow-hidden flex flex-row py-8 px-6 items-start justify-center border-[0.8px] border-solid border-gainsboro">
      <div
        className="flex flex-col items-center justify-start gap-[50px]"
       
      >
        <h1 className="text-neutral-600 font-semibold text-24 font-FreeSans tracking-normal my-0">
          Forgot Passcode !
          <span className="flex text-neutral-500 font-roboto font-normal text-sm pt-3 justify-center items-center">
            No worries, we'll help you reset it!
          </span>
        </h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-start text-sm text-dimgray"
        >
          <div className="w-[360px] flex flex-col items-start justify-start gap-[6px] mb-8">
            <label className="self-stretch flex flex-row items-start justify-start relative leading-[20px] font-medium">
              Email or Mobile Number
            </label>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
                setErrorMessage("");
              }}
              required
              className="focus:border-[#b3c0ff] focus:outline-none focus:ring-1 border-slate-300 self-stretch rounded-lg bg-white flex flex-row py-3.5 px-4 items-center justify-start text-[#4B4B4B] font-roboto border-[1.5px] border-solid "
            />
            {errorMessage && (
              <div className="text-red-500 text-[12px]">{errorMessage}</div>
            )}
          </div>

          <button
            type="submit"
            className="rounded bg-primary-300-main w-[360px] flex flex-col p-2 box-border items-center justify-center cursor-pointer text-center text-base text-white"
          >
            <div className="relative w-[90px] h-0" />
            Reset Password
          </button>
        </form>
        <div
            className="relative text-sm tracking-[0.25px] leading-[20px] text-center text-darkslategray font-roboto mt-12"
            // onClick={onAlreadyHaveAnClick}
          >
            <span>
              <span>Remembered your password?</span>
              <span className="text-mediumslateblue">{` `}</span>
            </span>
            <span
              className="font-medium text-primary-300-main cursor-pointer "
              // onClick={handleGetStartedClick} // Attach the handleGetStartedClick function to the onClick event
            >
               Sign In
            </span>
          </div>
       
      </div>
    </div>
  );
};

export default Forgot1;
