import nodemailer from "nodemailer";
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for 587
    auth: {
        user: "interleet.official@gmail.com",
        pass: "ypsp hvle tfle jauc",
    },
});
export const sendotp = async (email:string,otp:string) => {

    try {
        const info = await transporter.sendMail({
            from: '"Interleet" <interleet.official@gmail.com>',
            to: email,
            subject: "Your OTP for Interleet Login",
            text: `Your OTP is ${otp}`,
            html: `<b>Your OTP is ${otp}</b>`,
        });

        console.log("Message sent:", info.messageId);

    } catch (error) {
        throw new Error("Failed to send OTP email");
    }
}

