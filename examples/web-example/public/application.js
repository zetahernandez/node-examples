define(["ember", "ember_data"], function (Ember,DS) {
	var App = Ember.Application.create();

	App.Person = DS.Model.extend({

		name: DS.attr('string'),

		age: DS.attr('number')

	});
	App.ClientController = Ember.ObjectController.extend({

		destroy: function () {
			if(!confirm('Are you sure?')) return;
			this.get('model').deleteRecord();
			store.commit();
			this.get('target').transitionTo('clients');
		}

	});
	return App;
});