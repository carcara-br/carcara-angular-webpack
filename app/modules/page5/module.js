export default Angular => {
    const ngPage5Module = Angular.module('page5App', [require('angular-ui-router')]);

    require('./styles/page5.scss');
    require('./controllers/Page5Controller')(ngPage5Module);

    ngPage5Module.config(['$stateProvider', '$locationProvider', '$urlRouterProvider', function ($stateProvider, $locationProvider, $urlRouterProvider) {
        //$locationProvider.html5Mode(true);
        // $locationProvider.hashPrefix('!');

        // $urlRouterProvider.otherwise('/page5');

        const modulePath = 'app/modules/page5/views/';

        // $stateProvider.state('page5', {
        //     url: '/page5',
        //     template: require(modulePath+'index.html'),
        //     controller: 'Page5Controller',
        //     controllerAs: 'vm'
        // });
    }]);

}
