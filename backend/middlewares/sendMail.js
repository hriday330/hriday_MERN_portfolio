import { createTransport } from "nodemailer";
let myMail = process.env.MYMAIL || "hriday2004@outlook.com"
export const sendMail = async (text) => {
    const transporter = createTransport({
        host: "smtp.mailtrap.io",//smpt host
        port: 2525,//smpt port
        auth: {
            user: "b9f86e2f43f657",//smpt user
            pass: "b3fae62bf43c87"//smpt pass
        }
    });

    await transporter.sendMail({
        subject: "CONTACT REQUEST FROM PORTFOLIO",
        to: myMail,
        from: myMail,// sending email to itself marked as message from user 
        text
    });

};