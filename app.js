var studentCheckin = angular.module('studentCheckin', ['ui.router']);

studentCheckin.config(function($stateProvider, $urlRouteProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html",
    controller: "StudentsCtrl"
  });
});
