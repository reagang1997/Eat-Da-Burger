const orm = require('../config/orm.js');

const burger = {
    all(cb){
        orm.selectAll('burgers', (res) => cb(res))
    },
    create(cols, values, cb){
        orm.create('burgers', cols, values, (res) => cb(res));
    },
    updateOne(value, condition, cb){
        orm.updateOne('burgers', value, condition, (res) => cb(res));
    }
}

module.exports = burger;