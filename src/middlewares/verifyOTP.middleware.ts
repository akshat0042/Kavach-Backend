import { Request, Response, NextFunction } from "express";
import { ResponseCode } from "../utils/responseCode.enum.js";
import { verifyOTP } from "../utils/otpUtils.js";

const verifyOTPMiddleware = async(req: Request, res: Response, next: NextFunction) => {
  try {
    
    const {otp,email} = req.body;
    const isValid = await verifyOTP(otp,email);
    if(!isValid){

        res.status(ResponseCode.BAD_REQUEST).json({
            message :"Incorrect OTP !"
        })
        return;
    }
    next();
  }
};

export default verifyOTPMiddleware;
