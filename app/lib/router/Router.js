/**
 * Configure Iron Router.
 * See: http://iron-meteor.github.io/iron-router/
 */


Router.configure({
  layoutTemplate: 'Layout',
  waitOn: function() { return Meteor.subscribe("Offer"); },
  loadingTemplate: 'Loading'
});

Router.route('/', {
  name: 'Home'
});

Router.route('/list', {
  name: 'ListOffer'
});

Router.route('/add', {
  name: 'AddOffer'
});

Router.route('/matches', {
  name: 'MatchOffer'
});

Router.route('/profile', {
  name: 'ProfilePage'
});

Router.route('/profile/edit', {
  name: 'EditProfile'
});

Router.route('/userGuide', {
  name: 'UserGuide'
});

Router.route('/manage', {
  name: 'ManageTextbooks'
});

Router.route('/textbooks', {
  name: 'ListTextbooks'
});

Router.route('/offer/:_id', {
  name: 'EditOffer',
  data: function() { return Offer.findOne(this.params._id); }
});
