App.BaseContent = SC.View.extend({
  tagName: "div",

  selectedTabBinding: "App.appController.selectedTab",

  isVisible: function() {
    return this.get('elementId') == this.get('selectedTab');
  }.property('selectedTab').cacheable()
});
