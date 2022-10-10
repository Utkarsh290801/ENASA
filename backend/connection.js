const mongoose = require('mongoose');
const api_config = require('./config');
// add link write password and /? k beech m database name daalna h 
const url = api_config.dbUrl;
// promise (asynchronous :-(multitask))
// connect karane k liye 
mongoose.connect(url)
.then(() => {
console.log('connected to database')
}).catch((err) => {
    console.log(err);
    
});
    //export because we use in different module 
module.exports = mongoose;