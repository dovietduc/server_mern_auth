const express = require('express');
const app = express();
const userRoute = require('./Router/UserRoute');

const connectDb = require('./Services/ConnectDbService');

const port = 5000;

// connent database
connectDb();

// middleware router
app.use('/users', userRoute);


app.listen(port, function(){
    console.log(`server is running ${port}`);
});
