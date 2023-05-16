const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:', err => {
    if(err){
        return 'Failed to connect';
    } else {
        return 'Successfuly connected to database';
    }
});
db.serialize(() => {
    db.run('CREATE TABLE IF NOT EXISTS Profit (Date TEXT, Source TEXT, Amount REAL)');
});
const port = process.env.PORT || 3000;
const app = express();

app.use(express.static('./'));

app.get('/', (req,res) => {
    res.send('./');
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
db.close();