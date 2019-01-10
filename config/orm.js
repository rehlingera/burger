var connection = require("../config/connection.js");

// A function that inserts question marks for MySQL syntax (just in case it's needed)
function printQuestionMarks(num) {
    var arr = [];
    for (var i=0;i<num;i++){
        arr.push ("?");
    };
    return arr.toString();
};

// Function to convert objects to MySQL syntax
function objToSql(obj) {
    var arr = [];
    for (var key in obj){
        var val = obj[key];
        if(Object.hasOwnProperty.call(obj,key)) {
            if(typeof val === "string" && val.indexOf(" ") >= 0) {
                val = "'" + val + "'";
            };
            arr.push (key + "=" + val);
        };
    };
    return arr.toString();
};

// The ORM object
var orm = {
    // Function to select all items
    selectAll: function (tableInput, cb){
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query (queryString, function (err,res){
            if(err) {
                throw err;
            };
            cb(res);
        });
    },

    // Function to select new items
    insertOne: function (tableInput, col, val, cb){
        var queryString = `INSERT INTO ?? (${col}) VALUES (?)`;
        connection.query (queryString, [tableInput, val], function (err,res){
            if(err) {
                throw err;
            };
            cb(res);
        });
    },

    // Function to update existing items
    updateOne: function (tableInput, objColVal, condition, cb){
        var queryString = "UPDATE " + tableInput + " SET " + objToSql(objColVal) + " WHERE " + condition + ";";
        connection.query(queryString, function (err,res){
            if(err){
                throw err;
            };
            cb(res);
        });
    }
};

// Export the ORM to be used by the burger model
module.exports = orm;