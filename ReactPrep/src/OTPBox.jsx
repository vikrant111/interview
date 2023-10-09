import React, { useState } from "react";
// import Header from "components/Header";
// import AppConfig from "App.config";
// import ExternalInfo from "components/ExternalInfo";

const OTPBox = () => {
    const [otp, setOtp] = useState(new Array(4).fill(""));

    const handleChange = (element, index) => {
        const value = element.value;
    
        if (isNaN(value)) return false;
    
        // Handle backspace key press
        if (value === "" && index >= 0) {
            // Clear current field and move focus to the previous field
            setOtp(prevOtp => [
                ...prevOtp.map((d, idx) => (idx === index ? "" : d))
            ]);
            const previousInput = element.previousSibling;
            if (previousInput) {
                previousInput.focus();
            }
        } else {
            // Update the current field and move focus to the next field
            setOtp(prevOtp => [
                ...prevOtp.map((d, idx) => (idx === index ? value : d))
            ]);
            const nextInput = element.nextSibling;
            if (nextInput) {
                nextInput.focus();
            }
        }
    };
    

    return (
        <>

            <div className="row">
                <div className="col text-center">
                    <h2>Welcome to the channel!!!</h2>
                    <p>Enter the OTP sent to you to verify your identity</p>

                    {otp.map((data, index) => {
                        return (
                            <input
                                className="otp-field"
                                type="text"
                                name="otp"
                                maxLength="1"
                                key={index}
                                value={data}
                                onChange={e => handleChange(e.target, index)}
                                onFocus={e => e.target.select()}
                            />
                        );
                    })}

                    <p>OTP Entered - {otp.join("")}</p>
                    <p>
                        <button
                            className="btn btn-secondary mr-2"
                            onClick={e => setOtp([...otp.map(v => "")])}
                        >
                            Clear
                        </button>
                        <button
                            className="btn btn-primary"
                            onClick={e =>
                                alert("Entered OTP is " + otp.join(""))
                            }
                        >
                            Verify OTP
                        </button>
                    </p>
                </div>
            </div>
        </>
    );
};

export default OTPBox;