const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/SupplyinterchangeLA',{
    useCreatendex: true, 
    useFindAndModify: false, 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});
mongoose.connect(URI,
    err => {
        if(err) throw err;
        console.log('connected to MongoDB')
    });

    module.exports = mongoose.connection;
    