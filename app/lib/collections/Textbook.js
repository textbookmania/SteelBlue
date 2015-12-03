textbook = "Textbook";  // avoid typos, this string occurs many times.

Textbook = new Mongo.Collection(textbook);

Meteor.methods({
  /**
   * Invoked by AutoForm to add a new Stuff record.
   * @param doc The Stuff document.
   */
  addTextbook: function(doc) {
    check(doc, Textbook.simpleSchema());
    Textbook.insert(doc);
  },
  /**
   *
   * Invoked by AutoForm to update a Stuff record.
   * @param doc The Stuff document.
   * @param docID It's ID.
   */
  editTextbook: function(doc, docID) {
    check(doc, Textbook.simpleSchema());
    Textbook.update({_id: docID}, doc);
  }
});

// Publish the entire Collection.  Subscription performed in the router.
if (Meteor.isServer) {
  Meteor.publish(textbook, function () {
    return Textbook.find();
  });
}


/**
 * Create the schema for Stuff
 * See: https://github.com/aldeed/meteor-autoform#common-questions
 * See: https://github.com/aldeed/meteor-autoform#affieldinput
 */
Textbook.attachSchema(new SimpleSchema({
  name: {
    label: "Name",
    type: String,
    allowedValues:["A", "B", "C"],
    optional: false,
    max: 20,
    autoform: {
      group: textbook,
      firstOption: "Textbook Name"
    }
  },
  ISBN: {
    label: "ISBN",
    type: String,
    allowedValues: ["123", "456", "789"],
    optional: false,
    autoform: {
      group: textbook,
      firstOption: "ISBN"
    }
  },
  OfferType: {
    label: "OfferType",
    type: String,
    allowedValues: ["Buy", "Sell"],
    optional: false,
    autoform: {
      group: textbook,
      placeholder: "Buy or Sell"
    }
  },
  Offer: {
    label: "Offer",
    type: Number,
    optional: false,
    autoform: {
      group: textbook,
      placeholder: "0"
    }
  }
}));
