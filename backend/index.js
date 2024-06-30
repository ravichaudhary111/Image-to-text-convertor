const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const dotenv = require('dotenv');

const app = express();
dotenv.config()

const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors());
app.use(express.json());
app.use('/api/images', require('./route/image.route'));
app.use('/api/auth', require('./route/auth.route'));


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

