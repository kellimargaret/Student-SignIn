var studentCheckin = angular.module('studentCheckin', ['ui.router']);

studentCheckin.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html",
    controller: "StudentsCtrl"
  });

  $stateProvider.state('student-view', {
    url: "/students-view",
    templateUrl: "partials/student-view.html",
    controller: "StudentsCtrl"
  });

  $stateProvider.state('instructor-view', {
    url: "/instructor-view",
    templateUrl: "partials/instructor-view.html",
    controller: "StudentsCtrl"
  });
});
