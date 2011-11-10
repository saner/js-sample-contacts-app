App.LoginBox = SC.View.extend({
  tagName: "div",
  elementId: "login-box",
  classNames: ["message-box"],

  isVisibleBinding: 'App.appController.loginBoxIsVisible',

  LoginForm: SC.View.extend({
    tagName: "form",

    loginField: null,
    passowrdField: null,
    
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
  
    submit: function(event) {
      alert(this.getPath('loginField.value'));  

      return false;
    }
  })


});
