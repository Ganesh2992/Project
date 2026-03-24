import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/book", async (req, res) => {
  const data = req.body;

  console.log("DATA RECEIVED:", data);
  console.log("EMAIL:", data.email);

  const meetingLink = `https://meet.google.com/${Math.random().toString(36).substring(2,10)}`;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL, // ✅ FIXED
      to: data.email, // ✅ ONLY USER EMAIL
      subject: "Session Booked 🎉",
      html: `
        <h2>Your Session is Confirmed</h2>
        <p><b>Name:</b> ${data.name}</p>
        <p><b>Date:</b> ${data.date}</p>
        <p><b>Time:</b> ${data.time}</p>
        <p><b>Meeting Link:</b></p>
        <a href="${meetingLink}">${meetingLink}</a>
      `,
    });

    console.log("Mail sent ✅");

  } catch (err) {
    console.log("Mail error ❌", err);
  }

  res.json({
    ...data,
    meeting_link: meetingLink, // ✅ correct key
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});