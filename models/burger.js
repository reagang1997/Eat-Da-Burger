const orm = require('../config/orm.js');

const burger = {
    all(cb){
        orm.selectAll('burgers', (res) => cb(res))
    },
    insert(values, cb){
        orm.insertOne('burgers', values, cb, (res) => cb(res));
    },
    create(cols, values, cb){
        orm.create('burgers', cols, values, (res) => cb(res));
    }
}

module.exports = burger;