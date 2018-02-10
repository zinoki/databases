var db = require('../db');

module.exports = {
  messages: {
    get: function (req) {
      console.log(req.body);
    },
    post: function () {

    }
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

