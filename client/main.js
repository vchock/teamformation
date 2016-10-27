import angular from 'angular';
import angularMeteor from 'angular-meteor';
import userAuth from '../imports/components/userAuth/userAuth';
import '../imports/startup/accounts-config.js';
import 'bootstrap/dist/css/bootstrap.css';
angular.module('simple-todos', [
  angularMeteor,
  userAuth.name,
    'accounts.ui'
]);

