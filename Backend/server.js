const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();
app.use(cors());
connectDB();

//Init Midleware to parse body (It will allow data in request.body)
app.use(express.json({ extended: false }));

app.use('/api/users', require('./routes/api/user'));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is started at port ${PORT}`));
