var db = require('../dbconnection');

var Bank = {
    getAllBanks: function(callback){
        return db.query("Select * from bank", callback);
    },

    getBankByUserId: function(id, callback){
        return db.query("select * from bank where userid=?", [id], callback);
    },

    addBank: function(Bank, callback){
        return db.query("Insert into bank (userid, name, country) values(?, ?, ?)", [Bank.userid, Bank.name, Bank.country], callback);
    },

    deleteBank: function(id, callback){
        return db.query("delete from bank where id=?", [id], callback);
    },

    updateBank: function(id, Bank, callback){
        return db.query("update bank set name=?, country=? where id=?", [Bank.name, Bank.country, id], callback);
    }
};

module.exports = Bank;