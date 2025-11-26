const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
// console.log(process.env.PORT);


app.get('/', (req, res) => {
    res.json('Hello, World!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


// Export the app for testing or further usage
// module.exports = app;