var studentCheckin = angular.module('studentCheckin', ['ui.router']);

studentCheckin.config(function($stateProvider, $urlRouteProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html",
    controller: "StudentsCtrl"
  });

  $stateProvider.state('student-view', {
    url: "/student-view",
    templateUrl: "partials/student-view.html",
    controller: "StudentCtrl"
  });

  $stateProvider.state('instructor-view', {
    url: "/instructor-view.html",
    controller: "StudentCtrl"
  });
});
