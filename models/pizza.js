const orm = require('../config/orm');

const pizza = {

    selectAll: orm.selectAll,

    insertOne: orm.insertOne,

    updateOne: orm.updateOne,

}

module.exports = pizza;