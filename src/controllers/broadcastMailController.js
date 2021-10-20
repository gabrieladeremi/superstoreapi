const User = require('../model/user');

const { mailSender } =  require('../utils/mailer');

const broadcastMail = async (req, res ) => {

    try {

        const { subject, message } = req.body;

        const users = await User.find().lean();

        console.log(users);

        let userEmailAddress = users.map(user =>  {return user.email});

        console.log('user emails', userEmailAddress);
        
        await mailSender(subject, message, userEmailAddress);

        return res.status(200).json({

            message: "Mail Sent Successfully",
        });

    } catch (error) {
        
        console.log(error);

        res.send(error);
    }
}

module.exports = { broadcastMail }