Template.textbookList.helpers({
  textbooks: function () {
    return Textbooks.find({}, {sort: { course: 1   }});
  }
});