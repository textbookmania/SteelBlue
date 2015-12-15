/**
 * Created by Michael on 12/14/2015.
 */
Template.MatchOffer.helpers({
  myOffers: function() {
    return Offer.find({owner: Meteor.user().profile.name});
  },

  matchBuyOffers: function() {
    return Offer.find({name: this.name, offerType: "Sell"});
  },

  displayBuyOffers: function() {
    if(this.owner != Meteor.user().profile.name) {
      return true;
    }
    else return false;
  },

  matchSellOffers: function() {
    return Offer.find({name: this.name, offerType: "Buy"});
  },

  displaySellOffers: function() {
    if(this.owner != Meteor.user().profile.name) {
      return true;
    }
    else return false;
  },

  showCover: function() {
    var bookName = this.name;
    var coverURL;
    switch(bookName) {
      case 'Java Concepts: Compatible with Java 5, 6 and 7':
        coverURL = "http://images.amazon.com/images/P0470509473.01.LZ.jpg";
        break;
      case 'Discrete Mathematics and Its Applications Seventh Edition':
        coverURL = "http://images.amazon.com/images/P0073383090.01.LZ.jpg";
        break;
      case 'Data Structures: Abstraction and Design Using Java':
        coverURL = "http://images.amazon.com/images/P0470128704.01.LZ.jpg";
        break;
      case "C++ Primer Plus (6th Edition) (Developer's Library)":
        coverURL = "http://images.amazon.com/images/P0321776402.01.LZ.jpg";
        break;
      case "The C Programming Language":
        coverURL = "http://images.amazon.com/images/P0131103628.01.LZ.jpg";
        break;
      case "Introduction to Algorithms, 3rd Edition":
        coverURL = "http://images.amazon.com/images/P0262033844.01.LZ.jpg";
        break;
      case "Programming Language Pragmatics, Third Edition":
        coverURL = "http://images.amazon.com/images/P0123745144.01.LZ.jpg";
        break;
      case "Land of Lisp: Learn to Program in Lisp, One Game at a Time!":
        coverURL = "http://images.amazon.com/images/P1593272812.01.LZ.jpg";
        break;
      case "Database Systems: The Complete Book (2nd Edition)":
        coverURL = "http://images.amazon.com/images/P0131873253.01.LZ.jpg";
        break;
      case "Digital Logic Design: A Rigorous Approach":
        coverURL = "http://images.amazon.com/images/P1107027535.01.LZ.jpg";
        break;
      case "Operating System Concepts":
        coverURL = "http://images.amazon.com/images/P1118063333.01.LZ.jpg";
        break;
      case "Ethics for the Information Age (5th Edition)":
        coverURL = "http://images.amazon.com/images/P0132855534.01.LZ.jpg";
        break;
      default: coverURL = "http://images.amazon.com/images/P0123747317.01.LZ.jpg";
    }
    return coverURL;
  }
});

Template.MatchOffer.event({
  'click .contact': function(e) {
    e.preventDefault();
    var offerId = this._id;
    var offerName = this.name;
    var trader = this.owner;
    var me = Meteor.user().profile.name;

    Meteor.call("acceptOffer", offerId, me);
    Meteor.call()
  }
});