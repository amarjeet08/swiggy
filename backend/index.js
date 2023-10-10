const express = require('express');
const app = express();
const registerRoutes = require('./routes/registerRoutes.js');
const loginRoutes = require('./routes/loginRoutes.js')
const cors = require('cors')
const db = require('./config/db.js')

db.connectDB()


app.use(cors());
app.use(express.json())

app.use('/register', registerRoutes);
app.use('/login', loginRoutes)

app.listen(5500, () => {
    console.log(`Server is running on port 5500`)
})