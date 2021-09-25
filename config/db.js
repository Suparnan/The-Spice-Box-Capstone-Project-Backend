const mongoose = require("mongoose");
const config =  require('config');

const db = config.get('mongouri');

//DB Connection
const connectDB =   async () => {
    try {
        await mongoose.connect(db, {
            useNewURLParser: true,
            useUnifiedTopology: true,
        });

        console.log("Database connected Successfully");
    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;