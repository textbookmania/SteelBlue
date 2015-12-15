/**
 * A list of Offer to pre-fill the Collection.
 * @type {*[]}
 */
var buyOfferSeeds = [
  {name: "Introduction to Algorithms, 3rd Edition", price: 3, condition: "Fair", owner: "dumlaoj", expiration: Date.now()},
  {name: "Introduction to Algorithms, 3rd Edition", price: 5, condition: "Excellent", owner: "mahoe7", expiration: Date.now()},
  {name: "Programming Language Pragmatics, Third Edition", price: 12, condition: "Good", owner: "mahoe7", expiration: Date.now()},
  {name: "Java Concepts: Compatible with Java 5, 6 and 7", price: 85, condition: "Poor", owner: "Moore", expiration: Date.now()},
  {name: "C++ Primer Plus (6th Edition) (Developer's Library)", price: 31, condition: "Fair", owner: "Kiyosaki", expiration: Date.now()}
];

var sellOfferSeeds = [
  {name: "Introduction to Algorithms, 3rd Edition", price: 3, condition: "Fair", owner: "Johnson", expiration: Date.now()},
  {name: "Introduction to Algorithms, 3rd Edition", price: 5, condition: "Excellent", owner: "Carlton", expiration: Date.now()},
  {name: "Programming Language Pragmatics, Third Edition", price: 12, condition: "Good", owner: "Will", expiration: Date.now()},
  {name: "Java Concepts: Compatible with Java 5, 6 and 7", price: 85, condition: "Poor", owner: "Smith", expiration: Date.now()},
  {name: "C++ Primer Plus (6th Edition) (Developer's Library)", price: 31, condition: "Fair", owner: "Tamago", expiration: Date.now()}
];

/**
 * Initialize the BuyOffer collection if empty with seed data.
 */
if (BuyOffer.find().count() === 0 && SellOffer.find().count() === 0) {
  _.each(buyOfferSeeds, function(buyOffer) {
    BuyOffer.insert(buyOffer);
  });

  _.each(sellOfferSeeds, function(sellOffer) {
    SellOffer.insert(sellOffer);
  });
}