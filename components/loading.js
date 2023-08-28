import React, { useEffect } from "react";
import Lottie from "lottie-react";
import animationData from "../public/animation_ll6mnwur.json";
import { useRouter } from "next/navigation";
// import cogoToast from 'cogo-toast';

const Loading = ({ url }) => {
  const router = useRouter();

  setTimeout(() => {
    router.push(url, { scroll: false });
  }, 3000);

  // useEffect(()=>{
  //   cogoToast.success('Password has been reset! Login Now');
  // },[])

  return (
    <div className="bg-transparent">
      <Lottie animationData={animationData} loop={true} autoplay={true} />
      <div className="flex flex-row justify-center items-center font-bold text-lg">
        Resetting Password...
      </div>
    </div>
  );
};

export default Loading;
