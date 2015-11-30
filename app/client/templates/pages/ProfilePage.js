/**
 * Created by Michael on 11/28/2015.
 */
Template.ProfilePage.helpers({
  fullName: function(name) {
    switch(name) {
      case 'dumlaoj': return "Jordan Dumlao";
      case 'mahoe7': return "Michael Hoe";
      case 'johnson': return "Philip Johnson";
      default: "Student";
    };
  },
  contactMe: function(name) {
    if (name.contact != "checked") {
      document.getElementById("contact").innerHTML = "This user does not wish to be contacted";
    }
    else {
      document.getElementById("contact").innerHTML = "Email: " + name.name + "@hawaii.edu";
    };
  }
});