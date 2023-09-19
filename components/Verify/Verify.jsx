import OTPInput from "react-otp-input";
import React, { useState } from "react";
import styles from "./styledVerify.module.css";
function Verify({ setOTP, OTP, setOtpValue }) {
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
            <input {...props} key={index} maxLength={1} />
          )}
        />
      </div>
    </div>
  );
}

export default Verify;
