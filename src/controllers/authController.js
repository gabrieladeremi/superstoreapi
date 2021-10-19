const { req, res } = require('express');
const { signUpValidator, signInValidator } = require('../utils/authValidator');
const { hashPassword, decodeHashedPassword } =  require('../utils/bcryptHelper');
const { generateToken } = require('../utils/jwtHelper');

const User = require('../model/user');

const signUp = async (req, res) => {

    try {
        
        const { error } = signUpValidator(req.body);
        
        if (error) return res.status(400).send(error.details[0].message);
        
        const { firstname, lastname, email, password, role } = req.body;

        if ( await User.findOne({ email: email })) {

            return res.json(400).send('User already exist');
        }
        else {

            const hashedPassword = await hashPassword(password);

            const newUser = new User({
                firstname,
                lastname,
                email,
                password: hashedPassword,
                role
            });
        
            await newUser.save();
        
            return res.status(201).json({
                message: 'User created successfully',
                firstname: newUser.firstname,
                lastname: newUser.lastname,
                email: newUser.email,
                role: newUser.role
            })
        }
       
    } catch (error) {
       
        console.log(' my error:', error);

        res.send(error);
    }
   
}


const signIn = async (req, res ) => {

    try {

        const { error } = signInValidator(req.body);
        
        if (error) return res.status(400).send(error.details[0].message);
        
        const { email, password } = req.body;

        const savedUser = await User.findOne({ email: email })

        if ( !savedUser ) return res.status(404).send('Invalid User Credentials');

        const passwordMatch = await decodeHashedPassword(password, savedUser.password);

        console.log(passwordMatch);

        if( !passwordMatch ) return res.status(404).send('Invalid User Credentials');

        const payload = {
            id: savedUser._id,
            email: savedUser.email,
            role: savedUser.role
        };

        const generatedToken = await generateToken(payload);

        console.log(generatedToken);

        return res.status(200).json({

            message: `Login Successful`,
            id: savedUser._id,
            token: generatedToken
        });


        
    } catch (error) {

         
        console.log(' my error:', error);

        res.send(error);
        
    }
}

module.exports = {
    signUp,
    signIn
};