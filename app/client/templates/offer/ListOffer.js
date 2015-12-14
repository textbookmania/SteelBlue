Template.ListOffer.helpers({

  /**
   * @returns {*} All of the Offer documents.
   */
  offerList: function () {
    return Offer.find();
  },

  buyOffers: function() {
    return Offer.find({owner: Meteor.userId(), offerType: "Buy"});
  },

  sellOffers: function() {
    return Offer.find({owner: Meteor.userId(), offerType: "Sell"});
  }
});