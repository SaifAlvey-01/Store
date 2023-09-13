import OTPInput from "react-otp-input";
import React, { useState } from "react";
import styles from "./styledVerify.module.css"; 
function Verify({setOTP, OTP, setOtpValue}) {
 
  function handleChange(OTP) {
    const numericValue = OTP.replace(/[^0-9]/g, "");
    setOTP(numericValue);
  }

  return (
    <div className={styles.verifycontainer}>
      <div className={styles.otpinput}>
        <OTPInput
          onChange={handleChange}
          value={OTP}
          numInputs={6}
          separator={<span>-</span>}
          isInputNum
          inputType="number"
          inputStyle={styles.inputbox}
          renderInput={(props, index) => (
            <input
              {...props}
              key={index}
              // style={{ width: "30px" }} // Set the width of the input boxes
              maxLength={1} // Set max length to 1 to ensure only one character is allowed
            />
          )}
        />
      </div>
    </div>
  );
}

export default Verify;
