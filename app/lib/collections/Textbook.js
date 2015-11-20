textbook = "Textbook";  // avoid typos, this string occurs many times.

Textbook = new Mongo.Collection(textbook);

Meteor.methods({
  /**
   * Invoked by AutoForm to add a new Textbook record.
   * @param doc The Textbook document.
   */
  addTextbook: function(doc) {
    check(doc, Textbook.simpleSchema());
    Textbook.insert(doc);
  },
  /**
   *
   * Invoked by AutoForm to update a Textbook record.
   * @param doc The Textbook document.
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
 * Create the schema for Textbook
 * See: https://github.com/aldeed/meteor-autoform#common-questions
 * See: https://github.com/aldeed/meteor-autoform#affieldinput
 */
Textbook.attachSchema(new SimpleSchema({
  name: {
    label: "Name",
    type: String,
    optional: false,
    max: 20,
    autoform: {
      group: textbook,
      placeholder: "Textbook Name"
    }
  },
  ISBN: {
    label: "ISBN",
    type: String,
    optional: false,
    autoform: {
      group: textbook,
      placeholder: "ISBN"
    }
  },
  OfferType: {
    label: "OfferType",
    type: String,
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
