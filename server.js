const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const csvjson = require('csvjson');
const readFile = require('fs').readFile;
const models = require("./app/models");
const Customer = models.customers;

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: true
}));


const db = require("./app/models");

// simple route
app.get("/", (req, res) => {
  res.json({
    message: "This route is working"
  });
});

require("./app/routes/customer.routes")(app);

/***** Uncomment to create customers in db: *****/
// readFile('./mock_data.csv', 'utf-8', (err, fileContent) => {
//   if (err) {
//     console.log(err); // Do something to handle the error or just throw it
//     throw new Error(err);
//   }
//   const jsonObj = csvjson.toObject(fileContent);
//   console.log(jsonObj);
//   Customer.bulkCreate(jsonObj)
//   .then(data => console.log('Success, ', data))
//   .catch(err => console.log(err))
// })

// set port, listen for requests
const PORT = process.env.PORT || 8080;
db.sequelize.sync().then(() => app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
}))