const express = require('express');
const app = express();
const cors = require('cors');

const userRoute = require('./Router/UserRoute');
const connectDb = require('./Services/ConnectDbService');

const port = 5000;
// middleware apply cors add all request
app.use(cors());


// connent database
connectDb();

// middleware router
app.use('/users', userRoute);


app.listen(port, function(){
    console.log(`server is running ${port}`);
});
