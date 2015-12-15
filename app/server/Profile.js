/**
 * Created by Michael on 12/15/2015.
 * Code from Team LightSteelBlue.
 */

Meteor.methods({
  changeEmail: function(email) {
    if(Accounts.findUserByEmail(email) === Meteor.user() || !Accounts.findUserByEmail(email)) {
      _.each(Meteor.user().emails, function(targetaddress) {
        Accounts.removeEmail(Meteor.userId(), targetaddress.address)
      })
    }
    Accounts.addEmail(Meteor.userId(), email);
  },
  banUser: function(username) {
    if(Roles.userIsInRole(Meteor.user(), "role-manager") || Roles.userIsInRole(Meteor.user(), "admin")) {
      var target = Meteor.users.findOne({username:username});
      Roles.addUsersToRoles(target, 'banned');
      Roles.removeUsersFromRoles(target, 'admin');
      Roles.removeUsersFromRoles(target, 'role-manager');
    }
  },
  unbanUser: function(username) {
    if(Roles.userIsInRole(Meteor.user(), "role-manager") || Roles.userIsInRole(Meteor.user(), "admin")) {
      var target = Meteor.users.findOne({username:username});
      Roles.removeUsersFromRoles(target, 'banned');
    }
  }
});

Meteor.publish('userData', function () {
  return Meteor.users.find({}, {fields: {
    "profile":1
  }});
});