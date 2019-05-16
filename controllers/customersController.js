module.exports = function(app){
    var db = require("../models");
// customers
    app.get("/api/customers", function(req, res) {
        db.Customer.findAll({}).then(function(customerData){
            res.json(customerData);
        });
    });

    // post route
    app.post("/api/customers", function(req, res) {
        db.Customer.create({
            customer_name: req.body.customer_name,
        }).then(function(customerData){
            res.json(customerData);
        });
    });
}

