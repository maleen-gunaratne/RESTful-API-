const express = require('express');
const app = express();
const morgan = require('morgan');

const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

app.use(morgan('dev'));
//routes which 
app.use('/products',productRoutes);
app.use('/orders',orderRoutes)



/*
// catch 404 and forward to error handler
app.use((error,req, res, next) => {
     error = new Error('Not found');
  error.status=404;
  console.log('hiiiiii...............')
  next(error);
  }); 

  //  error handler
app.use((error,req, res, next) => {
    res.status(error.status || 500);

    res.json({
        error:{
            message:error.message
        }
    })
});
*/
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
  
  // error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
   // res.render('error');
   res.json({
    error:{
        message:error.message
    }
})
  });




module.exports = app; 