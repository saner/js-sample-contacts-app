App.TabItem = SC.View.extend({
	tagName: 'li',
	tabName: null,
	//classNameBindings: ['isActive:active'],

	selectedTabBinding: "App.appController.selectedTab",

	click: function() {
		App.appController.changeTab(this.get('tabName'));
	},
	
	isActive: function() {
		return this.get('tabName') === this.get('selectedTab');
	}.property('selectedTab').cacheable()

});

/*
App.BaseContent = SC.View.extend({
	tagName: "div",

	selectedTabBinding: "App.appController.selectedTab",

	isVisible: function() {
		return this.get('elementId') == this.get('selectedTab');
	}.property('selectedTab').cacheable()
});
*/
