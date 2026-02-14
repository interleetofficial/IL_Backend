import express from 'express';

export const Userroute = express.Router();

Userroute.post('/signup');
Userroute.post('/login');
Userroute.post('/verifyOTP');
Userroute.get('/profile');
Userroute.put('/updateProfile');
Userroute.get('/resetPassword');
Userroute.put('/changePassword');