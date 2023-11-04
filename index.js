const express = require('express');
const bodyParser = require('body-parser');
const routes = require("./routes")
const app = express();

app.use(bodyParser.json());
app.use("/", routes);

const port = 3000;
const mongoose = require('mongoose');
const mongoUrl = 'mongodb+srv://khafifyah:Jamila_ouahidy1234@cluster0.zv9bocl.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error'));

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})

