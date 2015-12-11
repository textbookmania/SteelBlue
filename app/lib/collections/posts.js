Posts = new Mongo.Collection('posts');

Posts.allow({
  update: function(userId, post) { return ownsDocument(userId, post); },
  remove: function(userId, post) { return ownsDocument(userId, post); },
});

/*
Posts.deny({
  update: function(userId, post, fieldNames) {
    // may only edit the following two fields:
    return (_.without(fieldNames, 'desc').length > 0);
  }
});

*/

Meteor.methods({
  postInsert: function(postAttributes) {
    check(Meteor.userId(), String);
    check(postAttributes, {
      title: String,
      isbn: String,
      condition: String,
      offertype: String,
      price: String,
      desc: String
    });


    var user = Meteor.user();
    var post = _.extend(postAttributes, {
      userId: user._id,
      author: user.profile.name,
      submitted: new Date(),
      commentsCount: 0
    });
    var postId = Posts.insert(post);
    return {
      _id: postId
    };
  }
});
