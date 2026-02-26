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
            html: `
                      <div style="font-family: Arial, sans-serif; background-color:#f5f7fa; padding: 40px;">
                        <div style="max-width: 520px; margin: auto; background: #ffffff; border-radius: 10px; padding: 35px; border:1px solid #e6e9ef;">
                        
                        <h2 style="margin:0; font-weight:600; font-size:22px; color:#1a1d23; text-align:center;">
                            Interleet – Verification Code
                        </h2>

                        <p style="margin-top:25px; font-size:15px; color:#444c56; line-height:1.6;">
                            Dear User,
                            <br><br>
                            You are receiving this email because a login request was initiated for your 
                            <strong>Interleet</strong> account. To proceed with the authentication, please use the verification code provided below.
                        </p>

                        <div style="margin: 30px auto; text-align:center;">
                            <div style="
                            display:inline-block;
                            background:#f0f2f5;
                            padding:14px 28px;
                            font-size:24px;
                            letter-spacing:4px;
                            font-weight:700;
                            color:#1a1d23;
                            border-radius:8px;
                            border:1px solid #d5d9e0;
                            ">
                            ${otp}
                            </div>
                        </div>

                        <p style="font-size:14px; color:#555b65; line-height:1.6;">
                            This One-Time Password (OTP) is valid for the next <strong>10 minutes</strong>.  
                            If you did not initiate this request, we strongly recommend ignoring this email or contacting our support team immediately.
                        </p>

                        <p style="margin-top:35px; font-size:14px; color:#7a808a;">
                            Regards,<br>
                            <strong>Interleet Team</strong>
                        </p>

                        <hr style="margin: 35px 0; border:0; border-top:1px solid #e6e9ef;">

                        <p style="font-size:12px; color:#9aa0aa; line-height:1.5; text-align:center;">
                            This is an automated message. Please do not reply to this email.
                        </p>

                        </div>
                    </div>
  `
        });

        console.log("Message sent:", info.messageId);

    } catch (error) {
        throw new Error("Failed to send OTP email");
    }
}

