/**
 * A list of Stuff to pre-fill the Collection.
 * @type {*[]}
 */
var textbookSeeds = [
  {name: "Textbook", ISBN: "23124124", OfferType: "Buy", Offer: 5}

];

/**
 * Initialize the Stuff collection if empty with seed data.
 */
if (Textbook.find().count() === 0) {
  _.each(textbookSeeds,  function(textbook) {
    Textbook.insert(textbook);
  });
}
