const jwt = require('jsonwebtoken');
const privatekey = "#A*y*U*s*h#2710";


const verifytoken = async (req, res,next) => {
    try {
        const token = req.headers.authorization;
        await jwt.verify(token, privatekey, (err) => {
            if (err) {
                res.status(401).send("User is Unauthorized");
            }else{
                next();
            }
        });
    }
    catch (error) {
        res.status(401).send(error);

    }
}

module.exports ={
    verifytoken
}