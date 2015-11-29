Template.ListStuff2.helpers({

  /**
   * @returns {*} All of the Stuff documents.
   */
  stuffList: function () {
    return Stuff.find();
  }
});