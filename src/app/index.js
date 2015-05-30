
'use strict';

angular.module('shopsMela', ['ngAnimate',
 'ngCookies',
 'ngTouch',
 'ngSanitize',
 'ngResource',
 'ui.router',
 'firebase',
 'ui.bootstrap'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'app/components/about/about.html',
        controller: 'aboutCtrl',
        controllerAs: 'about'
      });

    $urlRouterProvider.otherwise('/');
  })
;
