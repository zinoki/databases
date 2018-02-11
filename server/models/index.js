var db = require('../db');

var queryMaker = function(queryString, callback, params) {
  db.dbConnection.query(queryString, callback, params);
}

module.exports = {
  messages: {
    get: function (callback) {
      var queryString = 'select messages.id, messages.text, messages.roomname from messages';
      queryMaker(queryString, function(err, results) {
        if (err) {
          throw err;
        }
        callback(results);
      })
    },
    post: function (callback, params) {
      var queryString = 'insert into messages (text, roomname) values(?, ?)';
      queryMaker(queryString, function(err, results) {
        if (err) {
          throw err;
        }
        callback(results);
      }, params)
    }
  },

  users: {
    get: function (callback) {
      var queryString = 'select * from users';
      queryMaker(queryString, function(err, results) {
        if (err) {
          throw err;
        }
        callback(results);
      })
    },
    post: function (callback, params) {
      var queryString = 'insert into users (username) values(?)';
      queryMaker(queryString, function(err, results) {
        if (err) { 
          throw err;
        }
        callback(results);
      }, params)
    }
  }
};

// module.exports.messages.post({message: 'upstream', username: 'fancy'});
// module.exports.messages.get();
