/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cloudkit',

  contentFor: function(type) {
    if (type === 'head') {
      return '<script src="https://cdn.apple-cloudkit.com/ck/1/cloudkit.js"></script>';
    }
    if (type === 'vendor-prefix') {
      var ENV = process.env.EMBER_ENV;
      var projectConfig = this.project.config(ENV);
      var addonConfig = projectConfig.cloudkit;
      return 'CloudKit.configure(' + JSON.stringify(addonConfig) + ');';
    }
  }
};
