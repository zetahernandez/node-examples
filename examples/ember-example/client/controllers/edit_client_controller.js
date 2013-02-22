var store = require('../store');

var EditClientController = Ember.ObjectController.extend({

  save: function() {
    store.commit();
    this.redirectToModel();
  },

  redirectToModel: function() {
    var router = this.get('target');
    var model = this.get('model');
    router.transitionTo('client', model);
  }

});

module.exports = EditClientController;

