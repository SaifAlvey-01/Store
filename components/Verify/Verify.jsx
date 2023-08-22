import OTPInput from "react-otp-input";
import React, { useState } from "react";
import styles from "./styledVerify.module.css"; 
function Verify({setOTP, OTP}) {
 
  function handleChange(OTP) {
    setOTP(OTP);
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
          inputStyle={styles.inputbox}
          renderInput={(props) => <input {...props} />}
        />
      </div>
    </div>
  );
}

export default Verify;
