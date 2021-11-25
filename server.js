const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
const config = require("config");
const username = config.get("PORTFOLIO_USERNAME");
const password = config.get("PORTFOLIO_PASSWORD");

const PORT = process.env.PORT || 5000;

// Middlewares
app.use(express.static("client"));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/client/public/index.html");
});

app.post("/", (req, res) => {
  const output = `
  Hi There, Femi Obadimu (The Crtitcal Thinker)
  My Name is ${req.body.name}, I'm a/an ${req.body.subject}.
  Main Purpose for Message: ${req.body.message}.
  Here's my Mail-Address : ${req.body.email}.
  I,d Love to hear from you, i can always be reached : ${req.body.phone}.
  
  Best Regards Developer!!
  `;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user:  username,
      pass: passwordnp,
    },
  });

  const mailOptions = {
    from: req.body.email,
    to: "ficazzosam@gmail.com",
    subject: `Message from ${req.body.email}`,
    text: output,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send(error);
    } else {
      console.log("Email Sent" + info.response);
      res.send("success");
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
});
