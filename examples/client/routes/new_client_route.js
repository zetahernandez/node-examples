var client = require('../models/client');

var NewClientRoute = Ember.Route.extend({

  renderTemplate: function() {
    this.render('edit_client', {controller: 'new_client'});
  },

  model: function() {
    return client.createRecord();
  },

  exit: function() {
    var model = this.get('controller.model');
    if (!model.get('isSaving')) {
      model.deleteRecord();
    }
  }

});

module.exports = NewClientRoute;

