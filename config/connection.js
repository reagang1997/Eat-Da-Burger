const sql = require('mysql');

const connection = sql.createConnection({
    host: 'localhost',
    user:'root',
    password: 'reagan01',
    port: 3306,
    database: 'burgers_db'
});

connection.connect(err => {
    if(err) throw err;
    console.log(`connected on ${connection.threadId}`);
})

module.exports = connection;