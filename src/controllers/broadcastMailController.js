const User = require('../model/user');

const { mailSender } =  require('../utils/mailer');

const broadcastMail = async (req, res ) => {

    try {

        const { subject, message } = req.body;

        const users = await User.find().lean();

        console.log(users);

        for (let user of users){

            const config = {
                to: user.email,
                subject: subject,
                text: message,
            };
        
            const mailResponse = await mailSender(message, subject, user.email);

            if(mailResponse) {

                return res.status(200).json({

                    message: "Mail Sent Successfully",
                });
                
            } else {
                return res.send('Cannot Send Mail');
            }
        }
           

    } catch (error) {
        
        console.log(error);

        res.send(error);
    }
}

module.exports = { broadcastMail }