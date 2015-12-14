/**
 * Created by Michael on 12/14/2015.
 */
Template.MatchOffer.helpers({
  myOffers: function() {
    return Offer.find({owner: currentUser.profile.name});
  },
  matchOffers: function() {
    return Offer.find({name: this.name});
  }
});