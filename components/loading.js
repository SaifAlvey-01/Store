import React, { useEffect } from "react";
import Lottie from "lottie-react";
import animationData from "../public/animation_ll6mnwur.json";
import { useRouter } from "next/router";

const Loading = ({ url = "/", message = "Loading...", duration = 3000 }) => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push(url, { scroll: false });
    }, duration);

    return () => clearTimeout(timer);
  }, [url, duration, router]);

  return (
    <div className="bg-transparent">
      <Lottie animationData={animationData} loop={true} autoplay={true} />
      <div className="flex flex-row justify-center font-bold text-lg">
        {message}
      </div>
    </div>
  );
};

export default Loading;
