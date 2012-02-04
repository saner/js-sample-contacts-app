function createTextArea(path) {
  return Ember.TextField.extend({
    init: function() {
      this._super();
      this.setPath(path, this);
    }
  });
}

App.RegistrationBox = Ember.View.extend({
  tagName: "div",
  elementId: "registration-box",
  classNames: ["message-box"],

  isVisibleBinding: 'App.appController.registrationBoxIsVisible',

  RegistrationForm: Ember.View.extend({
    tagName: "form",

    loginField: null,
    passowrdField: null,
    confirmPasswordField: null,
    
    LoginField: createTextArea('parentView.loginField'),
    PasswordField: createTextArea('parentView.passowrdField'),
    ConfirmPasswordField: createTextArea('parentView.confirmPasswordField'), 

    submit: function(event) {
      alert(this.getPath('loginField.value') + this.getPath('passowrdField.value') + this.getPath('confirmPasswordField.value'));  

      return false;
    }
  })


});
