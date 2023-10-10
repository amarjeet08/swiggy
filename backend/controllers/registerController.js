const User = require('../models/User')


registerController = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const user = await User.findOne({ email: email })


        if (user) {
            return res.send({ message: "User already exists" })
        }

        const newUser = new User({ name, email, password })
        await newUser.save()

        res.send({ message: "User created successfully" })

    } catch (err) {
        console.error(err.message)
        res.status(500).send({ err: "User has not been created" })
    }
}

module.exports = registerController;

