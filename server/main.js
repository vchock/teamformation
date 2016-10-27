import { Meteor } from 'meteor/meteor';
import {Tasks, Users} from '../imports/api/tasks.js';
Meteor.startup(() => {
  // code to run on server at startup
});
Meteor.publish('users',function(){
  return Users.find(); // or whatever subset you want for this user
});
