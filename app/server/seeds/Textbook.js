/**
 * A list of Textbook to pre-fill the Collection.
 * @type {*[]}
 */
var textbookSeeds = [
  {name: "Textbook", ISBN: "23124124", OfferType: "Buy", Offer: 5},
  {name: "Interactive Design", ISBN: "15391829873", OfferType: "Sell", Offer: 8}
];

/**
 * Initialize the Textbook collection if empty with seed data.
 */
if (Textbook.find().count() === 0) {
  _.each(textbookSeeds,  function(stuff) {
    Textbook.insert(textbook);
  });
}
