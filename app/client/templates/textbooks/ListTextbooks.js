/**
 * Created by Michael on 12/15/2015.
 */
Template.ListTextbooks.helpers({
  textbook: function() {
    return Textbook.find();
  }
});