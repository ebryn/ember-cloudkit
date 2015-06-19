import Ember from 'ember';
import CloudKit from 'ember-cloudkit';

export default Ember.Controller.extend({
  ckContainer: Ember.computed(function() {
    return CloudKit.getDefaultContainer();
  }),

  database: Ember.computed(function() {
    return this.get('ckContainer').publicCloudDatabase;
  }),

  records: Ember.computed(function() {
    let response = Ember.ObjectProxy.create({ content: {} });

    this.get('database').performQuery({recordType: "Items"}).then(req => {
      response.set('records', Ember.A(req.records));
    });

    return response;
  })
});
