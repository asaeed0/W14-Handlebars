const pizza = require('../models/pizza');
const orm = require('../config/orm');

const routes = (app) => {

    app.get('/', (req, res) => {
        pizza.selectAll().then(pizzas => {
            res.render('index', { pizzas: pizzas });
        })
    })

    app.post('/api/addPizza/', (req, res) => {
        console.log('incoming post request');
        let pizzaName = req.body.pizzaName;
        pizza.insertOne(pizzaName).then(pizzas => {
            if(!pizzas) {
                console.log("Opps, something went wrong!");
            } else {
                res.send(true);
            }
        });
    });
    
    app.put('/api/updatePizza/', (req, res) => {
        console.log('incoming put request');
        let pizzaId = req.body.pizzaId;
        pizza.updateOne(pizzaId).then(pizzas => {
            if(!pizzas) {
                console.log("Opps, something went wrong!");
            } else {
                res.send(true);
            }
        });
    });
}

module.exports = routes;