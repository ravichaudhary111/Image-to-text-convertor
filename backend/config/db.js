const mongoose = require('mongoose');

const DBURL = process.env.DBURL;

const connectDB = async () => {
    try {
        await mongoose.connect(DBURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB Connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
