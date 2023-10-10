const User = require('../models/User')

loginController = async (req, res) => {
    try {

        const { email, password } = req.body;
        const user = await User.findOne({ email: email });


        if (user) {
            if (password === user.password) {
                return res.send({ message: "Logged In Successfully" })
            } else {
                return res.send({ message: "Password Is Wrong" })
            }
        };

        if (!user) {
            return res.send({ message: "User Not Found" })
        };

    } catch (err) {
        console.error(err.message);
        res.status(500).send({ message: "Unable Finding User" })
    }
}

module.exports = loginController;