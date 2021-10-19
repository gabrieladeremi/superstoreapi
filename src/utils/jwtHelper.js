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

exports.jwtVerify = async (token) => {
    try {
      const signatory = await jwt.verify(token, process.env.SECRET_KEY);
      return signatory;
    } catch (error) {
      console.log(error);
      throw new jsonwebtoken.JsonWebTokenError("Error, proceessing Request");
    }
};


module.exports = {
    generateToken
}