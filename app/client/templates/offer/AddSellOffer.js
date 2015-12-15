/**
 * Created by Michael on 12/14/2015.
 */
/**
 * After successful addition of a new Stuff document, go to List page.
 * See: https://github.com/aldeed/meteor-autoform#callbackshooks
 */
AutoForm.hooks({
  AddSellOfferForm: {
    /**
     * After successful form submission, go to the ListOffer page.
     * @param formType The form.
     * @param result The result of form submission.
     */
    onSuccess: function(formType, result) {
      Router.go('ListOffer');
    }
  }
});