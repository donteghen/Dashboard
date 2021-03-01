const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./routes/project.router.js');
const db = require('./config/db.config');

// force: true will drop the table if it already exists
db.sequelize.sync({force: true}).then(() => {
    console.log('Drop and Resync with { force: true }');
  });
const port = process.env.PORT || '3000';
const host = 'localhost';


// Initializations
const app = express();


//express middleware
app.use(bodyParser.json());
app.use(cors());
app.use('/', router);
 

// create and start server
app.listen(port, ()=>{
    console.log(`http//:${host}:${port}`)
});
