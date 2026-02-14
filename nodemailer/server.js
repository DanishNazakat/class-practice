

const express = require("express");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
app.use(express.json());

// Route
app.post("/send-mail", async (req, res) => {
  try {
    const { to, subject, text } = req.body;

    // transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true,
        family: 4, // 👈 THIS IS THE FIX
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // mail options
    const mailOptions = {
      from: process.env.SMTP_USER,
      to,
      subject,
      text,
    };

    // send mail
    await transporter.sendMail(mailOptions);

    res.status(200).json({
      success: true,
      message: "Email sent successfully ✅",
    });
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: "Email not sent ❌",
      error: error.message,
    });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});

