var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
     models.messages.get(function(err, results) {
       if (err) {
         throw err;
       }
       res.json(results);
     })
    },
    post: function (req, res) {
      var params = [req.body[text], req.body[roomname]];
      models.messages.post(function(err, results) {
       if (err) {
         throw err;
       }
       res.json(results);
      })
    }
  },

  users: {
    get: function (req, res) {
      models.users.get(function(err, results) {
        if (err) {
         throw err;
       }
       res.json(results);
     })
    },                                                     
    post: function (req, res) {
      var params = [req.body[username]];
      models.users.post(function(err, results) {
       if (err) {
         throw err;
       }
       res.json(results);
      })
    }
  }
};

                