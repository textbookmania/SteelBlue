/**
 * Created by Michael on 12/15/2015.
 */
Template.ProfilePage.helpers({
  ownProfile: function() {
    return this._id === Meteor.userId();
  },
  userIsBanned: function() {
    return Roles.userIsInRole(this._id, 'banned');
  },
  hasProfileImage: function() {
    if (this.profile.hasOwnProperty("profileImage")) {
      return true;
    }
    else {
      return false;
    }
  },
  users: function () {
    return Meteor.users;
  },
  userSchema: function () {
    return Schema.User;
  }
});

AutoForm.hooks({
  EditProfileForm: {
    /**
     * After successful form submission, go to the ListStuff page.
     * @param formType The form.
     * @param result The result of form submission.
     */
    onSuccess: function(formType, result) {
      Router.go('ProfilePage', data=Meteor.user());
    }
  }
});