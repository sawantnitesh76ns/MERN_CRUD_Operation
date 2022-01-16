const mongoose = require("mongoose")
const config = require("config")
const mongoURI = config.get("mongoURI")

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true
        })
        console.log("Mongoose Is Connected  ")
        
    } catch (error) {
        console.error(error.message)
        process.exit()
        
    }
}

module.exports = connectDB;