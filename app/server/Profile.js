/**
 * Created by Michael on 12/15/2015.
 * Base code by Team LightSteelBlue.
 */
Meteor.methods({
  changeEmail: function(email) {
    if (Accounts.findUserByEmail(email) === Meteor.user() || !Accounts.findUserByEmail(email)) {
      _.each(Meteor.user().emails, function(targetaddress){
        Accounts.removeEmail(Meteor.userId(), targetaddress.address)
      })
    }
    Accounts.addEmail(Meteor.userId(), email);
  },
  banUser: function(username) {
    if(Roles.userIsInRole(Meteor.user(), "admin")) {
      var target = Meteor.users.findOne({username:username});
      Roles.addUsersToRoles(target, 'banned');
      Roles.removeUsersFromRoles(target, 'admin');
    }
  },
  unbanUser: function(username) {
    if(Roles.userIsInRole(Meteor.user(), "admin")) {
      var target = Meteor.users.findOne({username:username});
      Roles.removeUsersFromRoles(target, 'banned');
    }
  }
});

/**
 * Code modified from user saimeunt's code on stackoverflow from http://stackoverflow.com/a/26086406/5616465
 */
Meteor.publish("userProfile", function(username){
  // try to find the user by username
  var user = Meteor.users.findOne({
    username:username
  });
  // if we can't find it, quit
  if(!user){
    return;
  }
  // if the user we want to display the profile is the currently logged in user...
  if(this.userId==user._id){
    // then we return the corresponding full document via a cursor
    return Meteor.users.find(this.userId);
  }
  else{
    // if we are viewing only the public part, strip the "profile"
    // property from the fetched document, you might want to
    // set only a nested property of the profile as private
    // instead of the whole property
    if (user.profile.shareEmail === true) {
      return Meteor.users.find(user._id,{
        fields:{
          "username":1,
          "emails":1,
          "profile":1,
          "roles":1
        }
      });
    }
    else {
      return Meteor.users.find(user._id,{
        fields:{
          "username":1,
          "profile":1,
          "roles":1
        }
      });
    }
  }
});

Meteor.publish("userList", function(){
  return Meteor.users.find({ }, {
    fields: {
      "username": 1,
      "profile.firstName": 1,
      "profile.lastName": 1,
      "profile.profileImage": 1,
      "roles": 1
    }
  });
});