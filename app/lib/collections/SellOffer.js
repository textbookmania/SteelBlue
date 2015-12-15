/**
 * Created by Michael on 12/14/2015.
 */
sellOffer = "SellOffer";  // avoid typos, this string occurs many times.

SellOffer = new Mongo.Collection(sellOffer);

Meteor.methods({
  /**
   * Invoked by AutoForm to add a new SellOffer record.
   * @param doc The SellOffer document.
   */
  addOffer: function(doc) {
    doc.owner = Meteor.user().profile.name;
    doc.offerType = "Sell";
    check(doc, SellOffer.simpleSchema());
    SellOffer.insert(doc);
  },
  /**
   *
   * Invoked by AutoForm to update a SellOffer record.
   * @param doc The SellOffer document.
   * @param docID It's ID.
   */
  editOffer: function(doc, docID) {
    check(doc, SellOffer.simpleSchema());
    SellOffer.update({_id: docID}, doc);
  }
});

// Publish the entire Collection.  Subscription performed in the router.
if (Meteor.isServer) {
  Meteor.publish(sellOffer, function () {
    return SellOffer.find();
  });
}


/**
 * Create the schema for SellOffer
 * See: https://github.com/aldeed/meteor-autoform#common-questions
 * See: https://github.com/aldeed/meteor-autoform#affieldinput
 */
SellOffer.attachSchema(new SimpleSchema({
  name: {
    label: "Name",
    type: String,
    allowedValues: [
      "Java Concepts: Compatible with Java 5, 6 and 7",
      "Discrete Mathematics and Its Applications Seventh Edition",
      "Data Structures: Abstraction and Design Using Java",
      "C++ Primer Plus (6th Edition) (Developer's Library)",
      "The C Programming Language",
      "Introduction to Algorithms, 3rd Edition",
      "Programming Language Pragmatics, Third Edition",
      "Land of Lisp: Learn to Program in Lisp, One Game at a Time!",
      "Database Systems: The Complete Book (2nd Edition)",
      "Digital Logic Design: A Rigorous Approach",
      "Operating System Concepts",
      "Ethics for the Information Age (5th Edition)",
      "Artificial Intelligence for Games. CRC Press. 2009."
    ],
    optional: false,
    autoform: {
      group: sellOffer,
      firstOption: "(Select a book)"
    }
  },
  price: {
    label: "Price",
    type: Number,
    optional: false,
    autoform: {
      group: sellOffer,
      placeholder: "Insert price here"
    }
  },
  condition: {
    label: "Condition",
    type: String,
    optional: false,
    allowedValues: ['Excellent', 'Good', 'Fair', 'Poor', 'Any'],
    autoform: {
      group: sellOffer,
      firstOption: "(Select a condition)"
    }
  },
  offerType: {
    type: String,
    optional: true
  },
  expiration: {
    label: "Expiration Date",
    type: Date,
    optional: true,
    autoform: {
      group: sellOffer,
      afFieldInput: {
        type: "bootstrap-datetimepicker"
      }
    }
  },
  owner: {
    type: String,
    optional: true
  }
}));