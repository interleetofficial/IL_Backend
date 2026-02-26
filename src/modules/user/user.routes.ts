import express from 'express';
import { userLoginController, userSignupController, verifyOTPcontroller } from './user.controller.js';

export const UserRouter = express.Router();

UserRouter.post('/signup',userSignupController);
UserRouter.post('/login',userLoginController);
UserRouter.post('/verifyOTP',verifyOTPcontroller);
// UserRouter.get('/profile');
// UserRouter.put('/updateProfile');
// UserRouter.get('/resetPassword');
// UserRouter.put('/changePassword');