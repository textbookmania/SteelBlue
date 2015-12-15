/**
 * Created by Michael on 12/14/2015.
 * Meteor methods code in large thanks to Team MistyRose
 */
textbook = "Textbook";

Textbook = new Mongo.Collection(textbook);

if(Meteor.isClient) {
  Meteor.startup(function() {
    sAlert.config({
      effect: 'jelly',
      position: 'bottom',
      timeout: 5000,
      html: false,
      onRouteClose: true,
      stack: true,
      offset: 0,
      beep: false
    });
  });
};

Meteor.methods({

  addTextbook: function(doc) {
    if (_.findWhere(Textbook.find().fetch(), {title: doc.title})  && _.findWhere(Textbook.find().fetch(), {ISBN13: doc.ISBN13}) ) {
      if (Meteor.isClient) {
        sAlert.error("Title and ISBN already exists in the catalog! Please enter a different title and ISBN", configOverwrite);
      }
      return;
    } else if (_.findWhere(Textbook.find().fetch(), {title: doc.title}) ) {
      if (Meteor.isClient) {
        sAlert.error("Title already exists in the catalog! Please enter a different title.", configOverwrite);
      }
      return;
    }
    else if (_.findWhere(Textbook.find().fetch(), {ISBN13: doc.ISBN13})) {
      if (Meteor.isClient) {
        sAlert.error("ISBN already exists in the catalog! Please enter a different ISBN.", configOverwrite);
      }
      return;
    }

    check(doc, Textbook.simpleSchema());
    Textbook.insert(doc);
  },
  /**
   *
   * Invoked by AutoForm to update a Textbooks record.
   * @param doc The Textbooks document.
   * @param docID It's ID.
   */
  editTextbook: function(doc, docID) {
    check(doc, Textbook.simpleSchema());

    Textbook.update({_id: docID}, doc);
  },
  deleteTextbook: function(docID) {
    Textbook.remove(docID);
  }
});

if(Meteor.isServer) {
  Meteor.publish(textbook, function() {
    return Textbook.find();
  });
}

Textbook.attachSchema(new SimpleSchema({
  title: {
    label: "Title",
    type: String,
    optional: false,
    unique: true,
    autoform: {
      group: textbook,
      placeholder: "Name of textbook"
    }
  },
  ISBN10: {
    label: "ISBN 10",
    type: String,
    optional: false,
    unique: true,
    max: 50,
    autoform: {
      group: textbook,
      placeholder: "ISBN 10"
    }
  },

  ISBN13: {
    label: "ISBN 13",
    type: String,
    optional: false,
    unique: true,
    max: 50,
    autoform: {
      group: textbook,
      placeholder: "ISBN 13"
    }
  },
  author: {
    label: "Author",
    type: String,
    optional: false,
    max: 50,
    autoform: {
      group: textbook,
      placeholder: "Name of author (first and last)"
    }
  },


  cover: {
    label: "Cover",
    type: String,
    optional: true,
    autoform: {
      group: textbook,
      placeholder: "Cover image"
    }
  }
}));