import express from 'express';
import { getProfile, userLoginController, userSignupController, verifyOTPcontroller } from './user.controller.js';
import { authMiddleware } from '../../middleware/auth.middleware.js';

export const UserRouter = express.Router();

UserRouter.post('/signup',userSignupController);
UserRouter.post('/login',userLoginController);
UserRouter.post('/verifyOTP',verifyOTPcontroller);
UserRouter.get('/profile', authMiddleware, getProfile);
// UserRouter.put('/updateProfile');