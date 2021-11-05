const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const userRoute = require("./routes/users");
const pinRoute = require("./routes/pins");


const postRoutes = require('./routes/posts');
const destinationRoutes = require('./routes/destinations');

const bodyParser = require('body-parser');
const cors = require('cors');
require("dotenv").config();


app.use(bodyParser.json());
app.use(cors());



dotenv.config();

app.use(express.json());

mongoose 
 .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,   })   
 .then(() => console.log("MongoDB connected!"))
 .catch(err => console.log(err));

app.use("/api/users", userRoute);
app.use("/api/pins", pinRoute);




app.use(postRoutes);
app.use(destinationRoutes);

app.listen(8800, () => {
  console.log("Backend server is running!");
});
