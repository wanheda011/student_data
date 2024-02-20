import { Meteor } from 'meteor/meteor';
import { MongoInternals } from 'meteor/mongo';
import "../imports/startup/server/index";

Meteor.startup(() => {
  // code to run on server at startup
  const MongoURL = Meteor.settings.public.mongoURL;

});
