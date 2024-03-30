const app = require('./app');
const port = 4000;
require('dotenv').config();


app.listen(port, ()=> {
  console.log("Server is up from server.js file");
})