import type { Request, Response } from "express";
import { UserLogin, UserSignup } from "./user.service.js";
import { UserSignupSchema } from "./user.schema.js";
import { generateOTP } from "../../utils/generateotp.js";
import { db } from "../../config/firebaseconfig.js";
import { sendotp } from "../../utils/otpsender.js";

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
        await UserLogin(email);
        const otp = generateOTP();
        await sendotp(email,otp);
        const expiresAt = Date.now() + 5 * 60 * 1000;
        await otpCollection.doc(email).set({
            otp,
            email,
            expiresAt,
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