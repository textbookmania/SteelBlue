Template.buyOffers.helpers({
  posts: function () {
    return Posts.find({offertype: "Buy"}, {sort: {submitted: -1}});
  }
});