App.UserProfileDetailsView = SC.View.extend({
  selectedUserProfileBinding: "App.selectedUserProfileController.content",

  userName: function() {
    return this.getPath('selectedUserProfile.firstName') + " " + this.getPath('selectedUserProfile.lastName');
  }.property('selectedUserProfile.firstName', 'selectedUserProfile.lastName').cacheable()

});
