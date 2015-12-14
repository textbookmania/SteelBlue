Template.sellOffers.helpers({
  posts: function () {
    return Posts.find({offertype: "Sell"}, {sort: {submitted: -1}});
  }
});