import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Verify from "../../components/Verify/Verify";
import Cookie from "js-cookie";
import useAxios from "../../hooks/useAxios";
import Cookies from 'js-cookie';


const SignUp3 = ({ setCurrentStep }) => {
  const [OTP, setOTP] = useState("");
  const savedEmail = Cookie.get("email");
  const isEmail = /\S+@\S+\.\S+/.test(savedEmail);
  const { resdata, error, loading, putData: putRequest } = useAxios();

  const router = useRouter();
  const [active, setactive] = useState(false);
  const handleInputChange = (index, value) => {
    setInputValues((prevValues) => {
      const newValues = [...prevValues];
      newValues[index] = value;
      return newValues;
    });
  };

  useEffect(() => {
    if (resdata.state === "success" && resdata.message !== "OTP has been Resended on provided email") {
      Cookies.set('id', resdata.data.id, { expires: 7 });
      setCurrentStep((prevStep) => prevStep + 1);
    }
  }, [resdata]);

  const onTextFieldContainer1Click = async () => {
    const data ={ verificationCode: Number(OTP), email:savedEmail }
    
    putRequest("/auth/verify-email-verification-code", data);
  };

  const handleSignInClick = () => {
    router.push("/login");
  };

  const handleresend = async ()=> {

    putRequest("/auth/resend-email-verification-code", {email:savedEmail});

  };

  return (
    <div className=" w-full sm:w-[450px] md:w-[450px] lg:w-[450px] min-h-[calc(100% - 100px)] text-11xl text-neutral-600">
      <div className="rounded-3xl bg-white shadow-[2px_4px_6px_rgba(75,_85,_99,_0.06)] overflow-hidden mx-2 py-8 px-2 items-center justify-center border-[0.8px] border-solid border-gainsboro">
        <div className="flex flex-col items-center justify-start gap-[14px]">
          <b className="relative">Confirmation Code</b>
          <div className="flex w-full flex-col items-center justify-start text-base text-neutral-500">
            <div className="flex w-full flex-col items-start justify-start gap-[24px]">
              <div className="flex flex-col items-center justify-start text-center w-full gap-[4px] cursor-pointer text-neutral text-dimgray ml-3 mt-2">
                <div className="self-stretch flex flex-row items-start justify-between">
                  <div className="relative leading-[20px] md:text-text-[16px] lg:text-[16px] text-[15px] font-medium text-neutral-500">
                    Enter code sent to you at
                  </div>
                </div>
                <div className="w-full flex flex-col items-start justify-start ">
                  <a
                    style={{
                      textDecoration: "none",
                      color: "#4162FF",
                      cursor: "pointer",
                    }}
                    href={`mailto:${savedEmail}`}
                  >
                    ({savedEmail})
                  </a>
                </div>
              </div>
              <div className="w-full flex flex-col items-center justify-start  gap-[4px] cursor-pointer text-sm text-dimgray">
                <div className="self-stretch flex flex-row items-center justify-start ml-2">
                  <div className=" flex flex-row items-center justify-start relative mr-14 leading-[20px] font-medium">
                    Code
                  </div>
                  <div onClick={handleresend} className=" flex flex-row items-center justify-start ml-14">
                    Didn’t get the code?{" "}
                    <a className="text-[#4162FF] ml-1">Resend OTP</a>
                  </div>
                </div>

                <div className="w-full flex flex-row items-center justify-start  gap-[4px] cursor-pointer text-sm text-dimgray">
                  <Verify OTP={OTP} setOTP={setOTP} />
                </div>

                <p className="text-[#F64C4C] text-[13px] my-1 mx-1">
                  {resdata.message}
                </p>
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
                {loading ? (
                  <svg
                    aria-hidden="true"
                    role="status"
                    class="inline mr-3 w-6 h-6 text-white animate-spin"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="#E5E7EB"
                    ></path>
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                ) : (
                  <div>Continue</div>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp3;
