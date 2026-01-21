// Importing Mongoose
const mongoose = require('mongoose');

// Importing env variables
const dotenv = require('dotenv');
dotenv.config();

// Function to establish connection with Retry logic
const connectWithRetry = () => {
    console.log("Attempting MongoDB Connection...");

    mongoose.connect(process.env.DATABASE_URL)
    .then(() => console.log("✅ MongoDB connected successfully"))
    .catch((err) => {
        console.log("❌ Error Connecting DB :",err.message);
        console.log("Retrying in 5 seconds...");
        setTimeout(connectWithRetry, 5000);
    });
}

// Exporting the function 
module.exports = connectWithRetry;