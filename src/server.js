
const dotenv = require('dotenv');

const app = require('./app') ;

dotenv.config({
    path: './.env'
});

// mongoose.connect(process.env.DATABASE, {
//     useNewUrlParser: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true,
//     useCreateIndex: true
// });

// mongoose.connection.on('connected', () => {
//     console.log('Connected to MongoDB');
// });
// mongoose.connection.on('error', (error) => {
//     console.log(error);
// });


const port = process.env.PORT;

app.listen( 3000, () => {
    console.log(`Application is running on port ${port || 3000}`);
});

// process.on('unhandledRejection', err => {
//     console.log('UNHANDLED REJECTION!!!  shutting down ...');
//     console.log(err.name, err.message);
//     server.close(() => {
//         process.exit(1);
//     });
// });