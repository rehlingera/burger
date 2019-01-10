// Require the ORM
var orm = require("../config/orm.js");

// Use the ORM functions with data plugged in
var burger = {
    // For getting all data
    all: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    // For inserting new data
    insert: function (tableInput, col, val, cb) {
        tableInput = "burgers";
        orm.insertOne(tableInput, col, val, function(res) {
            cb(res);
        });
    },
    // For updating exisitng data
    update: function (objColVal, condition, cb) {
        orm.updateOne("burgers", objColVal, condition, function(res) {
            cb(res);
        });
    }
};

// Export this model for the controller to use
module.exports = burger;