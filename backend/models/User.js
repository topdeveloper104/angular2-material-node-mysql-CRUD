var db = require('../dbconnection');

var User = {
    getAllUsers: function(callback){
        return db.query("Select * from user", callback);
    },

    getUserById: function(id, callback){
        return db.query("select * from user where id=?", [id], callback);
    },

    addUser: function(User, callback){
        return db.query("Insert into user (name, address) values(?, ?)", [User.name, User.address], callback);
    },

    deleteUser: function(id, callback){
        return db.query("delete from user where id=?", [id], callback);
    },

    updateUser: function(id, User, callback){
        return db.query("update user set name=?, address=? where id=?", [User.name, User.address, id], callback);
    }
};

module.exports = User;