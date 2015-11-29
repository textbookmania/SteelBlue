Template.TextbookTable.helpers({

  /**
   * @returns {*} All of the Stuff documents.
   */
  stuffList: function () {
    return Stuff.find();
  }
});