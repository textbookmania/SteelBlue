/**
 * Configure Iron Router.
 * See: http://iron-meteor.github.io/iron-router/
 */


Router.configure({
  layoutTemplate: 'Layout',
  waitOn: function() { return Meteor.subscribe("Stuff"); },
  loadingTemplate: 'Loading'
});

Router.route('/', {
  name: 'Home'
});

Router.route('/profile', {
  name: 'ProfilePage'
});

Router.route('/editProfile', {
  name: 'EditProfile'
});

Router.route('/list', {
  name: 'ListStuff'
});

Router.route('/list2', {
  name: 'ListStuff2'
});

Router.route('/add', {
  name: 'AddStuff'
});

Router.route('/table', {
  name: 'TextbookTable'
});


Router.route('/stuff/:_id', {
  name: 'EditStuff',
  data: function() { return Stuff.findOne(this.params._id); }
});
