module.exports = function(app){
// customers
    app.get("/api/customers", function(req, res) {
        // express callback response by calling burger.selectAllBurger
        db.Customer.findAll({}).then(function(customerData){
            res.json(customerData);
        });
    });

    // post route
    app.post("/api/customers", function(req, res) {
        // takes the request object using it as input for burger.addBurger
        db.Customer.create({
            customer_name: req.body.customer_name,
        }).then(function(customerData){
            res.json(customerData);
        });
    });
}

