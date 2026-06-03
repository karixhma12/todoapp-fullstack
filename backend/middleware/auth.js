const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");

dotenv.config();

function authMiddleware(req,res,next){
        let token = req.headers["authorization"];
        token = token.split(" ")[1];
        try{
            let decoded = jwt.verify(token,process.env.JWT_SECRET);
            req.email = decoded.email;
            next();
        }
        catch(err){
            res.status(403).json({message : err});
        }
}

module.exports = authMiddleware;

