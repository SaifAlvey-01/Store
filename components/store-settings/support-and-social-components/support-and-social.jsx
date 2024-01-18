import React, { useEffect } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { updateSocialInfo, getSocialInfo } from "../../../redux/slices/settings/social/socialSlice";
import Cookies from "js-cookie";

export default function SupportAndSocial() {
  const dispatch = useDispatch()
  const storeID = Cookies.get("id");
  const socialData = useSelector(state => state.socialSlice);
  const {socialInfo, loading, status} = socialData
  const schema = yup.object({
    officialEmail: yup.string().email('Invalid email format'),
    facebook: yup.string().url('Invalid URL format'),
    twitter: yup.string().url('Invalid URL format'),
    instagram: yup.string().url('Invalid URL format'),
    linkedin: yup.string().url('Invalid URL format'),
    youtube: yup.string().url('Invalid URL format'),
    pinterest: yup.string().url('Invalid URL format'),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema)
  });

  useEffect(()=>{
    const params = {
      storeID
    }
    dispatch(getSocialInfo(params));
  },[])

  useEffect(()=>{
   
    const formData = {
      officialEmail:socialInfo[0]?.officialEmail,
      facebook:socialInfo[0]?.facebook,
      twitter:socialInfo[0]?.twitter,
      instagram:socialInfo[0]?.instagram,
      linkedin:socialInfo[0]?.linkedin,
      youtube:socialInfo[0]?.youtube,
      pinterest:socialInfo[0]?.pinterest,
    };
    reset(formData);
    
  },[socialInfo]);


  const onSubmitHandler = (data)=>{
    dispatch(updateSocialInfo(data));
  }

  return (
    <div
      className="ml-3 w-[65%] h-auto text-blue-600 p-4"
      style={{
        borderRadius: "10px",
        backgroundColor: "var(--white-color, #FFF)",
        border: "1px solid #e3e3e3",
      }}
    >
      <div className="flex flex-row items-center">
        <h3
          className="m-0 mr-4"
          style={{
            color: "#4B4B4B",
            fontWeight: 600,
            fontSize: "16px",
          }}
        >
          Support & Social
        </h3>

        <div className="flex flex-row items-center">
          {" "}
          <img
            style={{
              color: "#8E8E8E",
            }}
            src={"/question-circle.png"}
            className="mr-1 w-4 h-4"
          />
          <span
            style={{
              color: "#8E8E8E",
              fontSize: "12px",
            }}
          >
            {" "}
            How it works{" "}
          </span>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div
          style={{
            border: "1px solid #EAECF0",
            padding: "14px",
            borderRadius: "8px",
          }}
          className="mt-6"
        >
          <span
            className="font-freesans"
            style={{
              color: "#4B4B4B",
              fontWeight: 500,
              fontSize: "14px",
            }}
          >
            Customer Support{" "}
          </span>

          <div className="mt-8">
            <span
              className="font-freesans"
              style={{
                color: "#4B4B4B",
                fontWeight: 500,
                fontSize: "14px",
              }}
            >
              Email{" "}
            </span>
            <input
              style={{ border: "1.5px solid #E5E7EB" }}
              type="email"
              id="email"
              className="bg-gray-50 text-gray-900 text-sm rounded-lg block w-[80%] px-4 py-3 mt-1"
              placeholder="nftwatcher022@gmail.com"
              {...register("officialEmail")}
            />
              <p className="text-sm	text-red-600">{errors?.officialEmail?.message}</p>

          </div>
        </div>

        <div
          style={{
            border: "1px solid #EAECF0",
            padding: "14px",
            borderRadius: "8px",
          }}
          className="mt-6"
        >
          <span
            className="font-freesans"
            style={{
              color: "#4B4B4B",
              fontWeight: 500,
              fontSize: "14px",
            }}
          >
            Social Profiles{" "}
          </span>

          <div className="mt-8">
            <span
              className="font-freesans"
              style={{
                color: "#4B4B4B",
                fontWeight: 500,
                fontSize: "14px",
              }}
            >
              Facebook URL
            </span>
            <input
              style={{ border: "1.5px solid #E5E7EB", boxSizing: "border-box" }}
              type="text"
              id="facebook"
              className="bg-gray-50 text-gray-900 text-sm rounded-lg block w-full px-4 py-3 mt-1"
              placeholder="facebook.com/username"
              {...register("facebook")}
            />
              <p className="text-sm	text-red-600">{errors?.facebook?.message}</p>

          </div>

          <div className="mt-4">
            <span
              className="font-freesans"
              style={{
                color: "#4B4B4B",
                fontWeight: 500,
                fontSize: "14px",
              }}
            >
              Twitter URL
            </span>
            <input
              style={{ border: "1.5px solid #E5E7EB", boxSizing: "border-box" }}
              type="text"
              id="twitter"
              className="bg-gray-50 text-gray-900 text-sm rounded-lg block w-full px-4 py-3 mt-1"
              placeholder="twitter.com/username"
              {...register("twitter")}
            />
              <p className="text-sm	text-red-600">{errors?.twitter?.message}</p>

          </div>

          <div className="mt-4">
            <span
              className="font-freesans"
              style={{
                color: "#4B4B4B",
                fontWeight: 500,
                fontSize: "14px",
              }}
            >
              Instagram URL
            </span>
            <input
              style={{ border: "1.5px solid #E5E7EB", boxSizing: "border-box" }}
              type="text"
              id="instagram"
              className="bg-gray-50 text-gray-900 text-sm rounded-lg block w-full px-4 py-3 mt-1"
              placeholder="instagram.com/username"
              {...register("instagram")}
            />
              <p className="text-sm	text-red-600">{errors?.instagram?.message}</p>

          </div>

          <div className="mt-4">
            <span
              className="font-freesans"
              style={{
                color: "#4B4B4B",
                fontWeight: 500,
                fontSize: "14px",
              }}
            >
              LinkedIn URL
            </span>
            <input
              style={{ border: "1.5px solid #E5E7EB", boxSizing: "border-box" }}
              type="text"
              id="linkedin"
              className="bg-gray-50 text-gray-900 text-sm rounded-lg block w-full px-4 py-3 mt-1"
              placeholder="linkedin.com/username"
              {...register("linkedin")}
            />
              <p className="text-sm	text-red-600">{errors?.linkedin?.message}</p>

          </div>

          <div className="mt-4">
            <span
              className="font-freesans"
              style={{
                color: "#4B4B4B",
                fontWeight: 500,
                fontSize: "14px",
              }}
            >
              YouTube URL
            </span>
            <input
              style={{ border: "1.5px solid #E5E7EB", boxSizing: "border-box" }}
              type="text"
              id="youtube"
              className="bg-gray-50 text-gray-900 text-sm rounded-lg block w-full px-4 py-3 mt-1"
              placeholder="youtube.com/username"
              {...register("youtube")}
            />
              <p className="text-sm	text-red-600">{errors?.youtube?.message}</p>

          </div>

          <div className="mt-4">
            <span
              className="font-freesans"
              style={{
                color: "#4B4B4B",
                fontWeight: 500,
                fontSize: "14px",
              }}
            >
              Pinterest URL
            </span>
            <input
              style={{ border: "1.5px solid #E5E7EB", boxSizing: "border-box" }}
              type="text"
              id="pinterest"
              className="bg-gray-50 text-gray-900 text-sm rounded-lg block w-full px-4 py-3 mt-1"
              placeholder="pinterest.com/username"
              {...register("pinterest")}
            />
              <p className="text-sm	text-red-600">{errors?.pinterest?.message}</p>
          </div>
          <div className="flex justify-end mt-4 ">
                {" "}
                <button
                  className="cursor-pointer ml-4"
                  type="submit"
                  style={{
                    backgroundColor: "#4162FF",
                    color: "#ffffff",
                    padding: "10px 30px",
                    borderRadius: "4px",
                  }}
                >
                 {loading ?(
                          <svg
                            aria-hidden="true"
                            role="status"
                            class="inline mr-1 w-6 h-4 text-white animate-spin"
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
                        ) : "Save"}

                </button>
              </div>
        </div>

      </form>


    </div>
  );
}
