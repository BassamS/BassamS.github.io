// const express = require("express");
// const path = require("path");
// const bodyParser = require("body-parser");
// const env = require("dotenv").config();
// const nodemailer = require("nodemailer");

// const app = express();
// const PORT = process.env.PORT || 3000;

// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }));

// // parse application/json
// app.use(bodyParser.json());

// app.listen(PORT, () => {
//   console.log("You are listening on port " + "" + PORT);
// });

// app.get("/", (req, res) => {
//   res.send("Hello");
// });

// app.get("/index", (req, res) => {
//   res.sendFile(path.join(__dirname + "/index.html"));
//   console.log(" this is the form that shows");
// });

// app.post("/index", (req, res) => {
//   "use strict";
//   async function main() {
//     let testAccount = await nodemailer.createTestAccount();

//     let transporter = nodemailer.createTransport({
//       service: "Gmail",
//       auth: {
//         user: process.env.GMAIL_EMAIL,
//         pass: process.env.GMAIL_PASS,
//       },
//     });

//     let info = await transporter.sendMail({
//       from: req.body.mail, // sender address
//       to: "basaidi@gmail.com", // list of receivers
//       subject: "Hello from your portfolio ✔", // Subject line
//       text: req.body.message, // plain text body
//     });

//     console.log("Message sent: %s", info.messageId);
//     console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
//   }

//   main().catch(console.error);
//   res.end("Your message has been sent with success!");
// });
