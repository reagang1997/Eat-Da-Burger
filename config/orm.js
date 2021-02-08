const connection = require('./connection.js');

const orm = {
    selectAll(from){
        const queryString = 'SELECT * FROM ??';
        connection.query(queryString, [from], (err, rows) => {
            if(err) throw err;
            console.log(rows);
        });
    },
    insertOne(into, values){
        const queryString = 'INSERT INTO ?? SET ??';
        connection.query(queryString, [into, values], (err, rows) => {
            if(err) throw err;
            console.log(rows);
        });
    },
    updateOne(table, value, condition){
        const queryString = 'UPDATE ?? SET ?? WHERE ??';
        connection.query(queryString, [table, value, condition], (err, rows) => {
            if(err) throw err;
            console.log(rows)
        })
    }
}