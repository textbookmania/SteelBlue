offer = "Offer";  // avoid typos, this string occurs many times.

Offer = new Mongo.Collection(offer);

Meteor.methods({
  /**
   * Invoked by AutoForm to add a new Offer record.
   * @param doc The Offer document.
   */
  addOffer: function(doc) {
    doc.owner = Meteor.user().profile.name;
    doc.accepted = false;
    check(doc, Offer.simpleSchema());
    Offer.insert(doc);
  },
  /**
   *
   * Invoked by AutoForm to update a Offer record.
   * @param doc The Offer document.
   * @param docID It's ID.
   */
  editOffer: function(doc, docID) {
    check(doc, Offer.simpleSchema());
    Offer.update({_id: docID}, doc);
  },

  deleteOffer: function(docID) {
    Offer.remove(docID);
  },

  acceptOffer: function(docID, other) {
    Offer.update({_id: docID}, {$set: {accepted: true}});
    Offer.update({_id: docID}, {$set: {tradeWith: other}});
  }
});

// Publish the entire Collection.  Subscription performed in the router.
if (Meteor.isServer) {
  Meteor.publish(offer, function () {
    return Offer.find();
  });
}


/**
 * Create the schema for Offer
 * See: https://github.com/aldeed/meteor-autoform#common-questions
 * See: https://github.com/aldeed/meteor-autoform#affieldinput
 */
Offer.attachSchema(new SimpleSchema({
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
      group: offer,
      firstOption: "(Select a book)"
    }
  },
  price: {
    label: "Price",
    type: Number,
    optional: false,
    autoform: {
      group: offer,
      placeholder: "Insert price here"
    }
  },
  condition: {
    label: "Condition",
    type: String,
    optional: false,
    allowedValues: ['Excellent', 'Good', 'Fair', 'Poor', 'Any'],
    autoform: {
      group: offer,
      firstOption: "(Select a condition)"
    }
  },
  offerType: {
    label: "Offer Type",
    type: String,
    optional: false,
    allowedValues: ['Buy', 'Sell'],
    autoform: {
      group: offer,
      firstOption: "(Buy or Sell?)"
    }
  },
  expiration: {
    label: "Expiration Date",
    type: Date,
    optional: true,
    autoform: {
      group: offer,
      afFieldInput: {
        type: "bootstrap-datetimepicker"
      }
    }
  },
  owner: {
    type: String,
    optional: true
  },
  accepted: {
    type: Boolean,
    optional: true
  },
  tradeWith: {
    type: String,
    optional: true
  }
}));
