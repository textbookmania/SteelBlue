/**
 * Created by Michael on 11/28/2015.
 */
Template.ProfilePage.helpers({
  isAllowed1: function(name) {
    var allowedUser = "mahoe7";

    return name === allowedUser;
  },

  isAllowed2: function(name) {
    var allowedUser = "dumlaoj";

    return name === allowedUser;
  },

  fullName: function(name) {
    switch(name) {
      case 'dumlaoj': return "Jordan";
      case 'mahoe7': return "Michael Hoe";
      case 'johnson': return "Philip Johnson";
      default: "Admin";
    };
  }
});