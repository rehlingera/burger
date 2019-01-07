var connection = require("../config/connection.js");

function printQuestionMarks(num) {
    var arr = [];
    for (var i=0;i<num;i++){
        arr.push ("?");
    };
    return arr.toString();
};

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

var orm = {
    selectAll: function (tableInput, cb){
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query (queryString, function (err,res){
            if(err) {
                throw err;
            };
            cb(res);
        });
    },

    insertOne: function (tableInput, col, val, cb){
        var queryString = "INSERT INTO " + tableInput + " (" + col + ") VALUES (" + val + ");";
        connection.query (queryString, function (err,res){
            if(err) {
                throw err;
            };
            cb(res);
        });
    },

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

module.exports = orm;