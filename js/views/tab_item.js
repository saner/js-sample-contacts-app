App.TabItem = SC.View.extend({
  tagName: 'li',
  tabName: null,
  classNameBindings: ['isActive'],

  selectedTabBinding: "App.appController.selectedTab",

  click: function() {
    App.appController.changeTab(this.get('tabName'));
  },
  
  isActive: function() {
    return this.get('tabName') === this.get('selectedTab');
  }.property('selectedTab').cacheable()

});
