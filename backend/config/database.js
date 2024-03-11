const mongoose = require('mongoose');

const connection = () => {
    mongoose  
        .connect(process.env.MONGO_URL,{ dbName: 'Ecommerce' })
        .then(() => console.log("database connected!"))
        .catch((e) => console.log(e));
}

module.exports = connection;