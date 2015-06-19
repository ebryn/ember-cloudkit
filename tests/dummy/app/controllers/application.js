import Ember from 'ember';
import * as cloudkit from 'ember-cloudkit';

export default Ember.Controller.extend({
  ckContainer: Ember.computed(function() {
    return cloudkit.getDefaultContainer();
  }),

  database: Ember.computed(function() {
    return cloudkit.publicDatabase();
  }),

  records: Ember.computed(function() {
    let response = Ember.ObjectProxy.create({ content: {} });

    cloudkit.publicDatabase().performQuery({recordType: "Items"}).then(req => {
      response.set('records', Ember.A(req.records));
    });

    return response;
  })
});
