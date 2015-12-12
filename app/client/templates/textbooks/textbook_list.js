Template.textbookList.helpers({
  textbooks: function () {
    return Textbooks.find();
  }
});