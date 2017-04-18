function MainRouter($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'states/basic-angular-clock.state.html'
  })
  .state('angularClock', {
    url: '/angularclock',
    templateUrl: 'states/angular-ui-clock.state.html'
  })
;
  $urlRouterProvider.otherwise('/');
}
MainRouter.$inject = ['$stateProvider', '$urlRouterProvider'];


angular
  .module('aClock', ['ui.router'])
  .config(MainRouter);

// , 'ds.clock'
