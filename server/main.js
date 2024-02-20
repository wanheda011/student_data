import { Meteor } from 'meteor/meteor';
import { MongoInternals } from 'meteor/mongo';
import "../imports/startup/server/index";

Meteor.startup(() => {
  // code to run on server at startup
  const remote = new MongoInternals.RemoteCollectionDriver("mongodb+srv://ajaysolanki1106:wUFHu5D1gHjbeEga@cluster0.mqtrgau.mongodb.net/");

  const newMongo = new Mongo.Collection('pitSubjects', { _driver: remote });
});
