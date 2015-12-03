/**
 * Created by Michael on 12/3/2015.
 */
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
   * Invoked by AutoForm to update a Offer record.
   * @param doc The Offer document.
   * @param docID It's ID.
   */
  editOffer: function(doc, docID) {
    check(doc, Offer.simpleSchema());
    Offer.update({_id: docID}, doc);
  },
  /**
   * Created so that people can delete their offers.
   */
  deleteOffer: function(doc, docID) {
    check(doc, Offer.simpleSchema());
    Offer.remove({_id: docID}, doc);
  }
});

// Publish the entire Collection.  Subscription performed in the router.
if (Meteor.isServer) {
  Meteor.publish(offer, function () {
    return Offer.find();
  });
}