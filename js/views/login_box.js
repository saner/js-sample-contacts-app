function createTextArea(path) {
  return Ember.TextField.extend({
    init: function() {
      this._super();
      this.setPath(path, this);
    }
  });
}

App.LoginBox = Ember.View.extend({
  tagName: "div",
  elementId: "login-box",
  classNames: ["message-box"],

  isVisibleBinding: 'App.appController.loginBoxIsVisible',

  LoginForm: Ember.View.extend({
    tagName: "form",

    loginField: null,
    passowrdField: null,
    
    LoginField: createTextArea('parentView.loginField'),
    PasswordField: createTextArea('parentView.passowrdField'),
  
    submit: function(event) {
      alert(this.getPath('loginField.value') + this.getPath('passowrdField.value'));  

      return false;
    }
  })


});
