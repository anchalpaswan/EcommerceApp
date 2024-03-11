const app = require('./app');

const dotenv = require('dotenv');
const connection = require('./config/database');

// Handling Uncaught Exception
process.on('uncaughtException', (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to uncaught exception`);
    process.exit(1)
})
//config
dotenv.config({path: 'backend/config/config.env'});
connection()
app.listen(process.env.PORT,() => console.log(`server working at port ${process.env.PORT}`));

// Unhandled Promis Rejection
process.on("unhandledRejection", (err) => {
    console.log('Error: ${err.message}');
    console.log("shutting down the server due to unhandled Promise Rejctions");

    server.close(() => {
        process.exit(1); 
    })
})