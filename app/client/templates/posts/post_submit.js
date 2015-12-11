Template.postSubmit.events({
  'submit form': function(e) {
    e.preventDefault();

    var post = {
      title: $(e.target).find('[name=title]').val(),
      isbn: $(e.target).find('[name=isbn]').val(),
      condition: $(e.target).find('[name=condition]').val(),
      offertype: $(e.target).find('[name=offertype]').val(),
      price: $(e.target).find('[name=price]').val(),
      desc: $(e.target).find('[name=desc]').val()
    };

    Meteor.call('postInsert', post, function(error, result) {
      // display the error to the user and abort
      if (error)
        return alert(error.reason);

      // show this result but route anyway
      if (result.postExists)
        alert('This link has already been posted');

      Router.go('postPage', {_id: result._id});
    });
  }
});