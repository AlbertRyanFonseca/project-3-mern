const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/SupplyinterchangeLA',{

    useNewUrlParser: true, 
    useUnifiedTopology: true, 
//    useCreateIndex: true, 
//    useFindAndModify: false, 
// added error bounce back


});

module.exports = mongoose.connection;
    