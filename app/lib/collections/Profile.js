/**
 * Created by Michael on 12/15/2015.
 */
Profile = new Mongo.Collection('Profile');

Profile.attachSchema(new SimpleSchema({
  username:{
    type: String,
    optional: true
  },
  firstName: {
    type: String,
    optional: true
  },
  lastName: {
    type: String,
    optional: true
  },
  contact: {
    type: Boolean,
    optional: true,
    label: "Do you wish to be contacted through email?"
  },
  SMS: {
    type: String,
    optional: true,
    label: "Please enter your phone number in '+1xxx###yyyy' format to receive text notifications!"
  }
}));

if(Meteor.isServer) {
  Meteor.publish('Profile', function() {
    return Profile.find();
  });
}

Meteor.methods({
  addProfileInfo: function(doc) {
    doc.username = Meteor.user().profile.name;
    Profile.insert(doc);
  },

  updateProfile: function(doc) {
    var user = Meteor.user().profile.name;
    check(doc, Profile.simpleSchema());
    Profile.update({username: user}, {$set: {firstName: doc.firstName}}, {validate: false});
    Profile.update({username: user}, {$set: {lastName: doc.lastName}}, {validate: false});
    Profile.update({username: user}, {$set: {contact: doc.contact}}, {validate: false});
    Profile.update({username: user}, {$set: {SMS: doc.SMS}}, {validate: false});
  }
});