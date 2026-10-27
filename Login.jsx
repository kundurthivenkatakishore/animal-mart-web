import React from "react";
import { useState } from "react";
import { sendOtp, verifyOtp } from "../services/userService";

export const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [otp, setOtp] = useState(new Array(4).fill(""));

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Call your API to send OTP here
    try {
      const res = await sendOtp(phoneNumber, countryCode);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const handleVerifyOTP = async () => {
    // Call your API to verify OTP here
    try {
      const res = await verifyOtp(phoneNumber, countryCode, otp.join(""));
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-red-500 w-full h-screen flex items-center justify-center text-white p-4">
      Login
      <div>
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <button onClick={(e) => handleSubmit(e)}>Submit</button>
      </div>
      <div>
        {otp.map((digit, index) => (
          <input
            key={index}
            type="text"
            value={digit}
            onChange={(e) => {
              const newOtp = [...otp];
              newOtp[index] = e.target.value;
              setOtp(newOtp);
            }}
          />
        ))}
        <button onClick={(e) => handleVerifyOTP()}>Submit</button>
      </div>
    </div>
  );
};
