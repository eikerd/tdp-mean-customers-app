const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

const PORT = 3000;

// enable cors
app.use(cors());
// enable json parser
app.use(express.json());

// route the customer api
const customerRoutes = require('./routes/customers');
// use the route
app.use('/api/customers', customerRoutes);

app.get('/', (req, res) => {
    res.send("Welcome to Customers API !")
})


main().catch((error) => console.error(error));

async function main() {
    // prepre conn string
    const connectionString = "mongodb+srv://psylux:moscow@listotravel.cm8aj.mongodb.net/?retryWrites=true&w=majority&appName=ListoTravel"
    await mongoose.connect(connectionString);
    mongoose.set('strictQuery', true);
}

module.exports = app;
