import type { Request, Response } from "express";
import { UserLogin, UserSignup, verifyOTP } from "./user.service.js";
import { UserSignupSchema } from "./user.schema.js";
import { generateOTP } from "../../utils/generateotp.js";
import { db } from "../../config/firebaseconfig.js";
import { sendotp } from "../../utils/otpsender.js";
import jwt from 'jsonwebtoken'
import dotenv from "dotenv";

dotenv.config()

declare global {
    namespace Express {
        interface Request {
            user?: any;
        }
    }
}

export const userSignupController = async (req: Request, res: Response) => {
    const UserSignupData = UserSignupSchema.safeParse(req.body);
    if (UserSignupData.success) {
        try {
            await UserSignup(UserSignupData.data);
            res.json({
                message: "User signup sucessfull!"
            })
        } catch (error) {
            res.json({
                message: "Internal server error!"
            })
        }
    } else {
        res.send("Invalid input data")
    }

}

export const userLoginController = async (req: Request, res: Response) => {
    const { email } = req.body;
    if (!email) {
        res.send("Invalid email!");
    }
    try {
        const otpCollection = db.collection("OTP_Verifications");
        const userdata = await UserLogin(email);
        const otp = generateOTP();
        await sendotp(email,otp);
        const expiresAt = Date.now() + 5 * 60 * 1000;
        await otpCollection.doc(email).set({
            otp,
            email,
            expiresAt,
            userid:userdata?.UserID
        });
        res.json({
            message: "OTP sent to email!"
        })
    } catch (error:any) {
        res.json({
            error: error.message
        });
    }
}


export const verifyOTPcontroller = async(req:Request, res:Response)=>{

    const {email,otp} = req.body;
    try {
        const verifyotpresult = await verifyOTP(email,otp);
        if(verifyotpresult)
        {
            const token  = jwt.sign({
                email: verifyotpresult.email,
                userid: verifyotpresult.userid,
                }, process.env.JWT_SECRET!, { expiresIn: '1y' });
            res.json({token:token})
        }
        
    } catch (error) {
        res.json({
            error: "Invalid OTP!"
        })
    }
}

export const getProfile = async(req:Request,res:Response)=>
{
    const profile = req.user;
    
    try {
        const result = await db.collection("UserProfile")
        .where("UserID","==", profile.userid)
        .get()
        if(result.empty)
            res.json({message:"User not found!!"})
        return res.send(result.docs[0]?.data())

    } catch (error) {
        res.json({message:"Profile cannot be fetched!!"});
    }
}