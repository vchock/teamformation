import { Mongo } from 'meteor/mongo';
 
export const Tasks = new Mongo.Collection('tasks');
export const Users = new Mongo.Collection('newusers');
