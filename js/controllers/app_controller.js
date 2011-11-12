App.appController = SC.Object.create({
  selectedTab: "ContactsContent",

  isLoggedIn: false,
  loginBoxIsVisible: false,
  registrationBoxIsVisible: false,

  changeTab: function(tabName) {
    this.set('selectedTab', tabName);
  },

  showLoginBox: function() {
    this.set('loginBoxIsVisible', true);
  },
  hideLoginBox: function() {
    this.set('loginBoxIsVisible', false);
  },
  showRegistrationBox: function() {
    this.set('registrationBoxIsVisible', true);
  },
  hideRegistrationBox: function() {
    this.set('registrationBoxIsVisible', false);
  }

});
