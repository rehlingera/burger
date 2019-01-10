// Require express
var express = require("express");

// Establish router variable
var router = express.Router();

// Require burger model
var burger = require("../models/burger.js");

// Display all burger data when on the "/" page
router.get("/", function (req, res) {
    burger.all(function (data) {
        var hbsObj = {
            burgers: data
        };
        console.log(hbsObj);
        res.render("index", hbsObj);
    });
});

// Post new data to the burger model
router.post("/api/burgers", function (req, res) {
    burger.insert("burgers", "burger_name", req.body.burger_name, function (result) {
        res.json({ id: result.insertId });
    });
});

// Update data on the burger model
router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;
    console.log("Condition: " + condition)
    burger.update({
        devoured: req.body.devoured
    }, condition, function (result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        };
    });
});

// Export the router to be used by the server
module.exports = router;