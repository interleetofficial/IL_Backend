export const generateOTP = (length: number = 6): string => {
  let otp = "";

  for (let i = 0; i < length; i++) {
    otp += Math.floor(Math.random() * 10); // random digit 0-9
  }

  return otp;
};