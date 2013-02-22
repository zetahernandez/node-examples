var store = require('../store');

var ClientController = Ember.ObjectController.extend({

  destroy: function() {
    if (!confirm('Are you sure?')) return;
    this.get('model').deleteRecord();
    store.commit();
    this.get('target').transitionTo('clients');
  }

});

module.exports = ClientController;

