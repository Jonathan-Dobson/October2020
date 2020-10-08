const mongoose = require('mongoose')
const {
    MONGO_USER,
    MONGO_PASS,
    MONGO_HOST,
    MONGO_DB
} = process.env;

const options = {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
};

const uri = `mongodb+srv://${
        MONGO_USER }:${
        MONGO_PASS }@${
        MONGO_HOST }/${
        MONGO_DB }?retryWrites=true&w=majority`;
        
module.exports = new Promise((res,rej)=>{        
    console.log('Connecting to the Database...')

    mongoose.connect(uri, options, 
    (e) => {
        if(e){
            console.log(e)
            rej(e)
            throw new Error(e)
        }       
        else{
            res(`Connected to ${MONGO_HOST}/${MONGO_DB}`)
        } 
    })
    const db = mongoose.connection;
    
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        console.log(`we're connected!`)
    });
});