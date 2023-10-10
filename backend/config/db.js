const mongoose = require('mongoose');

const mongoURI = 'mongodb://127.0.0.1:27017/swiggy'


connectDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

            .then(() => console.log('Connected successfully to the MongoDB'))
    }
    catch (error) {

        console.error('Failed to connect ', error)
    }
}


module.exports = { connectDB };