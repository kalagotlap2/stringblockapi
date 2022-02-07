const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors=require("cors");
const router = require("./app/routes/app.routes.js");

const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

mongoose.Promise = global.Promise;
const MONGODB_URI = "mongodb+srv://admin:admin@cluster0.1zugh.mongodb.net/test";
mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch((err) => {
    console.log("Could not connect to the database. Error...", err);
    process.exit();
  });

const app = express();

app.use(cors());
app.use("/",router);
// app.use(require('./app/routes/app.routes'))

// app.all("*", function(req, res) {
// 	return apiResponse.notFoundResponse(res, "Page not found");
// });

// app.use(bodyParser.urlencoded({ extended: true }));

// app.use(bodyParser.json());



let PORT = 8080;


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
