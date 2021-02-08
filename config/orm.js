const connection = require('./connection.js');

const orm = {
    selectAll(from, cb){
        const queryString = 'SELECT * FROM ??';
        connection.query(queryString, [from], (err, rows) => {
            if(err) throw err;
            cb(rows);
        });
    },
    insertOne(into, values, cb){
        const queryString = 'INSERT INTO ?? SET ??';
        connection.query(queryString, [into, values], (err, rows) => {
            if(err) throw err;
            cb(rows);
        });
    },
    updateOne(table, value, condition, cb){
        const queryString = 'UPDATE ?? SET ?? WHERE ??';
        connection.query(queryString, [table, value, condition], (err, rows) => {
            if(err) throw err;
            cb(rows);
        })
    }
}

module.exports = orm;