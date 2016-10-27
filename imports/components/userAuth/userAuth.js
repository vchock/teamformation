import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './userAuth.html';
import { Users } from '../../api/tasks.js';
class AuthCtrl {
    constructor($scope) {
    $scope.viewModel(this);
    this.subscribe('users');
    this.hideCompleted = false;
    this.loggedin = false;
    this.username = '';
    this.ID= '';
    this.platform= '';
    this.usertoremove = {};
    this.helpers({
        incompleteCount() {
        return 4 - Users.find().count() % 4;
      }    
    })    
  }
  addUser(username, ID, platform) {
    // Insert a task into the collection
    Users.insert({
      username: username,
      ID: ID,
      platform: platform
    });
    this.loggedin = true;   
  }
    removeUser(ID) {
    var handle = Meteor.subscribe('users');
    const selector={};
    selector.ID = ID;
    this.usertoremove = Users.findOne(selector);
    Users.remove(this.usertoremove._id);
    this.loggedin = false;
    this.username = '';
    this.ID= '';
    this.platform= '';
  }  
}
 
export default angular.module('userAuth', [
  angularMeteor
])
  .component('userAuth', {
    templateUrl: 'imports/components/userAuth/userAuth.html',
    controller: AuthCtrl
  });