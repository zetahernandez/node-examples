var Client = require('../models/client');

var ClientRoute = Ember.Route.extend({

  model: function() {
    return Client.find();
  }

});

module.exports = ClientRoute;

