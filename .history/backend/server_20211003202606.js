const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require('body-parser');
const cors = require('cors');
require("dotenv").config();


const userRoute = require("./routes/users");
const pinRoute = require("./routes/pins");



const destinationRoutes = require('./routes/destinations');




app.use(bodyParser.json());
app.use(cors());



dotenv.config();

app.use(express.json());

const URL = process.env.MONGODB_URL;


mongoose.connect(URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})  
 .then(() => console.log("MongoDB connected!"))
 .catch(err => console.log(err));


app.use("/api/users", userRoute);
app.use("/api/pins", pinRoute);


app.use(destinationRoutes);

app.listen(8800, () => {
  console.log("Backend server is running!");
});

app.use(express.static('desti_img'))
