const bcrypt = require('bcryptjs');

const hashPassword = async (inputtedPassword) => {

    const hashedPassword = await bcrypt.hashSync(inputtedPassword, 12);

    return hashedPassword;
}

const decodeHashedPassword = async ( inputtedPassword, savedPassword ) => {

    return await bcrypt.compareSync(inputtedPassword, savedPassword);
}

module.exports = {
    hashPassword,
    decodeHashedPassword
}