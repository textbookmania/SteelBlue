/**
 * A list of Stuff to pre-fill the Collection.
 * @type {*[]}
 */
var stuffSeeds = [
  {name: "Textbook", ISBN: "23124124", OfferType: "Buy", Offer: 5},
  {name: "Other textbook", ISBN:"1823918", OfferType: "Sell", Offer: 1}
];

/**
 * Initialize the Stuff collection if empty with seed data.
 */
if (Stuff.find().count() === 0) {
  _.each(stuffSeeds,  function(stuff) {
    Stuff.insert(stuff);
  });
}
