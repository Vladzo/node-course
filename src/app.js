const express = require("express");

const app = express();

app.use((req, res, next) => {
    console.log('first middleware');
    next();
});
app.use((req, res, next) => {
    console.log('second middleware');
    res.json({message: 'OK'})
});

app.listen(3000, () => console.log("Server listen 3000"));
