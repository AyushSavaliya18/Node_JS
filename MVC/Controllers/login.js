
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const privatekey = "#A*y*U*s*h#2710";

const userlogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log("!!!!", req.body.password);
        const login = await user.findOne({ email: email })
        console.log("Data :", login);

        if (!login) {
            res.status(401).res.send({
                message: "email is not valid"
            });
        }
        const userpassword = await bcrypt.compare(password, login.password);
        console.log("User Password:", userpassword);

        if (userpassword) {
            const token = jwt.sign({ email: login.email, password: login.password }, privatekey, { expiresIn: '1h' });

            res.status(202).send({ message: "User Login Sucessfully !!!", login, token: token })

        } else {
            res.status(401).send(" Entered Password is Wrong")
        }
    } catch (error) {
        res.status(401).send(error);
    }
}
module.exports = {
    userlogin
}