Template.ListTextbook.helpers({

  /**
   * @returns {*} All of the Stuff documents.
   */
  textbookList: function () {
    return Textbook.find();
  }
});