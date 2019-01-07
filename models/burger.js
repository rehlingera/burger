var orm = require("../config/orm.js");

var burger = {
    all: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    insert: function (tableInput, col, val, cb) {
        tableInput = "burgers";
        orm.insertOne(tableInput, col, val, function(res) {
            cb(res);
        });
    },
    update: function (objColVal, condition, cb) {
        orm.updateOne("burgers", objColVal, condition, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;