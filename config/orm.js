const connection = require('./connection.js');

const objToSql = (ob) => {
    const arr = [];

    // Loop through the keys and push the key/value as a string int arr
    for (const key in ob) {
        let value = ob[key];
        // Check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            // If string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
            if (typeof value === 'string' && value.indexOf(' ') >= 0) {
                value = `'${value}'`;
            }
            // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
            // e.g. {sleepy: true} => ["sleepy=true"]
            arr.push(`${key}=${value}`);
        }
    }

    // Translate array of strings to a single comma-separated string
    return arr.toString();
};

const orm = {
    selectAll(from, cb) {
        const queryString = 'SELECT * FROM ??';
        connection.query(queryString, [from], (err, rows) => {
            if (err) throw err;
            cb(rows);
        });
    },
    insertOne(into, values, cb) {
        const queryString = 'INSERT INTO ?? SET ??';
        connection.query(queryString, [into, values], (err, rows) => {
            if (err) throw err;
            cb(rows);
        });
    },
    updateOne(table, value, condition, cb) {
        let queryString = `UPDATE ${table}`;
        queryString += ' SET ';
        queryString += objToSql(value);
        queryString += ' WHERE ';
        queryString += condition;
        console.log(queryString)
        connection.query(queryString,  (err, rows) => {
            if (err) throw err;
            cb(rows);
        })
    }
}

module.exports = orm;