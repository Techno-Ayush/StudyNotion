const nodemailer = require("nodemailer");
require('dotenv').config();


const mailSender = async (email, title, body) => {
    // Steps when using nodemailer :-

    // 1.Create a transporter to send emails

	// 2.Define the email options

	// 3.Send the email
    try {
        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: 587,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            }
        });


        let info = await transporter.sendMail({
            from: `"Study Notion" <${process.env.MAIL_USER}>`,
            to: `${email}`,
            subject: `${title}`,
            html: `${body}`,
        });
        console.log(info);
        return info;
    }
    catch (error) {
        console.log(error.message);
        return error;
    }
}

module.exports = mailSender;