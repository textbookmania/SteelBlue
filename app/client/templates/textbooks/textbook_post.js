Template.textbookPost.events({
  'click .btn': function () {
      Session.set('selectedItem', this._id);
  }
});