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
    })
});
db.close();
const port = process.env.PORT || 3000;
const app = express();

app.use(express.static('./'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req,res) => {
    res.send('./');
});
app.post('/insertIncome', (req, res) => {
    let pdb = new sqlite3.Database(':memory:', err => {
        if(err){
            console.error(err.message);
        } else {
            console.log('connected');
        }
    });
    pdb.serialize(() => {
        pdb.run(`SELECT * FROM Profit`, (err) => {
            if(err){
                console.error(err);
            }
        })
    });
    res.send('success');
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});