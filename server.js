const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:', err => {
    if(err){
        return 'Failed to connect';
    } else {
        return 'Successfuly connected to database';
    }
});
db.serialize(() => {
    db.run('CREATE TABLE IF NOT EXISTS Profit (Date TEXT, Source TEXT, Amount REAL)').wait((param) => {
        console.log(param);
    });
});

const port = process.env.PORT || 3000;
const app = express();

app.use(express.static('./'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req,res) => {
    res.send('./');
});
app.get('/profitInfo', (req, res) => {
    res.send({
        date: '2023-13-14',
        source: 'work',
        amount: 5.0
    });
});
app.post('/insertIncome', (req, res) => {
    db.serialize(() => {
        console.log(req.body);
        db.run(`INSERT INTO Profit VALUES(${req.body.date}, ${req.body.source}, ${req.body.amount})`);
        db.each('SELECT * FROM Profit', (err, row) => {
            console.log(row);
        });
    });
    res.send('success\n');
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});