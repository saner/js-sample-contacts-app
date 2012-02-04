function createTextArea(path) {
  return Ember.TextField.extend({
    init: function() {
      this._super();
      this.setPath(path, this);
    }
  });
}

App.UserProfileForm = Ember.View.extend({
  tagName: 'form',

  firstNameArea: null,
  lastNameArea: null,
  emailNameArea: null,
  phoneNameArea: null,

  FirstNameArea: createTextArea('parentView.firstNameArea'),
  LastNameArea: createTextArea('parentView.lastNameArea'),
  EmailNameArea: createTextArea('parentView.emailNameArea'),
  PhoneNameArea: createTextArea('parentView.phoneNameArea'),

  submit: function(event) {
    App.userProfilesController.createUserProfile(
      this.getPath("firstNameArea.value"),
      this.getPath("lastNameArea.value"),
      this.getPath("emailNameArea.value"),
      this.getPath("phoneNameArea.value")
    );
    this.setPath("firstNameArea.value", "");
    this.setPath("lastNameArea.value", "");
    this.setPath("emailNameArea.value", "");
    this.setPath("phoneNameArea.value", "");

    return false;
  }
});
