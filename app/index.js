const Angular = require('angular');

require('oclazyload');

require('./page3/page3Module')(Angular);
require('./modules/page5/module')(Angular);
//require('./page4Module')(Angular);

require('./styles/main.scss');
const ngModule = Angular.module('myApp', [
  // External Dependencies
  require('angular-ui-router')
  // App Modules Dependencies
  ,'oc.lazyLoad'
  ,'page3App'
  ,'page5App'
]);

require('./config')(ngModule, Angular);
