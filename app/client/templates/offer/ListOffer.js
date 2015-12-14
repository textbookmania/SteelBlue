Template.ListOffer.helpers({

  /**
   * @returns {*} All of the Offer documents.
   */
  offerList: function () {
    return Offer.find();
  },

  buyOffers: function() {
    return Offer.find({offerType: "Buy"});
  },

  sellOffers: function() {
    return Offer.find({offerType: "Sell"});
  }
});