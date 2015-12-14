Textbooks = new Mongo.Collection('textbooks');

Textbooks.allow({
  update: function(userId, textbook) { return ownsDocument(userId, textbook); },
  remove: function(userId, textbook) { return ownsDocument(userId, textbook); },
});

Meteor.methods({
  textbookInsert: function(postAttributes) {
    check(Meteor.userId(), String);
    check(postAttributes, {
      title: String,
      isbn: String,
      course: String
    });


    var user = Meteor.user();
    var post = _.extend(postAttributes, {
      userId: user._id,
      author: user.profile.name,
    });
    var textbookID = Textbooks.insert(textbook);
    return {
      _id: textbookID
    };
  }
});
