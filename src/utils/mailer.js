const nodemailer = require("nodemailer");

const mailSender = async (messsage, subject, mailingAddresses) => {
   
  try {
    const transporter = nodemailer.createTransport({

      host: "smtp.gmail.com",
      port: 465,
      secure: true,
  
      auth: {
        user: 'gabrieladeremi@gmail.com',
        pass: '@deR*123*',
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const info = await transporter.sendMail({
      from: "Gab",
      to: mailingAddresses,
      subject: subject,
      text: messsage
    });

    return `Preview URL: %s', ${nodemailer.getTestMessageUrl(info)}`;
    
  } catch (err) {

    console.log(err)

    return (err.message);
  }
};

module.exports = { mailSender }