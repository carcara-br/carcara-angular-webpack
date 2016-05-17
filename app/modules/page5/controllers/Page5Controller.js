let Page5Controller = function($scope, $rootScope, $location, APP_SETTINGS,CustomersService,$stateParams){
  let vm = this;
  vm.title = 'This is page 5';
  vm.family = [
      {name: 'Andy 5'},
      {name: 'Jamie 55'},
      {name: 'Lucy 5'},
      {name: 'Quinn 5'},
      {name: 'Denis 5'}
  ];
};

Page5Controller.$inject = ['$scope', '$rootScope', '$location', 'APP_SETTINGS','$stateParams'];

export default ngModule => {
  ngModule.controller('Page5Controller', Page5Controller);
}
