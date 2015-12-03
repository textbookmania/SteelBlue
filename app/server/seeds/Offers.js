/**
 * Created by Michael on 12/3/2015.
 */
/**
 * A list of Offers to pre-fill the Collection.
 * @type {*[]}
 */
var offerSeeds = [
  {name: "Textbook", ISBN: "23124124", OfferType: "Buy", Offer: 5},
  {name: "Other textbook", ISBN:"1823918", OfferType: "Sell", Offer: 1}
];

/**
 * Initialize the Offer collection if empty with seed data.
 */
if (Offer.find().count() === 0) {
  _.each(offerSeeds,  function(offer) {
    Offer.insert(offer);
  });
}
