const connection = require('./connection');

module.exports = {
    selectAll: () => {
        return new Promise(resolve => {
            let query = `SELECT * FROM pizzas`;
            connection.query(query, (err, res, fields) => {
                resolve(res);
            })
        })
    },
    insertOne: (name, devoured=false) => {
        return new Promise(resolve => {
            let query = 'INSERT INTO pizzas (pizza_name, devoured) VALUES (?, ?)';
            connection.query( query, [name, devoured], (err, res, fields) => {
                if (res.warningStatus === 0) {
                    console.log(`New Pizza '${name}' Succesfully Added!`);
                    resolve(true);
                } else {
                    console.log(`There was an error adding the pizza!`);
                    resolve(false);
                }
            })
        })
    },
    updateOne: (id, devoured=true) => {
        return new Promise(resolve => {
            let query = 'UPDATE pizzas SET devoured = ? WHERE pizza_id = ?';
            connection.query( query, [devoured, id], (err, res, fields) => {
                if (res.warningStatus === 0) {
                    console.log(`Pizza successfully updated!`);
                    resolve(true);
                } else {
                    console.log(`There was an error adding the pizza!`);
                    resolve(false);
                }
            })
        })
    },
}