/**
 * Configure Iron Router.
 * See: http://iron-meteor.github.io/iron-router/
 */


Router.configure({
  layoutTemplate: 'Layout',
  waitOn: function() { return Meteor.subscribe("BuyOffer"); },
  loadingTemplate: 'Loading'
});

Router.route('/', {
  name: 'Home'
});

Router.route('/list', {
  name: 'ListOffer'
});

Router.route('/addBuy', {
  name: 'AddBuyOffer'
});

Router.route('/addSell', {
  name: 'AddSellOffer'
});

Router.route('/matches', {
  name: 'MatchOffer'
});

Router.route('/buyOffer/:_id', {
  name: 'EditOffer',
  data: function() { return BuyOffer.findOne(this.params._id); }
});
