/**
 * Created by Michael on 12/15/2015.
 * Code from Team LightSteelBlue.
 */

Meteor.publish('userData', function () {
  return Meteor.users.find({}, {fields: {
    "profile":1
  }});
});