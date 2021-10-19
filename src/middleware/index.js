const { verifyJwt } = require('../utils/jwtHelper');

const validateToken = async (req, res, next ) => {

    try {

        const authHeader = req.headers.authorization;

        //console.log('bearer',authHeader);

        if (authHeader) {

          const token = req.headers.authorization.split(" ")[1];

          //console.log('token',token);
    
          const result = await verifyJwt(token);

          //console.log('result',result);
          
          if (!result) {

            return res.status(400).send("Invalid bearer token");

          } else {

            req.decoded = result;

            //console.log(' decoded',req.decoded);

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

      } else {

        next();

      }

    } catch (error) {

      next(error);
    }
};

module.exports = {

    validateToken,
    validateSupervisor

}