App.userProfilesController = SC.ArrayProxy.create({
  content: [
    App.UserProfile.create({firstName: "fa", lastName: "la", email: "ea", phone: "pa"}), 
    App.UserProfile.create({firstName: "fb", lastName: "lb", email: "eb", phone: "pb"}) 
  ],

  createUserProfile: function(firstName, lastName, email, phone) {
    var userProfile = App.UserProfile.create({
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone
    });
    this.pushObject(userProfile);
  },

  deleteUserProfile: function(userProfile) {
    this.removeObject(userProfile);
  }
  
});

