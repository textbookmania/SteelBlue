Template.postEdit.events({
  'submit form': function(e) {
    e.preventDefault();

    var currentPostId = this._id;

    var postProperties = {
      title: $(e.target).find('[name=title]').val(),
      isbn: $(e.target).find('[name=isbn]').val(),
      condition: $(e.target).find('[name=condition]').val(),
      offertype: $(e.target).find('[name=offertype]').val(),
      price: $(e.target).find('[name=price]').val(),
      desc: $(e.target).find('[name=desc]').val()
    }

    Posts.update(currentPostId, {$set: postProperties}, function(error) {
      if (error) {
        // display the error to the user
        alert(error.reason);
      } else {
        Router.go('postPage', {_id: currentPostId});
      }
    });
  },

  'click .delete': function(e) {
    e.preventDefault();

    if (confirm("Delete this post?")) {
      var currentPostId = this._id;
      Posts.remove(currentPostId);
      Router.go('postsList');
    }
  }
});