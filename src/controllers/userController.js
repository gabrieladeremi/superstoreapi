const User = require('../model/user');


const getUser = async (req, res ) => {

    try {
       
        const { role } = req.body

        console.log(role);

        const user = await User.find({ role });

        console.log(user);

        if ( !user ) return res.status(404).send('User not found for this role');

        return res.status(200).json({
            message: 'User Fetched Successfully',
            user
        });

    } catch (error) {

    return res.send(error)
       
   }

}

module.exports = { getUser };