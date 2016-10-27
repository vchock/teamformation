import angular from 'angular';
import angularMeteor from 'angular-meteor';
import userAuth from '../imports/components/userAuth/userAuth';
import 'bootstrap/dist/css/bootstrap.css';
angular.module('simple-todos', [
  angularMeteor,
  userAuth.name
]);

