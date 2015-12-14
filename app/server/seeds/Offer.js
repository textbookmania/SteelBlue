/**
 * A list of Offer to pre-fill the Collection.
 * @type {*[]}
 */
var offerSeeds = [
  {name: "Introduction to Algorithms", price: 3, condition: "fair", offerType: "Sell", expiration: "January 4th"},
  {name: "Introduction to Algorithms", price: 5, condition: "excellent", offerType: "Buy", expiration: "January 4th"},
  {name: "ICS101 Workbook", price: 12, condition: "good", offerType: "Sell", expiration: "January 4th"},
  {name: "Introduction to ICS111", price: 85, condition: "bad", offerType: "Sell", expiration: "January 4th"},
  {name: "Introduction to ICS212", price: 31, condition: "fair", offerType: "Buy", expiration: "January 4th"}
];

/**
 * Initialize the Offer collection if empty with seed data.
 */
if (Offer.find().count() === 0) {
  _.each(offerSeeds,  function(offer) {
    Offer.insert(offer);
  });
}
