import type { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config();

declare global {
    namespace Express {
        interface Request {
            user?: any;
        }
    }
}

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const authToken:any = req.headers.authorization;
    console.log(authToken);
    
    try {
        jwt.verify(authToken,process.env.JWT_SECRET!,(err:any,decoded:any)=>{
            if(err)
            {
                res.json({message:"Invalid Token!"});
            }
            req.user = decoded
        })
        next()
    } catch (error) {
        res.json({message:"Invalid Token!"});
    }
}