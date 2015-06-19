# ember-cloudkit

## Installation

`ember install ember-cloudkit`

## Setup

_Note: CloudKit requires SSL to be used, thankfully you can use `ember serve --ssl`_

Read Apple's [CloudKit Quick Start guide](https://developer.apple.com/library/prerelease/ios/documentation/DataManagement/Conceptual/CloudKitQuickStart/Introduction/Introduction.html), [CloudKit.js documentation](https://developer.apple.com/library/prerelease/ios/documentation/CloudKitJS/Reference/CloudKitJavaScriptReference/) and [sample application](https://developer.apple.com/library/prerelease/ios/samplecode/CloudAtlas/Introduction/Intro.html#//apple_ref/doc/uid/TP40014599) for more information.

The [iCloud dashboard](https://icloud.developer.apple.com/dashboard/) is where you'll generate an API key and the schema for your application.

`ember-cloudkit` expects you to provide configuration inside of `config/environment.js` like this:

```
ENV.cloudkit = {
  containers: [{

    // Change this to a container identifier you own.
    containerIdentifier: 'iCloud.com.myapp.foo',

    // And generate an API token through CloudKit Dashboard.
    apiToken: 'your API token here',

    auth: {
      buttonSize: 'medium',
      persist: true // Sets a cookie.
    },

    environment: ENV.environment
  }]
};
```

## Usage

As a convienience, `ember-cloudkit` provides an ES6 module shim for the `CloudKit` global:

`import CloudKit from "ember-cloudkit"`
