
const express = require("express");
const nodemailer = require("nodemailer");

const app = express();
app.use(express.json());

let testAccount;

// Create Ethereal account
async function createTestAccount() {
    testAccount = await nodemailer.createTestAccount();
    console.log("Ethereal Account Created 👇");
    console.log(testAccount);
}

createTestAccount();

// Send email route
app.post("/send-email", async (req, res) => {
    try {
        const { to, subject, text } = req.body;

        const transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            secure: false,
            auth: {
                user: 'jaquelin.howell24@ethereal.email',
                pass: 'WxMawZUyhVzYd9BpTA'
            }
        });

        const info = await transporter.sendMail({
            from: '"Test App 👻" <test@ethereal.email>',
            to,
            subject,
            text,
        });

        res.json({
            message: "Email sent (Ethereal)",
            messageId: info.messageId,
            previewURL: nodemailer.getTestMessageUrl(info),
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Server
app.listen(3000, () => {
    console.log("Server running on port 3000 🚀");
});
