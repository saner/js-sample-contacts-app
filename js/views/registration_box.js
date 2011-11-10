App.RegistrationBox = SC.View.extend({
  tagName: "div",
  elementId: "registration-box",
  classNames: ["message-box"],

  isVisibleBinding: 'App.appController.registrationBoxIsVisible',

  RegistrationForm: SC.View.extend({
    tagName: "form",

    loginField: null,
    passowrdField: null,
    confirmPasswordField: null,
    
    LoginField: SC.TextField.extend({
      init: function() {
        this._super();
        this.setPath('parentView.loginField', this);
      }
    }),
    PasswordField: SC.TextField.extend({
      init: function() {
        this._super();
        this.setPath('parentView.passowrdField', this);
      }
    }),
    ConfirmPasswordField: SC.TextField.extend({
      init: function() {
        this._super();
        this.setPath('parentView.confirmPasswordField', this);
      }
    }),
  
    submit: function(event) {
      alert(this.getPath('loginField.value'));  

      return false;
    }
  })


});
