const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const app = express();
const AppErorr = require('./utils/appError')
const { errHandling } = require("./utils/errorController");


// ********** routing import
const authRouter = require('./routes/auth/auth.router')

//  cros to allow some origin to our site
app.use(cors({
    origin:'*'
}));

// helmete ,compration xxc, encodeded, rate limiter in production
// cookie parser ,jwt(), joi
//  ******* for post body data ************
app.use(express.json());

// **** login and save the login in access.log file
const logStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });

app.use(morgan('combined',{stream:logStream}));


// use routes using middleware

app.use('/api/v1/auth',authRouter);


app.all("*", (req, res, next) => {
    
    return next(new AppErorr("Page is not found", 404));
  });

  app.use(errHandling);
module.exports = app