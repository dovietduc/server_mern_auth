const express = require('express');
const app = express();
const cors = require('cors');

const userRoute = require('./Router/UserRoute');
const authRoute = require('./Router/AuthRoute');
const connectDb = require('./Services/ConnectDbService');

const port = 5000;
// middleware apply cors add all request
app.use(cors());
// middleware get info from client by req.body
app.use(express.json());


// connent database
connectDb();

// middleware router
app.use('/users', userRoute);
app.use('/api/auth', authRoute);


app.listen(port, function(){
    console.log(`server is running ${port}`);
});
