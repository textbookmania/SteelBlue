offer = "Offer";  // avoid typos, this string occurs many times.

Offer = new Mongo.Collection(offer);

Meteor.methods({
  /**
   * Invoked by AutoForm to add a new Offer record.
   * @param doc The Offer document.
   */
  addOffer: function(doc) {
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
    optional: false,
    max: 100,
    autoform: {
      group: offer,
      placeholder: "Insert name here"
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
    max: 20,
    autoform: {
      group: offer,
      placeholder: "Insert condition here"
    }
  },
  offerType: {
    label: "Offer Type",
    type: String,
    optional: false,
    max: 20,
    autoform: {
      group: offer,
      placeholder: "Insert either buy or sell here"
    }
  },
  expiration: {
    label: "Expiration Date",
    type: String,
    optional: false,
    max: 20,
    autoform: {
      group: offer,
      placeholder: "Enter when you would like the offer to end here"
    }
  }
}));
