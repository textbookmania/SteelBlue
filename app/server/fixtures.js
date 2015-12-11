// Fixture data
if (Posts.find().count() === 0) {
  var now = new Date().getTime();

  // create two users
  var tomId = Meteor.users.insert({
    profile: { name: 'Tom Coleman' }
  });
  var tom = Meteor.users.findOne(tomId);
  var sachaId = Meteor.users.insert({
    profile: { name: 'Sacha Greif' }
  });
  var sacha = Meteor.users.findOne(sachaId);

  var telescopeId = Posts.insert({
    title: 'Introduction to Algorithms',
    userId: sacha._id,
    author: sacha.profile.name,
    isbn: '1234567',
    condition: 'New',
    offertype: 'Buy',
    price: '100.00',
    desc: 'I am looking to buy a new Algorithms book',
    submitted: new Date(now - 7 * 3600 * 1000),
    commentsCount: 2
  });

  Comments.insert({
    postId: telescopeId,
    userId: tom._id,
    author: tom.profile.name,
    submitted: new Date(now - 5 * 3600 * 1000),
    body: 'Interesting project Sacha, can I get involved?'
  });

  Comments.insert({
    postId: telescopeId,
    userId: sacha._id,
    author: sacha.profile.name,
    submitted: new Date(now - 3 * 3600 * 1000),
    body: 'You sure can Tom!'
  });

  Posts.insert({
    title: 'Introduction to Algorithms',
    userId: sacha._id,
    author: sacha.profile.name,
    isbn: '1234567',
    condition: 'New',
    offertype: 'Sell',
    price: '100.00',
    desc: 'I am looking to Sell a new Algorithms book',
    submitted: new Date(now - 7 * 3600 * 1000),
    commentsCount: 0
  });

  Posts.insert({
    title: 'Discover Meteor',
    userId: sacha._id,
    author: sacha.profile.name,
    isbn: '293748247',
    condition: 'New',
    offertype: 'Buy',
    price: '50.00',
    desc: 'I am looking to buy a new Algorithms book',
    submitted: new Date(now - 7 * 3600 * 1000),
    commentsCount: 0
  });
}