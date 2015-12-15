/**
 * A list of Offer to pre-fill the Collection.
 * @type {*[]}
 */
var offerSeeds = [
  {name: "Introduction to Algorithms, 3rd Edition", price: 3, condition: "Fair", offerType: "Sell", owner: "dumlaoj", expiration: Date.now()},
  {name: "Introduction to Algorithms, 3rd Edition", price: 5, condition: "Excellent", offerType: "Buy", owner: "mahoe7", expiration: Date.now()},
  {name: "Programming Language Pragmatics, Third Edition", price: 12, condition: "Good", offerType: "Sell", owner: "mahoe7", expiration: Date.now()},
  {name: "Java Concepts: Compatible with Java 5, 6 and 7", price: 85, condition: "Poor", offerType: "Sell", owner: "Moore", expiration: Date.now()},
  {name: "C++ Primer Plus (6th Edition) (Developer's Library)", price: 31, condition: "Fair", offerType: "Buy", owner: "Kiyosaki", expiration: Date.now()}
];

/**
 * Initialize the Offer collection if empty with seed data.
 */
if (Offer.find().count() === 0) {
  _.each(offerSeeds,  function(offer) {
    Offer.insert(offer);
  });
}
