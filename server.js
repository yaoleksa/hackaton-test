const express = require('express');
const port = process.env.PORT || 3000;
const app = express();

app.use(express.static('./'));

app.get('/', (req,res) => {
    res.send('./');
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});