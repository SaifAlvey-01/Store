import React, { use, useEffect } from "react";
import Lottie from "lottie-react";
import animationData from "../public/animation_ll6mnwur.json";
import { useRouter } from "next/router";
import cogoToast from "cogo-toast";


const Loading = ({
  url = "/forgot",
  message = "Loading...",
  duration = 3000,
}) => {
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push(url);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="bg-transparent">
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        duration
      />
      <div className="flex flex-row justify-center font-bold text-lg">
        {message}
      </div>
    </div>
  );
};

export default Loading;
