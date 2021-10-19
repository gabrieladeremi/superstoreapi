const jwt = require('jsonwebtoken');

const generateToken = async (payload) => {

  try {
    const token = await jwt.sign({
      ...payload,
      },
      process.env.JWT_SECRET,
      { expiresIn: "5h" }
    );
    
    return token;

  } catch (error) {

    return error;

  }

}

const verifyJwt = async (token) => {
  try {
    const signatory = await jwt.verify(token, process.env.JWT_SECRET);

    return signatory;

  } catch (error) {

    return "Error, proceessing Request";

  }

};


module.exports = {
  generateToken,
  verifyJwt
}