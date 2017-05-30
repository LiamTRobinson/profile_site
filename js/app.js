//ANGULAR SETUP
const angular = require("angular");
require("angular-ui-router");
angular
	.module("profileSite", ["ui.router"])
	.config(uiRouterSetup);

//INJECTIONS
uiRouterSetup.$inject = ["$stateProvider", "$urlRouterProvider"];

//STATES
function uiRouterSetup($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state("home", {
			url: "/",
			template: "<home></home>"
		});
	$urlRouterPrivder.otherwise("/");
};