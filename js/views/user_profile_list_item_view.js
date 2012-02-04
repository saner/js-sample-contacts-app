App.UserProfileListItemView = SC.View.extend({
  tagName: 'li',
  templateName: 'user-profile-list-item-view',
  classNameBindings: ['isSelected'],

  click: function() {
    App.selectedUserProfileController.set('content', this.get('content'));
  },

  userName: function() {
    return this.getPath('content.firstName') + " " + this.getPath('content.lastName');
  }.property('content.firstName', 'content.lastName').cacheable(),

  selectedProfileBinding: 'App.selectedUserProfileController.content',

  isSelected: function() {
    return this.get('selectedProfile') == this.get('content');
  }.property('selectedProfile')

});
