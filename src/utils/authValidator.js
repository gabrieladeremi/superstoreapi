const Joi = require('joi');


const signUpValidator = (data) => {
    const schema = Joi.object({
        firstname: Joi.string().min(3).required(),
        lastname: Joi.string(),
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required(),
        role: Joi.string().required(),
    })
    
    return schema.validate(data)
}

const signInValidator = (data) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required(),
    })
    return schema.validate(data)
}



module.exports = {
    
    signUpValidator,
    signInValidator
};