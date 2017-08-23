var db = require('../dbconnection');

var Account = {
    getAllAccounts: function(callback){
        return db.query("Select * from account", callback);
    },

    getAccountByIds: function(userid, bankid, callback){
        return db.query("select * from account where userid=? AND bankid=?", [userid, bankid], callback);
    },

    addAccount: function(Account, callback){
        return db.query("Insert into account (userid, bankid, type, name, opendate) values(?, ?, ?, ?, ?)", [Account.userid, Account.bankid, Account.type, Account.name, Account.opendate], callback);
    },

    deleteAccount: function(id, callback){
        return db.query("delete from account where id=?", [id], callback);
    },

    updateAccount: function(id, Account, callback){
        console.log(Account);
        return db.query("update account set type=?, name=?, opendate=? where id=?", [Account.type, Account.name, Account.opendate, id], callback);
    }
};

module.exports = Account;