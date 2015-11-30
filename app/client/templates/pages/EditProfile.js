/**
 * Created by Michael on 11/29/2015.
 */
Template.EditProfile.helpers({
  setContact: function(name) {
    var input = document.getElementByClass("toggle-checked").checked;
    if(input === "checked") {
      Meteor.users.update({_id:Meteor.user()._id}, {$contact: "yes"});
    }
    else {
      Meteor.users.update({_id:Meteor.user()._id}, {$contact: "no"});
    }
  }
});

Meteor.users.update({_id:Meteor.user()._id_}, {$set: {contact: "yes"}});