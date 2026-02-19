import express from 'express';
import { userLoginController, userSignupController } from './user.controller.js';

export const UserRouter = express.Router();

UserRouter.post('/signup',userSignupController);
UserRouter.post('/login',userLoginController);
// UserRouter.post('/verifyOTP');
// UserRouter.get('/profile');
// UserRouter.put('/updateProfile');
// UserRouter.get('/resetPassword');
// UserRouter.put('/changePassword');