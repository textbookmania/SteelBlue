/**
 * Created by Michael on 12/15/2015.
 */
Template.ListTextbooks.helpers({
  textbookList: function() {
    return Textbook.find({});
  }
});