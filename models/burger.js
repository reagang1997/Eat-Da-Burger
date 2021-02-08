const orm = require('../config/orm.js');

const burger = {
    all(){
        orm.selectAll('burgers', (res) => cb(res))
    },
    insert(values, cb){
        orm.insertOne('burgers', values, cb, (res) => cb(res));
    },
    updateOne(value, condition, cb){
        orm.updateOne('burgers', value, condition, (res) => cb(res));
    }
}

module.exports = burger;