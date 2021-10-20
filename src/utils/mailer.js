const nodeMailer = require('nodemailer');


const mailSender = async (payload) => { 

    try {

        const mailTransporter = nodeMailer.createTransport({
        
            service: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
            
                user: 'gabrieladeremi@mail.com',
                pass: '@deR*123*',

            },
            tls: {
                rejectUnauthorized: false,
            },
         });

        const info = await mailTransporter.sendMail({
        from: "gabrieladeremi@gmail.com",
        ...payload,
        }, (error, info) => {
            if(error){
                return console.log(error);
            } else {
                console.log('Email has been sent');
                res.send(info);
            }
        });

        return `Preview URL: %s', ${nodeMailer.getTestMessageUrl(info)}`;

    } catch (err) {

        console.log(err)

        return (err.message);
    }
}

module.exports = { mailSender }