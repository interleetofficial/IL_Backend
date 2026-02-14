import type { Request, Response } from "express";
import { UserSignup } from "./user.service.js";
import { UserSignupSchema } from "./user.schema.js";

export const userSignup = async (req: Request, res: Response) => {
    const UserSignupData = UserSignupSchema.safeParse(req.body);
    if (UserSignupData.success) {
        try {
            await UserSignup(UserSignupData.data);
            res.json({
                message: "User signup sucessfull!"
            })
        } catch (error) {
            res.json({
                message:"Internal server error!"
            })
        }
    }else{
        res.send("Invalid input data")
    }

}