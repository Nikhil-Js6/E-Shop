const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect('mongodb://localhost:27017/Flipkart', {}, () => {
    console.log("Connected to DB \u{1F525}");
});

app.listen(3300, function() {
    console.log("Server started on port: 3300 \u{1F680}");
});
