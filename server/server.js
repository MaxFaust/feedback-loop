
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;

const pg = require('pg');

const pool = new pg.Pool({
    host: 'localhost',           
    port: 5432,                    
    database: 'prime_feedback',        
    max: 10,                        
    idleTimeoutMillis: 30000       
});

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.post('/', (req, res) => {
    pool.query(`INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`, [req.body.feels, req.body.understanding, req.body.supported, req.body.comments])
.then((response) => {
    console.log('DB response:', response);
    res.send(200);
}).catch((error) => {
    console.log('DB error:', error);
    res.send(500);
  })
})


/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});