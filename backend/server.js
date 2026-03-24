import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  pool: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

app.post("/api/book", async (req, res) => {
  const data = req.body;

  const meetingLink = `https://meet.google.com/${Math.random().toString(36).substring(2,10)}`;

  res.json({
    ...data,
    meeting_link: meetingLink,
  });

  transporter.sendMail({
    from: process.env.EMAIL,
    to: data.email,
    subject: "Session Booked 🎉",
    html: `
      <h2>Your Session is Confirmed</h2>
      <p><b>Name:</b> ${data.name}</p>
      <p><b>Date:</b> ${data.date}</p>
      <p><b>Time:</b> ${data.time}</p>
      <a href="${meetingLink}">${meetingLink}</a>
    `,
  })
  .then(() => console.log("Mail sent "))
  .catch(err => console.log("Mail error ", err));
});

app.post("/api/book", async (req, res) => {
  const data = req.body;

  const meetingLink = `https://meet.google.com/${crypto.randomBytes(4).toString("hex")}`;

  res.json({
    ...data,
    meeting_link: meetingLink,
  });

  transporter.sendMail({
    from: process.env.EMAIL,
    to: data.email,
    subject: "Session Booked ",
    html: `
      <h2>Your Session is Confirmed</h2>
      <p><b>Name:</b> ${data.name}</p>
      <p><b>Date:</b> ${data.date}</p>
      <p><b>Time:</b> ${data.time}</p>
      <a href="${meetingLink}">${meetingLink}</a>
    `,
  })
  .then(() => console.log("Mail sent "))
  .catch(err => console.log("Mail error ", err));
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});