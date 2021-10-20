const { verifyJwt } = require('../utils/jwtHelper');

const validateToken = async (req, res, next ) => {

  try {

    const authHeader = req.headers.authorization;

    if (authHeader) {

      const token = req.headers.authorization.split(" ")[1];
    
      const result = await verifyJwt(token);

      if (!result) {

        return res.status(400).send("Invalid bearer token");

      } 
      else {

        req.decoded = result;

        next();

      }

    } 
    else {

      return res.status(400).send("Authorization header is required");

    }

  } catch (error) {

    next(error);

  }
}


const validateSupervisor = async (req, res, next) => {
  try {

    const { role } = req.decoded;

    console.log(role);

    if (role !== "Supervisor") {

      return res.status(400).send("You are not authorised to access this route");

    } 
    else {

      next();

    }

  } catch (error) {

    next(error);

  }
};

const validateEmployee = async (req, res, next) => {
  try {

    const { role } = req.decoded;

    console.log(role);

    if (role !== "Employee") {

      return res.status(400).send("You are not authorised to access this route");

    } 
    else {

      next();

    }

  } catch (error) {

    next(error);

  }
};

module.exports = {

  validateToken,
  validateSupervisor,
  validateEmployee

}