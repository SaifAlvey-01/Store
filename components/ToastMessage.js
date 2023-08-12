
const ToastMessage = ({type, message}) => {
    return(
        <>
        {type === "success" && <div class="flex items-center gap-2  bg-[#E4F0E7] rounded-md w-350 m-4" >
            <img src="tick-circle.png" className="pl-4" />
            <p className="font-lato text-base font-normal text-xs text-[#374151] leading-5" >{message}</p>
        </div>}
        {type === "error" && <div class="flex items-center gap-2  bg-[#FFE6E6] rounded-md w-350 m-4" >
            <img src="close-circle.png" className="pl-4" />
            <p className="font-lato text-base font-normal text-xs text-[#374151] leading-5" >{message}</p>
        </div>}
        {type === "warning" && <div class="flex items-center gap-2  bg-[#FFF6D9] rounded-md w-350 m-4" >
            <img src="Vector.png" className="pl-4" />
            <p className="font-lato text-base font-normal text-xs text-[#374151] leading-5" >{message}</p>
        </div>}
        {type === "info" && <div class="flex items-center gap-2  bg-[#F3F4F6] rounded-md w-350 m-4" >
            <img src="message-question.png" className="pl-4" />
            <p className="font-lato text-base font-normal text-xs text-[#374151] leading-5" >{message}</p>
        </div>}
        </>
    );
}


export default ToastMessage;