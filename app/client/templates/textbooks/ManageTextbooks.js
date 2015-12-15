/**
 * Created by Michael on 12/15/2015.
 */
AutoForm.hooks({
  ManageTextbooksForm: {
    /**
     * After successful form submission, go to the ManageTextBooks page.
     * @param formType The form.
     * @param result The result of form submission.
     */
    onSuccess: function(formType, result) {
      Router.go('ModerateTextBooks');
    }
  }
});